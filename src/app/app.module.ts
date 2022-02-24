import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AuthGuard } from './guards/auth.guard';
import { PagesModule } from './pages/pages.module';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { UrlInterceptor } from './services/urlInterceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true},
    AuthGuard,
    AuthService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
