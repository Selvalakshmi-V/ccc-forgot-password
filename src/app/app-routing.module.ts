import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { InitialpageComponent } from './common/components/initialpage/initialpage.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const app_routes: Routes = [
  { path: '', redirectTo: '/initial', pathMatch: 'full' },
  { path: 'initial', component: InitialpageComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
