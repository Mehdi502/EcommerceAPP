import { Routes } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component'; // Chemin corrigé

export const routes: Routes = [
  { path: '', component: ProductListComponentComponent }, // Page d'accueil
  { path: 'cart', component: CartComponentComponent }, // Route pour le panier
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection pour les routes inexistantes
];
