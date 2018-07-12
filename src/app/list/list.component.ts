import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { List } from '../list.interface';
import { SortablejsOptions } from 'angular-sortablejs';

@Component( {
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.css' ]
} )
export class ListComponent implements OnInit {
    @Input() data: List;
    private newTaskName: string;
    private dataService: DataService;
    
    private sortableOptions: SortablejsOptions = {
        group: 'sortable',
        handle: '.handle',
        animation: 150,
        onEnd: (event: any) => {
            // console.log(event);
            
            this.dataService.save()
            
        }
    }
    handleSortable(item){
        console.log(item);
        return item
        
    }
    constructor( dataServ: DataService ) {
        this.dataService = dataServ;
    }

    ngOnInit() {}
    onSaveNewTask() {
        if ( this.newTaskName.trim() !== '' ) {
            this.dataService.saveNewTask( this.newTaskName.trim(), this.data )
            this.newTaskName = '';
        }
    }
    onRemoveList() {
        this.dataService.removeList( this.data.listId );
    }

}