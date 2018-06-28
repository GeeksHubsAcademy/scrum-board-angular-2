import { Component, OnChanges } from '@angular/core';
import { DataService } from './data.service';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent  {
    private lists: Object;
    private addListText: String;
    constructor( data: DataService ) {
      this.lists = data.getLists();
    }
    
}