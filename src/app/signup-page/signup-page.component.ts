import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private service: AuthenticationServiceService) { }
  ngOnInit() {
  }

  onSignup(email: string, name: string, password: string, password1: string) {
    if (password === password1) {
    this.service.onSignup(email, name, password).subscribe(res => console.log(res));
    } else {
      alert('Error has occurred: Passwords dont match !');
    }
  }
}
