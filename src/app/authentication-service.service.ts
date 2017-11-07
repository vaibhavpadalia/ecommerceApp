import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationServiceService {
  constructor(private http: Http) {
  }
  email = '';

  onSignup(email: string, name: string, password: string) {
    return this.http.post('http://localhost:8888/api/v1/createUser',
    ({ email : email , name: name, password: password}));
  }

  onLogin(email: string, password: string) {
    return this.http.get('http://localhost:8888/api/v1/getUser/' + email + '/' + password);
  }

  addPrice(price: number) {
    return this.http.put('http://localhost:8888/api/v1/updateTotalCost/' + this.email, {price: price});
  }

  isLoggedIn() {
    return this.email === '' ? false : true ;
  }

  // loadAllProducts() {
  //   return this.http.get('http://localhost:8888/api/v1/getAllProducts');
  // }
}
