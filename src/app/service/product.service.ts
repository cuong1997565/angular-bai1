import { Injectable } from '@angular/core';
import { Product } from './../models/product.class';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [
    {
      id: 1,
      name: 'Iphone 7 plus',
      price: 17000000,
      status: true
    },
    {
      id: 2,
      name: 'Samsung glaxy s7',
      price: 12000000,
      status: false
    },
    {
      id: 3,
      name: 'Oppo f1s',
      price: 17000000,
      status: true
    }
  ];

  constructor() { }

  getAllProducts(name : string, price :number){
    let result: Product[] = this.products;
    if(name)
    {
      result = this.products.filter(x => {
          return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      });
    }
    if(price)
    {
      result = this.products.filter(x => {
          return x.price == price;
      });
    }
    return result;
  }

  getProductById(id : number){
     let result = null;
     for(var i = 0; i < this.products.length; i++)
     {
       if(this.products[i].id == id)
       {
          result = this.products[i];
          break;
       }
     }
     return result;
  }
}
