import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';

export const apiErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
    .pipe(
      catchError((err:HttpErrorResponse) => {
        let error = '';

        if (err.error instanceof ErrorEvent) {
          error = 'Client Error';
        } else {
          error = 'Server Error';
        }

        let status = ''
        if (err.status == 500) {
          status = 'Internal Server Error';
        } else if (err.status == 404) {
          status = 'Not Found';
        } else if (err.status == 401) {
          status = 'Forbidden';
        } else {
          status = 'Unknown';
        }

        return throwError(()=> `${error} : ${status}`)
      })
    )
};
