import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Router pour la redirection
import { AuthService } from '../auth-service.service'; // Service d'authentification

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        // Si l'utilisateur est connecté, rediriger vers le panier
        this.router.navigate(['/']);
      } else {
        this.loginError = 'Identifiants incorrects. Veuillez réessayer.';
      }
    });
  }
}
