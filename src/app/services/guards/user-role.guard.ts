import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {UseStateService} from '../auth/use-state.service';

export const userRoleGuard: CanActivateFn = (route, state) => {
  const userState = inject(UseStateService);
  const router = inject(Router);

  const userRole = userState.getRole();

  if (userRole == "CLIENT") {
    router.navigate(['/tienda']);
    return false
  } else if (!userRole) {
    router.navigate(['/login']);
    return false;
  } else {
    return true;
  }

};
