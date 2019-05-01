import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './service/product.service';
import { Product } from './models/product.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bai2';
  public products : Product[] = [];
  constructor (public RouterService: Router, public productService : ProductService)
  {

  }
  ngOnInit(){
  }

  navigate(url : string){
      this.RouterService.navigate([url]);
  }

}
