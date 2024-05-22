import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  Users:any[]=[];
  session!:JSON;
  localData:any;
  sessionData:any;
  user :any;

  constructor()
  {

  }
  ngOnInit()
  {
    this.localData = localStorage.getItem("Users");
    this.sessionData = sessionStorage.getItem("isLoggedIn");
    this.Users = JSON.parse(this.localData);
    this.user = this.Users.find(o=> o.email == JSON.parse(this.sessionData).user);
  }
}
