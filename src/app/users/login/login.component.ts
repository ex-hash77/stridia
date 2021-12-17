import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  createForm(){
      this.profileForm = this.fb.group({
        email:['', Validators.required, Validators.email],
        password:['', Validators.required, Validators.minLength(6)]
      });
    }
    
  ngOnInit(): void {
  }

}
