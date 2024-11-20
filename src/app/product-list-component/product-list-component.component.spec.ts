import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../cart-service.service'; // Importe le service

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {
  products = [
    {
      id: 1,
      name: 'Télévision 4K',
      price: 599,
      category: 'Électronique',
      image: 'https://via.placeholder.com/150x100.png?text=T%C3%A9l%C3%A9vision+4K'
    },
    {
      id: 2,
      name: 'Casque Bluetooth',
      price: 129,
      category: 'Accessoires',
      image: 'https://via.placeholder.com/150x100.png?text=Casque+Bluetooth'
    },
    {
      id: 3,
      name: 'Smartphone',
      price: 899,
      category: 'Électronique',
      image: 'https://via.placeholder.com/150x100.png?text=Smartphone'
    }
  ];

  constructor(private cartService: CartServiceService) {} // Injection du service

  // Méthode pour ajouter un produit au panier
  addToCart(product: any): void {
    this.cartService.addToCart(product); // Ajoute l'article au panier via le service
    alert(`${product.name} a été ajouté au panier !`);
  }
}
