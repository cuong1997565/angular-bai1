import { Injectable } from '@angular/core';
import {CanDeactivate } from '@angular/router';
import { HomeComponent } from './../../component/home/home.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanDeactivate<HomeComponent> {
  canDeactivate() : boolean {
    if(localStorage.getItem('key')){
      return true;
    }else{
      return false;
    }
  }
}
