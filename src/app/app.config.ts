import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {tokenInterceptor} from './services/interceptors/token.interceptor';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideToastr} from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        tokenInterceptor
      ])
    ), provideAnimations(),
    provideToastr(
      {maxOpened:1,
        preventDuplicates: true,
        autoDismiss: true
      }
    )

  ]
};
