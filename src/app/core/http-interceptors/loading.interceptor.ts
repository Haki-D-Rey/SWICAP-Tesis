import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs'

import { SpinnerLoadingService } from 'src/app/services/spinner-loading.service'

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private SpinnerLoadingService: SpinnerLoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.SpinnerLoadingService.show()
    return next.handle(request).pipe(
      tap(
        () => {},
        () => {
          this.SpinnerLoadingService.hide()
        }
      )
    )
  }
}
