import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { AuthService } from '../auth-service.service'; // Service d'authentification

@Component({
  selector: 'app-cart-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  cartItems: any[] = []; // Stocke les articles du panier

  constructor(
    private cartService: CartServiceService,
    private authService: AuthService, // AuthService pour vérifier l'état de la connexion
    private router: Router // Router pour la redirection
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      return;
    }

    // Charger les articles du panier
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
    });
  }

  // Méthodes pour gérer le panier (diminuer, augmenter, supprimer)
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCartItem(item).subscribe();
    } else {
      this.removeItem(item); // Supprime l'article si la quantité atteint 0
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.cartService.updateCartItem(item).subscribe();
  }

  removeItem(item: any): void {
    this.cartService.removeCartItem(item.id).subscribe(() => {
      this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    });
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Méthode de déconnexion
  logout(): void {
    this.authService.logout();  // Appel de la méthode logout dans AuthService
    this.router.navigate(['/login']);  // Redirection vers la page de connexion
  }

  navigateToOrderHistory(): void {
    this.router.navigate(['/order-history']);
  }
  

    // Méthode pour finaliser la commande
    finalizeOrder(): void {
      if (this.cartItems.length > 0) {
        // Créer une commande avec les items du panier
        const order = {
          items: this.cartItems,
          totalPrice: this.getTotalPrice(),
          date: new Date().toISOString(),  // Enregistrer la date de la commande
        };
  
        // Envoyer l'historique de la commande
        this.cartService.addOrderToHistory(order).subscribe(() => {
          // Réinitialiser le panier après la commande
          this.cartService.clearCart().subscribe(() => {
            alert('Commande finalisée et ajoutée à l\'historique !');
            this.router.navigate(['/order-history']); // Rediriger vers l'historique des commandes
          });
        });
      } else {
        alert('Votre panier est vide, impossible de finaliser la commande.');
      }
    }

    
  }