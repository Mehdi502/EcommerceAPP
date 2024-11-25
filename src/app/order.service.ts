import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'http://localhost:3000/orders'; // URL pour les commandes

  constructor(private http: HttpClient) {}

  // Récupère les commandes
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.ordersUrl);
  }
}