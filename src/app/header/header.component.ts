import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';
import { FacebookService } from 'ngx-facebook';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthenticationServiceService, private router: Router, private fb: FacebookService) { }

  ngOnInit() {
  }
  logout() {
    this.service.email = '';
    this.router.navigate(['/welcome']);
    this.fb.logout().then(() => console.log('Logged out!'));

  }
}
