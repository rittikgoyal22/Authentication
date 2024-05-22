import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logIn :string | null="false";
  obj : any;

  constructor(private router: Router)
  {

  }

  ngOnInit()
  {
    this.router.events.subscribe(()=>
      {
        this.obj = sessionStorage.getItem("isLoggedIn");
        this.logIn = (JSON.parse(this.obj)).status;
    })
  }

  logout()
  {
    sessionStorage.setItem("isLoggedIn", JSON.stringify({status:"false",user:''}));
    this.router.navigate(['/login']);
  }
}
