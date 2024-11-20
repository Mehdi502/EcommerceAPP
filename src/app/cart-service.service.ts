import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Service disponible globalement
})
export class CartServiceService {
  private cartItems: any[] = []; // Liste des articles dans le panier

  getCartItems(): any[] {
    return this.cartItems; // Retourne les articles du panier
  }

  addToCart(item: any): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
