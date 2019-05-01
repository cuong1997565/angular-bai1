import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../../service/logging.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public title: string ="first Component";

  constructor( private _LoggingService : LoggingService) {
   }

  ngOnInit() {
  }

  onClick(){
    this._LoggingService.logging();
  }


}
