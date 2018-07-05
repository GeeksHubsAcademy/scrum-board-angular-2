import { Injectable } from '@angular/core';
import { List } from './list.interface';
import {Task} from './task.interface';

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
        let newList: List = {
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
        let listIndex = this.lists.findIndex(item => item.listId === list.listId)
        this.lists[listIndex].tasks.push(newTask);
        
        this.save();

    }
    generateId( namespace ) {
        return `${namespace}-${Date.now()}-${Math.round(Math.random()*100)}`
    }
    removeList( id: string ) {
       
        let index = this.lists.findIndex( item => item.listId === id)
        this.lists.splice(index,1);
        this.save();
    }

    removeTask(data:Task){
        let indexListId = this.lists.findIndex(item => item.listId === data.listId)
        let indexTaskId = this.lists[indexListId].tasks.findIndex(item => item.taskId === data.taskId);
        this.lists[indexListId].tasks.splice(indexTaskId, 1);
        this.save();
    }
    moveTask(data: Task, newListId: string){
        let indexListId = this.lists.findIndex(item => item.listId === data.listId)
        let indexTaskId = this.lists[indexListId].tasks.findIndex(item => item.taskId === data.taskId);
        this.lists[indexListId].tasks.splice(indexTaskId, 1);

        data.listId = newListId;
        
        let listIndex = this.lists.findIndex(item => item.listId === newListId);
        this.lists[listIndex].tasks.push(data);
        this.save();
    }
}