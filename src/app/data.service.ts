import { Injectable } from '@angular/core';


@Injectable( { providedIn: 'root' } )
export class DataService {
    private lists: Array <Object > ;

    constructor() {
        this.load();
    }

    getLists() {
        return this.lists
    }
    save() {
        localStorage.setItem( 'lists', JSON.stringify( this.lists ) )
    }
    load() {
        this.lists = JSON.parse( localStorage.getItem( 'lists' ) ) || [];
    }
    saveNewList( listName: String ) {
        let newList = {
            listId: this.generateId( 'list' ),
            name: listName,
            tasks: []
        }
        this.lists.push( newList );
        this.save();
    }
    generateId( namespace ) {
        return `${namespace}-${Date.now()}-${Math.round(Math.random()*100)}`
    }
}