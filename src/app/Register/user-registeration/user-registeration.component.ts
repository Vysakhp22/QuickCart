import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent implements OnInit {

  userRegisterForm = this.fb.group({
    fullName: ['', Validators.required],
    dob: ['', Validators.required],
    age: ['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    mobile:['',[Validators.required,Validators.maxLength(10)]],
    userName: ['',Validators.required],
    password: ['',[Validators.required,Validators.minLength(8)]],
    cpassword: ['',[Validators.required,this.confirmPassword()]]
  });

  public get f(){
    return this.userRegisterForm?.controls;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  confirmPassword():ValidatorFn{
    return (control:AbstractControl):{ [key:string]:any } | null =>
    control.value === this.f?.password.value ? null : { confirm:true }
  }

  public ageCalculator() {
    const today = new Date();
    const dob = this.userRegisterForm?.value?.dob || 0;
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.userRegisterForm.controls.age.setValue(age.toString());
  }

}
