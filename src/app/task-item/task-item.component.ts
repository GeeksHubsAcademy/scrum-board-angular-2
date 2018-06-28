import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnChanges {
  @Input() data: Object;
  constructor() {  }

  ngOnChanges(changes) {
    console.log(changes)
  }

}
