(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: flex;\n    flex-direction: column;\n    background-color: grey;\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n}\n\nheader {\n    background: tomato;\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n}\n\ninput {\n     background: transparent;\n     border-radius: 2px;\n     border:0;\n     border-bottom: 2px solid #fff;\n     padding: 0.5em;\n     /* flex:0; */\n     color: white;\n     /* font-weight: 800; */\n}\n\ninput::-webkit-input-placeholder {\n    color: #ddd;\n}\n\ninput:-ms-input-placeholder {\n    color: #ddd;\n}\n\ninput::-ms-input-placeholder {\n    color: #ddd;\n}\n\ninput::placeholder {\n    color: #ddd;\n}\n\n/* input::-webkit-input-placeholder {\n    color: white;\n} */\n\n/* input::-moz-placeholder {\n    color: white;\n} */\n\n/* input:-ms-input-placeholder {\n    color: white;\n} */\n\n/* input:-moz-placeholder {\n    color: white;\n} */\n\n.lists {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    /* overflow: auto; */\n    justify-content: flex-start;\n    align-items: flex-start;\n    border: 1px solid grey;\n    padding: 20px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"addList\">\n    <input type=\"text\"\n           [(ngModel)]=\"addListText\"\n           (keyup.enter)=\"onSaveNewList()\"\n           placeholder=\"Add new list\">\n\n</header>\n<section>\n    <div class=\"lists\"\n         [sortablejs]=\"lists\"\n         [sortablejsOptions]=\"sortableOptions\">\n        <list [data]=\"list\"\n              *ngFor=\"let list of lists\"></list>\n    </div>\n    <!-- <pre>{{lists | json}}</pre> -->\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataServ) {
        var _this = this;
        this.sortableOptions = {
            group: 'listSortable',
            animation: 150,
            handle: '.handle',
            onUpdate: function (event) {
                _this.dataService.save();
            }
        };
        dataServ.subscribeToLists(function (data) {
            _this.lists = data;
        });
        this.dataService = dataServ;
    }
    AppComponent.prototype.onSaveNewList = function () {
        if (this.addListText.trim() !== '') {
            this.dataService.saveNewList(this.addListText.trim());
            this.addListText = '';
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-item/task-item.component */ "./src/app/task-item/task-item.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var angular_sortablejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-sortablejs */ "./node_modules/angular-sortablejs/dist/index.js");
/* harmony import */ var angular_sortablejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_sortablejs__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_5__["TaskItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                angular_sortablejs__WEBPACK_IMPORTED_MODULE_7__["SortablejsModule"].forRoot({ animation: 150 }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.subscribers = [];
        this.load();
    }
    DataService.prototype.subscribeToLists = function (cb) {
        this.subscribers.push(cb);
        cb(this.lists);
    };
    DataService.prototype.runSubscribers = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var cb = _a[_i];
            cb(this.lists);
        }
    };
    DataService.prototype.save = function () {
        localStorage.setItem('lists', JSON.stringify(this.lists));
        console.log('saved to localstorage');
        this.runSubscribers();
    };
    DataService.prototype.load = function () {
        this.lists = JSON.parse(localStorage.getItem('lists')) || [];
    };
    DataService.prototype.saveNewList = function (listName) {
        var newList = {
            listId: this.generateId('list'),
            name: listName,
            tasks: []
        };
        this.lists.push(newList);
        this.save();
    };
    DataService.prototype.saveNewTask = function (taskName, list) {
        var newTask = {
            color: 'white',
            completed: false,
            listId: list.listId,
            taskId: this.generateId('task'),
            text: taskName
        };
        var listIndex = this.lists.findIndex(function (item) { return item.listId === list.listId; });
        this.lists[listIndex].tasks.push(newTask);
        this.save();
    };
    DataService.prototype.generateId = function (namespace) {
        return namespace + "-" + Date.now() + "-" + Math.round(Math.random() * 100);
    };
    DataService.prototype.removeList = function (id) {
        var index = this.lists.findIndex(function (item) { return item.listId === id; });
        this.lists.splice(index, 1);
        this.save();
    };
    DataService.prototype.removeTask = function (data) {
        var indexListId = this.lists.findIndex(function (item) { return item.listId === data.listId; });
        var indexTaskId = this.lists[indexListId].tasks.findIndex(function (item) { return item.taskId === data.taskId; });
        this.lists[indexListId].tasks.splice(indexTaskId, 1);
        this.save();
    };
    DataService.prototype.moveTask = function (data, newListId) {
        var indexListId = this.lists.findIndex(function (item) { return item.listId === data.listId; });
        var indexTaskId = this.lists[indexListId].tasks.findIndex(function (item) { return item.taskId === data.taskId; });
        this.lists[indexListId].tasks.splice(indexTaskId, 1);
        data.listId = newListId;
        var listIndex = this.lists.findIndex(function (item) { return item.listId === newListId; });
        this.lists[listIndex].tasks.push(data);
        this.save();
    };
    DataService.prototype.changeListId = function (taskId, newListId) {
        var indexListId = this.lists.findIndex(function (item) { return item.listId === newListId; });
        var indexTaskId = this.lists[indexListId].tasks.findIndex(function (item) { return item.taskId === taskId; });
        var newTask = __assign({}, this.lists[indexListId].tasks[indexTaskId]);
        newTask.listId = newListId;
        this.lists[indexListId].tasks[indexTaskId] = newTask;
        this.save();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n    width: 250px;\n    margin: 10px;\n    background: #aaa;\n    border-radius: 10px;\n    padding: 10px;\n    padding-top:0;\n}\n.listHeader {\n    display:flex;\n    justify-content: space-around;\n    align-items: center;\n    position: relative;\n    top:7px;\n}\n.listHeader {\n    opacity: 0;\n}\n.list:hover .listHeader {\n    opacity: 1;\n}\nh4 {\n    margin-top:0;\n}\n.addTask {\n    display: flex;\n    justify-content: space-between;\n}\n.drop-over-active {\n    border: dashed 1px black;\n    background-color: lightgreen;\n}\n.taskItems {\n    min-height: 2em;\n\n}\n.addTask {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n}\n.list .addTask input {\n opacity: 0;\n}\n.list:hover .addTask input,\ninput:focus {\n    opacity: 1 ;\n}\n.addTask input {\n    background: transparent;\n    border-radius: 2px;\n    border:0;\n    padding: 0.5em ;\n    flex:1;\n}\n.addTask i {\n    display: none;\n    flex:0;\n\n}\n.addTask:hover i ,\n.addTask:focus i,\n.addTask input:focus + i {\n    display: inline;\n\n}"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\"\n     id=\"listWraper-{{data.listId}}\">\n    <div class=\"listHeader\">\n        <div class=\"handle\"><i class=\"material-icons\">drag_handle</i></div>\n        <i class=\"material-icons button\"\n           (click)=\"onRemoveList()\">delete</i>\n\n    </div>\n    <h4>{{data.name}}</h4>\n    <div class=\"taskItems\"\n         [id]=\"data.listId\"\n         [sortablejs]=\"data.tasks\"\n         [sortablejsOptions]=\"sortableOptions\"\n         >\n        <div *ngFor=\"let taskItem of data.tasks\" [id]=\"taskItem.taskId\">\n            <task-item [data]=\"taskItem\"></task-item>\n        </div>\n\n    </div>\n    <div class=\"addTask\">\n        <input type=\"text\"\n               [(ngModel)]=\"newTaskName\"\n               placeholder=\"Add task\"\n               (keyup.enter)=\"onSaveNewTask()\">\n        <i class=\"material-icons button\"\n (click)=\"onSaveNewTask()\">add</i>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(dataServ) {
        var _this = this;
        this.sortableOptions = {
            group: 'shared',
            handle: '.handle',
            animation: 150,
            onEnd: function (event) {
                var taskId = event.item.id;
                var toListId = event.to.id;
                _this.dataService.changeListId(taskId, toListId);
            }
        };
        this.dataService = dataServ;
    }
    ListComponent.prototype.handleSortable = function (item) {
        console.log(item);
        return item;
    };
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.prototype.onSaveNewTask = function () {
        if (this.newTaskName.trim() !== '') {
            this.dataService.saveNewTask(this.newTaskName.trim(), this.data);
            this.newTaskName = '';
        }
    };
    ListComponent.prototype.onRemoveList = function () {
        this.dataService.removeList(this.data.listId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "data", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/task-item/task-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-item/task-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".taskItem {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    border-radius: 5px;\n    border-right-style:solid;\n    border-right-color:white;\n    border-right-width: 6px;\n    padding-right: 0.3em;\n    margin: 5px 0;\n    background: white;\n}\n.taskActions {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    opacity: 0;\n    transition: all 250ms ease-in;\n}\n.taskItem:hover .taskActions {\n    opacity: 1;\n}\n.taskActions * {\n    font-size: 22px;\n    transition: -webkit-transform 150ms ease-in;\n    transition: transform 150ms ease-in;\n    transition: transform 150ms ease-in, -webkit-transform 150ms ease-in;\n}\n.taskActions > *:hover {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n    /* transition-duration: 300ms; */\n}\n.taskActions > *{\n    \n    margin-left: 0.5em;\n    color:#444;\n}\nlabel {\n    position: relative;\n    top:3px;\n}\n.markCompleted {\n    display: none;\n}\n.completed  {\n    opacity: 0.6;\n    color: grey;\n    text-decoration: line-through;\n}\n.editText {\n    flex-shrink: 1;\n    border:none;\n    background: transparent;\n    /* font-style: italic; */\n    padding: 0.2em;\n}\n"

/***/ }),

/***/ "./src/app/task-item/task-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-item/task-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"taskItem \"\n     id=\"taskWrapper-{{data.taskId}}\"\n     [style.borderColor]=\"data.color\">\n    <!-- <pre>{{data | json}}</pre> -->\n    <div class=\"taskText {{data.completed ? 'completed' : ''}}\"\n         [hidden]=\"editing\"\n         (click)=\"startEdit(editBox)\">\n        {{data.text}}\n    </div>\n    <input [hidden]=\"!editing\"\n           #editBox\n           class=\"editText\"\n           [(ngModel)]=\"data.text\"\n           (keyup.enter)=\"finishEdit()\"\n           (blur)=\"finishEdit()\">\n    <div class=\"taskActions\">\n        <i class=\"material-icons button\"\n           (click)=\"onRemoveTask()\">delete</i>\n        <i class=\"material-icons button\"\n           (click)=\"startEdit(editBox)\">edit</i>\n        <label for=\"completed-{{data.taskId}}\"> \n            <i class=\"material-icons button\">{{data.completed ? 'check_box' : 'check_box_outline_blank'}}</i>\n        </label>\n\n        <input type=\"checkbox\"\n               id=\"completed-{{data.taskId}}\"\n               class=\"markCompleted\"\n               [(ngModel)]=\"data.completed\"\n               (change)=\"onCompleted()\">\n        <i class=\"material-icons button colorPicker\"\n           [(colorPicker)]=\"data.color\"\n           (colorPickerChange)=\"dataService.save()\"\n           [cpPresetColors]=\"['#0033FF', '#ff6347', '#FF00CC', '#adff2f', '#fff', '#000']\"\n           [cpPresetLabel]=\"''\">colorize</i>\n        <i class=\"material-icons handle\">drag_handle</i>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/task-item/task-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-item/task-item.component.ts ***!
  \**************************************************/
/*! exports provided: TaskItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemComponent", function() { return TaskItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskItemComponent = /** @class */ (function () {
    function TaskItemComponent(dataServ) {
        this.editing = false;
        this.dataService = dataServ;
    }
    TaskItemComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes)
    };
    TaskItemComponent.prototype.onRemoveTask = function () {
        this.dataService.removeTask(this.data);
    };
    TaskItemComponent.prototype.onCompleted = function () {
        this.dataService.save();
    };
    TaskItemComponent.prototype.startEdit = function (input) {
        this.editing = true;
        setTimeout(function () {
            input.focus();
        }, 0);
        // this.editInput.nativeElement.focus();
    };
    TaskItemComponent.prototype.finishEdit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editing = false;
            _this.dataService.save();
        }, 300);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskItemComponent.prototype, "data", void 0);
    TaskItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-item',
            template: __webpack_require__(/*! ./task-item.component.html */ "./src/app/task-item/task-item.component.html"),
            styles: [__webpack_require__(/*! ./task-item.component.css */ "./src/app/task-item/task-item.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TaskItemComponent);
    return TaskItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Juan\dev\scrum-board-angular2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map