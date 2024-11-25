import { Routes } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { LoginComponent } from './login-component/login-component.component';
import { OrderHistoryComponent } from './order-history-component/order-history-component.component'; // Importer le composant


export const routes: Routes = [
  { path: '', component: ProductListComponentComponent },  // Page d'accueil
  { path: 'cart', component: CartComponentComponent },     // Page du panier
  { path: 'login', component: LoginComponent },           // Page de login
  { path: 'order-history', component: OrderHistoryComponent }, // Route pour l'historique des commandes
  { path: '**', redirectTo: '', pathMatch: 'full' }       // Redirection par défaut
];
