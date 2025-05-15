// Enfoque a módulos
//
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

// Enfoque a standalone
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptorFn } from '@shared/interceptors/auth.interceptor';
import { catchError, throwError } from 'rxjs';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptorFn,
        (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
          return next(req).pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status >= 100) {
                console.error('Se ha producido un error en el sistema');
              }
              return throwError(() => error);
            }),
          );
        },
      ]),
    ),
  ],
});
