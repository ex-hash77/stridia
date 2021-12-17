import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stridia';
  // profileForm:FormGroup;

  constructor(){
  }
  // createForm(){
  //   this.profileForm = this.fb.group({
  //     email:['', Validators.required, Validators.email],
  //     password:['', Validators.required, Validators.minLength(6)]
  //   })
  // }
}
