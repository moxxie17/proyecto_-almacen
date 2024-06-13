// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(user: any) {
    // Lógica para registrar al usuario, por ejemplo, llamada a una API.
    console.log('Registering user', user);
  }

  login(credentials: any) {
    // Lógica para iniciar sesión, por ejemplo, llamada a una API.
    console.log('Logging in', credentials);
  }
}

