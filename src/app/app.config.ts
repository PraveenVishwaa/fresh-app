import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { JwtModule } from "@auth0/angular-jwt";
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { spinnerInterceptor } from './interceptors/spinner.interceptor';
import { apiErrorHandlerInterceptor } from './interceptors/api-error-handler.interceptor';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ["http://localhost:4200"],
          disallowedRoutes: ["http://localhost:4200/login"],
        },
      }),
    ),
    provideHttpClient(
      withInterceptors([spinnerInterceptor,apiErrorHandlerInterceptor]),
      withInterceptorsFromDi()
    )
  ]
};
