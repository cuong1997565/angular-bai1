import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductService } from './../../service/product.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product : Product = null;
  public subscription : Subscription;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public routeService: Router) { }

  ngOnInit() {
    //this.handleParamsRouteSnapshot();
    this.heandleParams();
  }

  heandleParams(){
     this.activatedRoute.params.subscribe(data => {
           let id = data.id;
           this.product = this.productService.getProductById(id);
     });
  }

  handleParamsRouteSnapshot()
  {
    let id = (+this.activatedRoute.snapshot.params['id']);
    this.product = this.productService.getProductById(id);
  }


  ngOnDestroy(){
      if (this.subscription)
      {
        this.subscription.unsubscribe();

      }
  }

  onBackToList(){
    // this.routeService.navigate(['products/list']);'
    this.routeService.navigate(['products']);
  }


  onEdit(){
    this.routeService.navigate(['edit/' ],{
      relativeTo: this.activatedRoute.parent
   });
  }

  onDelete(){
    console.log('delete');
  }
}
