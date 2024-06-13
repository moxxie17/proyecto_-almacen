// src/app/app.config.ts
import { provideRouter, Route } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

export const appConfig = {
  providers: [provideRouter(routes)],
};
