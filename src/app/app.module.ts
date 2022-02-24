import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './shared/store/auth/auth.effects';
import { authReducer } from './shared/store/auth/auth.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { AuthGuard } from './guards/auth.guard';
import { PagesModule } from './pages/pages.module';
import { AuthService } from './services/auth.service';
import { UrlInterceptor } from './services/urlInterceptor.service';
import { LoginModule } from './routes/login/login.module';
import { logsReducer } from './shared/components/logs/store/logs.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TaskDudeModule } from './routes/task-dude/task-dude.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    LoginModule,
    TaskDudeModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer, logs: logsReducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true},
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
