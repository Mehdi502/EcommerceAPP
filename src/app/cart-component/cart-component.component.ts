import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../cart-service.service'; // Import du service

@Component({
  selector: 'app-cart-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  // Méthode pour diminuer la quantité
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--; // Diminue la quantité
    } else {
      // Optionnel : Retirer l'article si la quantité atteint 0
      const index = this.cartItems.indexOf(item);
      if (index > -1) {
        this.cartItems.splice(index, 1);
      }
    }
  }

  // Méthode pour augmenter la quantité
  increaseQuantity(item: any): void {
    item.quantity++; // Augmente la quantité
  }

  // Méthode pour calculer le total
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
