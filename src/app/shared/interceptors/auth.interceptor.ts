import {
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.desa';

//Clase para enfoque a modulos

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const clone = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apiKey}`,
      },
    });
    return next.handle(clone);
  }
}

//funcion para enfoque a standalone
export function authInterceptorFn(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const clone = req.clone({
    setHeaders: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${environment.apiKey}`,
    },
  });
  return next(clone);
}
