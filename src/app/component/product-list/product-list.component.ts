import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { Product } from './../../models/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public products : Product[] = [];
  public name : string = '';
  public price : number = 0;
  public queryParamSubscription : Subscription;
  constructor(
    public productService : ProductService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute) { }

  ngOnInit()
  {
    this.queryParamSubscription = this.activatedRoute.queryParams.subscribe(data =>{
       let name = data['name'];
       let price = data['price'];
       this.products = this.productService.getAllProducts(name, price);
    });
  }

  onSreach(){
      this.routerService.navigate(['products'],{queryParams: {name : this.name, price: this.price}});
  }
  ngOnDestroy(){
      if(this.queryParamSubscription){
        this.queryParamSubscription.unsubscribe();
      }
  }

}
