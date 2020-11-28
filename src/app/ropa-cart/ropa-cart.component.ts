import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ItemCartService } from '../item-cart.service';
import { Ropa } from '../ropa-list/ropa';

@Component({
  selector: 'app-ropa-cart',
  templateUrl: './ropa-cart.component.html',
  styleUrls: ['./ropa-cart.component.scss']
})
export class RopaCartComponent implements OnInit {

  cartList$: Observable<Ropa[]>;
  constructor(private cart: ItemCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
