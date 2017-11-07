import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder , private service: AuthenticationServiceService) {
      this.form = this.fb.group({
        'name': ['', [Validators.required,
        Validators.minLength(5), Validators.maxLength(25)]],
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required,
          Validators.minLength(8), Validators.maxLength(20)]],
        'confirm': ['', [Validators.required,
        Validators.minLength(8), Validators.maxLength(20)]]
      });
   }
  ngOnInit() {
  }

  onSignup(email: string, name: string, password: string, password1: string) {
    console.log(email);
    if (password === password1) {
      this.service.onSignup(email, name, password).subscribe((res) => {
        console.log(JSON.parse(res.text()).success);  // For testing purpose only
        if (JSON.parse(res.text()).success) {
          alert('Signup Successful');
          this.form.reset();
        } else {
          alert('Signup Failed. User Exists !!')
        }
      });
    } else {
      alert('Error has occurred: Passwords dont match !');
    }
  }
}
