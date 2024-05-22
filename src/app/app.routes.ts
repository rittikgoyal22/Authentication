import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'home', component:HomeComponent, title:"Home Page"},
    {path:'register', component:RegisterComponent, title:"Registration Page"},
    {path:'login', component:LoginComponent, title:"Login Page"},
    {path:'info', component:InfoComponent, title:"Info Page", canActivate:[authGuard]}
];
