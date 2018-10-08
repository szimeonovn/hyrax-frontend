import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
