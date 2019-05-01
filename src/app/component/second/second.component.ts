import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../../service/logging.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  public title:string = "Second Component";
  private _LoggingService : LoggingService
  constructor(_LoggingService: LoggingService) {
     this._LoggingService = _LoggingService;
   }

  ngOnInit() {
  }

  clickMe ()
  {
    this._LoggingService.logging();
  }

}
