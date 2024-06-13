// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator()
      ]]
    });
  }

  passwordValidator() {
    return (control: any) => {
      const value = control.value;

      if (!/[A-Z]/.test(value)) {
        return { passwordStrength: 'La contraseña debe contener al menos una letra mayúscula' };
      }

      if (!/[a-z]/.test(value)) {
        return { passwordStrength: 'La contraseña debe contener al menos una letra minúscula' };
      }

      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        return { passwordStrength: 'La contraseña debe contener al menos un carácter especial' };
      }

      if (/\d{2,}/.test(value)) {
        return { passwordStrength: 'La contraseña no puede contener números consecutivos' };
      }

      if (/(.)\1/.test(value)) {
        return { passwordStrength: 'La contraseña no puede contener caracteres idénticos consecutivos' };
      }

      if (this.hasConsecutiveLetters(value)) {
        return { passwordStrength: 'La contraseña no puede contener letras consecutivas del alfabeto' };
      }

      return null;
    };
  }

  hasConsecutiveLetters(password: string): boolean {
    for (let i = 0; i < password.length - 1; i++) {
      if (password.charCodeAt(i) + 1 === password.charCodeAt(i + 1)) {
        return true;
      }
    }
    return false;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value);
    }
  }
}


