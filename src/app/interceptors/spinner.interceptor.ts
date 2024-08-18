import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { inject } from '@angular/core';  

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(SpinnerService).isShowSpinner;
  spinner.next(true);
  
  return next(req).pipe(
      finalize(() => {
        spinner.next(false);
      })
    )
}
