import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logForm!:FormGroup;
  visible:boolean=true;
  changetype:boolean=true;
  localData : any;
  Users : any[]=[];
  errMsg : string | null = "Wrong Password";
  wrong : boolean =false;
  constructor(private fb: FormBuilder, private router:Router)
  {
    
  }

  viewpass()
  {
    if(this.visible && this.changetype )
      {
        this.visible=false;
        this.changetype=false;
      }
      else
      {
        this.visible=true;
        this.changetype=true;
      }
  }
  
  ngOnInit()
  {
    this.localData = localStorage.getItem("Users");
    if(this.localData!=null)
      {
        this.Users = JSON.parse(this.localData);
      }
    this.logForm = this.fb.group({
      'email':['', Validators.compose([Validators.required, Validators.email])],
      'pass':['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
    });
  }
  
  login()
  {
    const userExist = this.Users.find(o=>o.email == this.logForm.controls['email'].value);
    const auth = this.Users.find(o=>o.pass==this.logForm.controls['pass'].value);
    if(userExist && auth)
      {
        sessionStorage.setItem("isLoggedIn", JSON.stringify({status:"true",user:this.logForm.controls['email'].value}));
        this.router.navigate(['/info']);
      }
      else if(userExist && !auth){
        this.wrong = true;
        this.errMsg = "Wrong password";
        this.logForm.patchValue({'pass':''});
        sessionStorage.setItem("isLoggedIn", JSON.stringify({status:"false",user:''}));
      }
      else{
        alert("User doesn't exist, Please SignUp First");
        this.router.navigate(['/register']);
        sessionStorage.setItem("isLoggedIn", JSON.stringify({status:"false",user:''}));

      }
  }

  ok()
  {
    this.wrong = false;
  }

}
