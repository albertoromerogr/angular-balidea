// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { SharedModule } from './shared/shared.module';
// import {
//   HTTP_INTERCEPTORS,
//   HttpClient,
//   HttpClientModule,
// } from '@angular/common/http';
// import { AuthInterceptor } from '@shared/interceptors/auth.interceptor';
// import { TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule, TranslateModule],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AuthInterceptor,
//       multi: true,
//     },
//     {
//       provide: TranslateLoader,
//       useFactory: (http: HttpClient) => {
//         return new TranslateHttpLoader(http, './assets/i18n', '.json');
//       },
//       deps: [HttpClient],
//     },
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
