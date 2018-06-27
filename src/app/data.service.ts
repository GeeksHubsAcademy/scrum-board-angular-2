import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private lists = [{
    "listId": "list-1527162757956-93",
    "name": "HOLA",
    "tasks": [{
      "taskId": "task-1527162789999-97",
      "text": "asdasd",
      "completed": false,
      "color": "tomato",
      "listId": "list-1527162757956-93"
    },
    {
      "taskId": "task-1527162804002-28",
      "text": "eyyy",
      "completed": false,
      "color": "tomato",
      "listId": "list-1527162757956-93"
    }
    ]
  },
  {
    "listId": "list-1530092940943-56",
    "name": "hola",
    "tasks": [{
      "taskId": "task-1530092942999-71",
      "text": "asdas",
      "completed": false,
      "color": "tomato",
      "listId": "list-1530092940943-56"
    }, {
      "taskId": "task-1530092944317-15",
      "text": "asdasd",
      "completed": false,
      "color": "tomato",
      "listId": "list-1530092940943-56"
    }, { "taskId": "task-1530092947093-16", "text": "asdasd", "completed": false, "color": "tomato", "listId": "list-1530092940943-56" }, {
      "taskId": "task-1530092948542-54",
      "text": "asda",
      "completed": false,
      "color": "tomato",
      "listId": "list-1530092940943-56"
    }, {
      "taskId": "task-1530092949749-77",
      "text": "asdas",
      "completed": false,
      "color": "tomato",
      "listId": "list-1530092940943-56"
    }]
  }, {
    "listId": "list-1530093112347-72",
    "name": "hola",
    "tasks": [{ "taskId": "task-1530093119467-66", "text": "hola", "completed": false, "color": "tomato", "listId": "list-1530093112347-72" }, {
      "taskId": "task-1530093120994-78",
      "text": "asdas",
      "completed": false,
      "color": "tomato",
      "listId": "list-1530093112347-72"
    }, {
      "taskId": "task-1530093122178-30",
      "text": "asda",
      "completed": false,
      "color": "tomato",
      "listId": "list-1530093112347-72"
    }]
  }, {
    "listId": "list-1530093127163-67",
    "name": "aqsdasd",
    "tasks": [{
      "taskId": "task-1530093128763-44",
      "text": "asda",
      "completed": false,
      "color": "tomato",
      "listId": "list-1530093127163-67"
    }]
  }
  ]

  constructor() { }

  getLists() {
    return this.lists
  }
}
