import { RouterModule, Routes }  from '@angular/router';

import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './service/guards/auth.guard';
import { AccessGuard } from './service/guards/access.guard';




export const appRouter : Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
      path: 'index',
      component: HomeComponent,
      canDeactivate: [AccessGuard]

  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  },
  {
    // path: 'products',
    // component: ProductComponent,
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: '',
      //   redirectTo: '/products/list',
      //   pathMatch: 'full'
      // },
      //  {
      //    path: 'list',
      //    component: ProductListComponent
      //  },
       {
         path: '',
         component: ProductDetailComponent
       },
       //edit
       {
         path: 'edit',
         component: ProductEditComponent
       }
    ]
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },

  // {
  //   path: 'products/:id',
  //   component: ProductDetailComponent
  // },
  {
      path:'login',
      component: LoginComponent
  },
  {
    path : "**",
    component: NotFoundComponent
  }
];
