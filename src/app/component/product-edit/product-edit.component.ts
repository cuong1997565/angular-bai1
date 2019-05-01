import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './../../models/product.class';
import { Subscription } from 'rxjs';
import { ProductService } from './../../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  public product : Product = null;
  public subscription : Subscription = null;
  constructor(public activatedRoute: ActivatedRoute, public productService: ProductService) { }

  ngOnInit() {
    this.handleParams();
  }

  handleParams()
  {
    this.activatedRoute.parent.params.subscribe((params : Params) => {
        let id = params['id'];
        this.product = this.productService.getProductById(id);
        console.log(this.product);
    });
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
