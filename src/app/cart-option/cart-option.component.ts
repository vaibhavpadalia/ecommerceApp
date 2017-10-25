import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-cart-option',
  templateUrl: './cart-option.component.html',
  styleUrls: ['./cart-option.component.css']
})
export class CartOptionComponent implements OnInit {

  constructor(private service: AuthenticationServiceService) { }
  selectItem: any = [];
  ngOnInit() {
  }

}
