// order-history.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history-component.component.html',
  styleUrls: ['./order-history-component.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [];  // Tableau pour stocker l'historique des commandes

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    // Récupérer l'historique des commandes
    this.cartService.getOrderHistory().subscribe((data) => {
      console.log('Commandes récupérées :', data);  // Ajouter un log pour voir les données
      this.orders = data;  // Stocker les commandes récupérées dans le tableau 'orders'
    });
  }
}
