
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { EmailService } from './auth/services/email.service';
import { AuthService } from './auth/services/auth.service';
import { UserService } from './auth/services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './common/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, UserService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
