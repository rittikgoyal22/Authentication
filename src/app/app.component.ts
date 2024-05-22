import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,LoginComponent, RegisterComponent, InfoComponent, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Authentication';
  constructor()
  {
    sessionStorage.setItem("isLoggedIn", JSON.stringify({status:"false",user:''}));
  }
}
