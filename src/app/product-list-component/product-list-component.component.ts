import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { AuthService } from '../auth-service.service'; // Service d'authentification
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private cartService: CartServiceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.cartService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  // Méthode de déconnexion
  logout(): void {
    this.authService.logout();  // Appel de la méthode logout dans AuthService
    this.router.navigate(['/login']);  // Redirection vers la page de connexion
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const query = input?.value.trim().toLowerCase() || '';
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }

  filterProducts(category: string): void {
    if (category === 'Tous') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe(() => {
      alert(`${product.name} a été ajouté au panier !`);
    });
  }

  navigateToOrderHistory(): void {
    this.router.navigate(['/order-history']);
  }
}