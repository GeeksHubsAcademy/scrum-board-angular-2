import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TaskItemComponent } from './task-item/task-item.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { DragAndDropModule } from 'angular-draggable-droppable';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    DragAndDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
