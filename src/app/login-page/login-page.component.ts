import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email= '';
  user: any = [];
  app;
  token: any; // Token is used for storing the token which is received when you have logged in
  data;
  userDetails: Object;
  userInfo: boolean = false;
  constructor(private router: Router, private service: AuthenticationServiceService, private fb: FacebookService) { 
    let initParams: InitParams = {
      appId: '199625333914464', // Should not be shared
      cookie: true,  // enable cookies to allow the server to access  the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.8'
    };
    fb.init(initParams);
  }
  FbLogin() {
    console.log('Inside fb login'); // Testing purpose only
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'user_posts,public_profile,user_friends,email,pages_show_list,publish_actions'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.data = res.authResponse.userID;
        this.token = res.authResponse.accessToken;


        // api for getting the specified fields.
        this.fb.api('/me?fields=gender,first_name,last_name,email,picture')
          .then((res: any) => {
            this.userDetails = res;
            console.log('this is res =' + res.email);  // For testing purpose only
            this.email = res.email;
            this.userInfo = true;
          });
          if (this.userDetails !== null) {
          this.router.navigate(['/products']);
          this.service.email = this.email;
          return this.service.email = this.email;
          }
      })
      .catch(this.handleError);
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }
  ngOnInit() {
  }

  login(email: string, password: string) {
    this.service.onLogin(email)
    .subscribe(res => {
      this.user = JSON.parse(res.text());
      if (this.user == null) {
        console.log('Error occurred');
        alert('Error occurred ');
      } else if (this.user.password === password) {
        this.router.navigate(['/products']);
        this.service.email = this.user.email;
        return this.service.email;
      } else {
        console.log('Error occurred');
        alert('Error occurred');
      }
  });
}
}
