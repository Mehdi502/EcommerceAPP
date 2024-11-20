import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../cart-service.service';

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
      image: 'https://th.bing.com/th/id/OIP.M2P2-Okx-s-SmREO200j0QHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    },
    {
      id: 2,
      name: 'Casque Bluetooth',
      price: 129,
      category: 'Accessoires',
      image: 'https://th.bing.com/th/id/OIP.jbT8Zub5PTRzjHC-4OcACgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    },
    {
      id: 3,
      name: 'Smartphone',
      price: 899,
      category: 'Électronique',
      image: 'https://th.bing.com/th/id/OIP.OcdSqY5gftJvJieB7BYLpwHaHa?w=177&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    }
  ];

  // Initialisation de la liste filtrée
  filteredProducts = this.products;

  constructor(private cartService: CartServiceService) {}

  // Méthode pour filtrer les produits par catégorie
  filterProducts(category: string): void {
    if (category === 'Tous') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }

  // Méthode pour ajouter un produit au panier
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} a été ajouté au panier !`);
  }
}
