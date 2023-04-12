import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InyectSessionInterceptor } from './core/interceptors/inyect-session.interceptor';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InyectSessionInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
