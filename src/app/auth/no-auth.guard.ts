import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // User ID
  const userID = localStorage.getItem('id');

  if (userID) {
    // Redirect to dashboard
    router.navigate(['']);
    return false;
  } else {
    return true;
  }
};
