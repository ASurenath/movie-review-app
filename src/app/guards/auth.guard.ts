import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authStutus=inject(ApiService)
  const router=inject(Router)
  if(authStutus.loginStatus){
    return true;
  }
  else{
    alert("Access denied. Please login")
    router.navigateByUrl('')
    return false
  }
};
