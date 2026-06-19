import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Biblioteca Digital';
  isAuthenticated$!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.getAuthStatus();
  }

  /**
   * Realiza el logout del usuario
   */
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
