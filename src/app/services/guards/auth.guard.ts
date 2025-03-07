import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TokenService} from '../auth/token.service';
import {firstValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../../enviroments/enviroment';
import {UseStateService} from '../auth/use-state.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const tokenService = inject(TokenService);
  const userState = inject(UseStateService)
  const router = inject(Router);
  const http = inject(HttpClient)

  const accessToken = tokenService.getAccessToken();
  const refreshToken = tokenService.getRefreshToken();

  const username = userState.getUsername()

  if (!accessToken || !username) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const response:any = await firstValueFrom(
      http.post(`${enviroment.apiUrl}/users/check-token`, {username: "david", token: accessToken})
    )

    return true;

  }catch (error) {
    tokenService.removeTokens();
    router.navigate(['/login']);
    return false;
  }

};
