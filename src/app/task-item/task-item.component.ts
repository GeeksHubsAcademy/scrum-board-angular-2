import { Component, OnChanges, Input } from '@angular/core';
import {Task} from '../task.interface';
@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnChanges {
  @Input() data: Task;
  constructor() {  }

  ngOnChanges(changes) {
    // console.log(changes)
  }

}
