import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // User ID
  const userID = localStorage.getItem('id');

  if (userID) {
    return true;
  } else {
    // Redirect to login
    router.navigate(['/login']);
    return false;
  }
};
