import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { DependecyInjectionComponent } from './component/dependecy-injection/dependecy-injection.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ServiceComponent } from './component/service/service.component';
import { AppMovieListComponent } from './component/app-movie-list/app-movie-list.component';
import { AppMovieEditComponent } from './component/app-movie-edit/app-movie-edit.component';

//service
import { LoggingService } from './service/logging.service';
import { MovieService } from './service/movie.service';
import { RouterComponent } from './component/router/router.component';
import { HeaderComponent } from './component/header/header.component';


import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductService } from './service/product.service';

import { AuthGuard } from './service/guards/auth.guard';

import {  appRouter } from './app.routes';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { LoginComponent } from './component/login/login.component';
import { AccessGuard } from './service/guards/access.guard';
// import { RouterModule, Routes }  from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    DependecyInjectionComponent,
    FirstComponent,
    SecondComponent,
    ServiceComponent,
    AppMovieListComponent,
    AppMovieEditComponent,
    RouterComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    LoginComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    LoggingService,
    MovieService,
    ProductService,
    AuthGuard,
    AccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
