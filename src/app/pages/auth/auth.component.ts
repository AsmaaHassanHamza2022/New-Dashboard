import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public signInForm:FormGroup|any;
  hide = true;
  constructor(public authService:AuthService ,private formBuilder:FormBuilder) { 
  }
  get f(){
   return this.signInForm.controls;
  }

  ngOnInit(): void {
   this.signInForm= this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]

    })
  }
  getErrorMessage() {
    if (this.f['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.f['email'].hasError('email') ? 'Not a valid email' : '';
  }

}
