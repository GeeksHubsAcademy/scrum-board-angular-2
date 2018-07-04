import { Component, OnChanges, Input } from '@angular/core';
import {Task} from '../task.interface';
import {DataService} from '../data.service';
@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnChanges {
  @Input() data: Task;
  private dataService;
  constructor(dataServ: DataService) {
    this.dataService = dataServ;
  }

  ngOnChanges(changes) {
    // console.log(changes)
  }

  onRemoveTask(){
    this.dataService.removeTask(this.data);
  }
  onCompleted() {
    
    
    this.dataService.save();
    
  }

}
