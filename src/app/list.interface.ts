import {Task} from './task.interface';

export interface List {
    listId: string
    name: string,
    tasks: Array<Task>
}