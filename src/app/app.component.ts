import { Component, OnChanges } from '@angular/core';
import { DataService } from './data.service';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent  {
    private lists: Array<Object>;
    private addListText: String;
    private dataService: DataService;
    constructor( dataServ: DataService ) {
        this.lists = dataServ.getLists();
        this.dataService = dataServ;
    }
    onSaveNewList() {
        if (this.addListText.trim() !== '') {
            this.dataService.saveNewList(this.addListText.trim());
            this.addListText = '';
        }
    }
    
}