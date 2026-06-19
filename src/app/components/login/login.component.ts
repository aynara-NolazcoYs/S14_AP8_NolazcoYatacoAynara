import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loginError = '';
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Inicializa el formulario reactivo con validaciones
   */
  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Método para acceder a los controles del formulario de forma sencilla en el template
   */
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Realiza el login del usuario
   */
  onSubmit(): void {
    this.submitted = true;
    this.loginError = '';

    // Detiene el envío si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // Intenta realizar el login
    if (this.authService.login(email, password)) {
      // Login exitoso, redirige a home
      this.router.navigate(['/home']);
    } else {
      // Login fallido, muestra error
      this.loginError = 'Correo o contraseña incorrectos. Intenta con adminkook@gmail.com / Sum9701';
      this.submitted = false;
    }
  }

  /**
   * Alterna la visibilidad de la contraseña
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Obtiene el tipo de input para la contraseña
   */
  getPasswordInputType(): string {
    return this.showPassword ? 'text' : 'password';
  }
}
