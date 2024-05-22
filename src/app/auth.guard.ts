import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let isLoggedIn:any;
  let what:any;
  isLoggedIn = sessionStorage.getItem('isLoggedIn');
  what = JSON.parse(isLoggedIn);

  if(what.status=='false')
  {
    alert('Please Login First to proceed');
    router.navigate(['login']);
    return false;
  }

  return true;
};
