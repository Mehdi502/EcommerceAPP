import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL pour la liste des utilisateurs

  constructor(private http: HttpClient) {}

  // Méthode pour se connecter
  login(username: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      // Rechercher l'utilisateur dans la base de données simulée (db.json)
      this.http
        .get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`)
        .subscribe((users) => {
          if (users.length > 0) {
            // Si un utilisateur est trouvé avec les identifiants, authentifier l'utilisateur
            localStorage.setItem('isAuthenticated', 'true'); // Stocker l'état de l'utilisateur dans le localStorage
            localStorage.setItem('username', username); // Enregistrer le nom d'utilisateur dans le localStorage
            observer.next(true); // Connexion réussie
          } else {
            observer.next(false); // Connexion échouée
          }
          observer.complete();
        });
    });
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true'; // Vérifier dans le stockage local si l'utilisateur est connecté
  }

  // Méthode pour récupérer le nom d'utilisateur de la session active
  getUsername(): string | null {
    return localStorage.getItem('username'); // Retourner le nom d'utilisateur stocké
  }

  // Méthode pour se déconnecter
  logout(): void {
    localStorage.removeItem('isAuthenticated'); // Retirer l'état de la connexion
    localStorage.removeItem('username'); // Retirer le nom d'utilisateur
  }
}
