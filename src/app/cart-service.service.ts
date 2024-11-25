import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private cartUrl = 'http://localhost:3000/cart'; // URL pour le panier (JSON-Server)
  private productsUrl = 'http://localhost:3000/products'; // URL pour les produits (JSON-Server)
  private orderHistoryUrl = 'http://localhost:3000/order-history'; // URL pour l'historique des commandes

  constructor(private http: HttpClient) {}

  /**
   * Récupère la liste des produits.
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  /**
   * Récupère les articles du panier.
   */
  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.cartUrl);
  }

  /**
   * Ajoute un produit au panier.
   * @param product Produit à ajouter au panier.
   */
  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.cartUrl, product);
  }

  /**
   * Met à jour un article dans le panier.
   * @param product Produit à mettre à jour avec sa quantité.
   */
  updateCartItem(product: Product): Observable<Product> {
    const url = `${this.cartUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  /**
   * Supprime un produit du panier.
   * @param productId ID du produit à supprimer.
   */
  removeCartItem(productId: string): Observable<void> {
    const url = `${this.cartUrl}/${productId}`;
    return this.http.delete<void>(url);
  }

  /**
   * Enregistre une commande dans l'historique des commandes.
   * @param order Objet représentant la commande.
   */

// cart-service.service.ts

  addOrderToHistory(order: any): Observable<any> {
    const orderHistoryUrl = 'http://localhost:3000/order-history';  // URL pour l'historique des commandes
    return this.http.post<any>(orderHistoryUrl, order);  // Ajout de la commande à l'historique
  }

  getOrderHistory(): Observable<any[]> {
    const orderHistoryUrl = 'http://localhost:3000/order-history';  // URL pour l'historique des commandes
    return this.http.get<any[]>(orderHistoryUrl);  // Récupération de l'historique des commandes
  }
  

  /**
   * Vide le panier.
   */
  clearCart(): Observable<void> {
    return this.http.delete<void>(this.cartUrl);  // Supprimer tous les articles du panier
  }
}
