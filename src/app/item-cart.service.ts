import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ropa } from './ropa-list/ropa';

@Injectable({
  providedIn: 'root'
})
export class ItemCartService {

    private _cartList: Ropa[]=[];
    cartList:BehaviorSubject<Ropa[]>=new BehaviorSubject(this._cartList);

  constructor() { }
  
  addToCart(item: Ropa) {

    if(item.quantity!=0){
    let unidad= this._cartList.find((v1)=>v1.name == item.name);
    if(!unidad){
    this._cartList.push({...item});
    }else{
      unidad.quantity+=item.quantity;

    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
    }
  }

  
}
