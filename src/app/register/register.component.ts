import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  regForm!: FormGroup;
  signupUsers : any[] = [];
  done : boolean = false;
  msg : string | null = null;


  constructor(private fb: FormBuilder)
  {
    this.signupUsers = JSON.parse(localStorage.getItem("Users")!);
  }

  ngOnInit()
  {
    this.regForm = this.fb.group(
      {
        'fname':['',Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
        'lname':['', Validators.compose([])],
        'email':['', Validators.compose([Validators.required, Validators.email])],
        'pass':['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
        'confpass':['', Validators.compose([Validators.required])]
      }, 
    );
  }

  passnot():boolean{
    const pass =  this.regForm.controls['pass'].value;
    const confpass = this.regForm.controls['confpass'].value;
    if(pass!='' && confpass!='' && pass===confpass)
      return true;
    return false;
  }

  register()
  {
    if(this.regForm.value!=null)
    {
      this.signupUsers.push(this.regForm.value);
      localStorage.setItem("Users", JSON.stringify(this.signupUsers));
      this.regForm.reset();
      this.done=true;
      this.msg = "Registered Successfully";
    }
  }

  ok()
  {
    this.done= false;
  }
}
