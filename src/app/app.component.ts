import { Component, OnChanges } from '@angular/core';
import { DataService } from './data.service';
import { List} from './list.interface';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
} )
export class AppComponent  {
    private lists: Array<List>;
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