import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Credenciales simuladas
  private validCredentials = {
    email: 'adminKook@gmail.com',
    password: 'Sum9701'
  };

  constructor() { }

  /**
   * Realiza el login verificando las credenciales
   * @param email Email del usuario
   * @param password Contraseña del usuario
   * @returns true si las credenciales son correctas, false en caso contrario
   */
  login(email: string, password: string): boolean {
    if (email.toLowerCase() === this.validCredentials.email.toLowerCase() && password === this.validCredentials.password) {
      localStorage.setItem('user_token', 'auth_token_' + Date.now());
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  /**
   * Realiza el logout del usuario
   */
  logout(): void {
    localStorage.removeItem('user_token');
    this.isAuthenticatedSubject.next(false);
  }

  /**
   * Verifica si el usuario está autenticado
   * @returns true si está autenticado, false en caso contrario
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user_token');
  }

  /**
   * Obtiene el estado de autenticación actual
   * @returns Observable del estado de autenticación
   */
  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticated$;
  }
}
