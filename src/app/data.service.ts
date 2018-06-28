import { Injectable } from '@angular/core';
import { List } from './list.interface';

@Injectable( { providedIn: 'root' } )
export class DataService {
    private lists: Array < List > ;

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
    saveNewList( listName: string ) {
        let newList = {
            listId: this.generateId( 'list' ),
            name: listName,
            tasks: []
        }
        this.lists.push( newList );
        this.save();
    }
    saveNewTask( taskName: string, list: List ) {
        let newTask = {
            color: 'white',
            completed: false,
            listId: list.listId,
            taskId: this.generateId( 'task' ),
            text: taskName
        }
        this.lists = this.lists.map( item => {
            if ( item.listId === list.listId ) {
                item.tasks.push( newTask )
            }
            return item;
        } )
        this.save();

    }
    generateId( namespace ) {
        return `${namespace}-${Date.now()}-${Math.round(Math.random()*100)}`
    }
    removeList( id: string ) {
       
        this.lists = this.lists.filter(item => item.listId !== id);
        this.save();
    }
}