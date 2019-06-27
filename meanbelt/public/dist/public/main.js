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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newreview/newreview.component */ "./src/app/newreview/newreview.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








var routes = [
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
    { path: 'pets/:id/edit', component: _update_update_component__WEBPACK_IMPORTED_MODULE_4__["UpdateComponent"] },
    { path: 'pets/:id', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_5__["ReviewsComponent"] },
    { path: 'new/:id/reviews', component: _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_6__["NewreviewComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<!-- <div>\n  <h1>Let's eat</h1><br>\n  <button (click)=\"refresh()\">Refresh</button>\n  <button [routerLink]=\"['/new']\">New Resurant</button><br>\n\n  <table class=\"table\">\n    <tr>\n      <th>Resturants</th>\n      <th>Cuisine</th>\n      <th>Actions Available</th>\n    </tr>\n    <tr *ngFor=\"let task of tasks\" >\n      <td>{{task.title}}</td>\n      <td>{{task.description}} </td>\n      <td>\n        <button [routerLink]=\"['/reviews', task._id, 'reviews']\">Read Reviews</button>\n        <button [routerLink]=\"['/update', task._id, 'edit']\">Update</button>\n        <Button (click)=\"deleteTask(task._id)\">Delete</Button>\n      </td>\n    </tr>\n  </table>\n  \n</div> -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    // getallshit(){
    //   let obs = this._httpService.getTasks();
    //   obs.subscribe(data => {
    //     // console.log(data);
    //     this.tasks=data;
    //   })
    // }
    // deleteTask(id:any){
    //   let obs = this._httpService.deleteTask(id,this.tasks);
    //   obs.subscribe(data => {
    //     this.getallshit();
    //   })
    // }
    // refresh(): void {
    //   window.location.reload();
    //   this._router.navigate(['/'])
    // }
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        // _httpService.getTasks();
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.tasks = {title: "", description: ""},
        // this.getallshit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "tasks", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newreview/newreview.component */ "./src/app/newreview/newreview.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./like/like.component */ "./src/app/like/like.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_7__["NewComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__["ReviewsComponent"],
                _newreview_newreview_component__WEBPACK_IMPORTED_MODULE_10__["NewreviewComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _like_like_component__WEBPACK_IMPORTED_MODULE_12__["LikeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n<div>\n  <h1>Pet Shelter</h1><br>\n  <h3>These pets are looking for home!</h3>\n  <!-- <button (click)=\"refresh()\">Refresh</button> -->\n  <button [routerLink]=\"['/new']\">Add a pet to the shelter</button><br>\n\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let task of tasks\" >\n      <td>{{task.title}}</td>\n      <td>{{task.type}} </td>\n      <td>\n        <button [routerLink]=\"['/pets', task._id]\">Details</button>\n        <button [routerLink]=\"['/pets', task._id, 'edit']\">Edit</button>\n        <Button (click)=\"deleteTask(task._id)\">Delete</Button>\n      </td>\n    </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        // _httpService.getTasks();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.tasks = { title: "", description: "" },
            this.getallshit();
    };
    HomeComponent.prototype.getallshit = function () {
        var _this = this;
        var obs = this._httpService.getTasks();
        obs.subscribe(function (data) {
            // console.log(data);
            _this.tasks = data;
        });
    };
    HomeComponent.prototype.deleteTask = function (id) {
        var _this = this;
        var obs = this._httpService.deleteTask(id, this.tasks);
        obs.subscribe(function (data) {
            _this.getallshit();
        });
    };
    HomeComponent.prototype.refresh = function () {
        this._router.navigate(['/']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeComponent.prototype, "tasks", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_httpClient) {
        this._httpClient = _httpClient;
    }
    HttpService.prototype.getTasks = function () {
        return this._httpClient.get('/new');
    };
    HttpService.prototype.SubmitNewTask = function (task) {
        return this._httpClient.post('/new', task);
    };
    HttpService.prototype.updateTask = function (id, editTask) {
        return this._httpClient.put("/update/" + id + "/edit", editTask);
    };
    HttpService.prototype.getTasksone = function (id) {
        return this._httpClient.get("/update/" + id);
    };
    HttpService.prototype.deleteTask = function (id, task) {
        return this._httpClient.delete("/update/" + id, task);
    };
    HttpService.prototype.createReview = function (id, newReview) {
        return this._httpClient.post("/new/" + id + "/reviews", newReview);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/like/like.component.css":
/*!*****************************************!*\
  !*** ./src/app/like/like.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpa2UvbGlrZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/like/like.component.html":
/*!******************************************!*\
  !*** ./src/app/like/like.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  like works!\n</p>\n"

/***/ }),

/***/ "./src/app/like/like.component.ts":
/*!****************************************!*\
  !*** ./src/app/like/like.component.ts ***!
  \****************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
    }
    LikeComponent.prototype.ngOnInit = function () {
    };
    LikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-like',
            template: __webpack_require__(/*! ./like.component.html */ "./src/app/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.css */ "./src/app/like/like.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (submit)=\"SubmitNewTask()\">\n  <!-- use the json pipe to see how newTask changes in real time -->\n  <h1>Pet Shelter</h1>\n  <h3>Know of a pet needing a home?</h3>\n  \n  <p>\n    <label for=\"title\">Pet name: </label><br>\n    <input type=\"text\" name=\"task.title\"  [(ngModel)]=\"task.title\" autocomplete=\"off\"/>\n  </p>\n  <p>\n    <label for=\"title\">Pet type: </label><br>\n    <input type=\"text\" name=\"task.type\"  [(ngModel)]=\"task.type\" autocomplete=\"off\"/>\n  </p>\n  <p>\n    <label for=\"description\">Description: </label><br>\n    <input type=\"text\" name=\"task.description\" [(ngModel)]=\"task.description\" autocomplete=\"off\" />\n  </p>\n  <p>Skill:</p>\n  <p>\n    <label for=\"title\">Skill 1: </label><br>\n    <input type=\"text\" name=\"task.skill1\"  [(ngModel)]=\"task.skill1\" autocomplete=\"off\"/>\n  </p>\n  <p>\n    <label for=\"title\">Skill 2: </label><br>\n    <input type=\"text\" name=\"task.skill2\"  [(ngModel)]=\"task.skill2\" autocomplete=\"off\"/>\n  </p>\n  <p>\n    <label for=\"title\">Skill 3: </label><br>\n    <input type=\"text\" name=\"task.skill3\"  [(ngModel)]=\"task.skill3\" autocomplete=\"off\"/>\n  </p>\n  \n  <input type=\"hidden\" #like=\"ngModel\" name=\"task.like\"  [(ngModel)]=\"task.like\" value=\"0\">\n\n  <input type=\"submit\" value=\"Add pet\" /><button [routerLink]=\"['']\">Cancel</button>\n</form>\n\n\n<p *ngIf = \"anyerror\">{{error.errors}}</p>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.task = { title: '', type: '' };
        this.anyerror = false;
    };
    NewComponent.prototype.SubmitNewTask = function () {
        var _this = this;
        console.log(this.task);
        var obs = this._httpService.SubmitNewTask(this.task);
        obs.subscribe(function (data) {
            if (data.errors) {
                _this.anyerror = true;
                _this.error = {
                    errors: data.message
                };
            }
            else {
                _this.task = { title: '', type: '' };
                console.log('Added new', data);
                _this._router.navigate(['/']);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewComponent.prototype, "task", void 0);
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/newreview/newreview.component.css":
/*!***************************************************!*\
  !*** ./src/app/newreview/newreview.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Jldmlldy9uZXdyZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/newreview/newreview.component.html":
/*!****************************************************!*\
  !*** ./src/app/newreview/newreview.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Adding New Reviews!</h1>\n\n\n<form (submit)='createReview()'>\n  <p>\n    <label for=\"name\">Name: </label>\n    <input type=\"text\" name=\"newReview.name\" [(ngModel)]=\"newReview.name\">\n  </p>\n  <p>\n    <label for=\"star\">Stars: </label>\n    <select name=\"newReview.star\"  [(ngModel)]=\"newReview.star\">\n      <option value=\"5\">5</option>\n      <option value=\"4\">4</option>\n      <option value=\"3\">3</option>\n      <option value=\"2\">2</option>\n      <option value=\"1\">1</option>\n    </select>\n  </p>\n  <p>\n    <label for=\"description\">Description: </label>\n    <input type=\"text\" name=\"newReview.description\" [(ngModel)]=\"newReview.description\">\n  </p>\n  <input type=\"submit\" value=\"Add Review\">\n</form>\n<button [routerLink]=\"['']\">Go back</button>\n\n<p *ngIf = \"anyerror\">{{error.errors}}</p>\n"

/***/ }),

/***/ "./src/app/newreview/newreview.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newreview/newreview.component.ts ***!
  \**************************************************/
/*! exports provided: NewreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewreviewComponent", function() { return NewreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewreviewComponent = /** @class */ (function () {
    function NewreviewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newReview = { star: 5, description: "" };
        this.anyerror = false;
        this._route.params.subscribe(function (params) {
            // console.log(params); //log the entire params
            // console.log(params['id']); //log the id
            _this.thistask = params['id'];
            // this.getoneshit();
        });
    };
    NewreviewComponent.prototype.createReview = function () {
        var _this = this;
        var obs = this._httpService.createReview(this.thistask, this.newReview);
        obs.subscribe(function (data) {
            if (data.errors) {
                _this.anyerror = true;
                _this.error = {
                    errors: data.message
                };
            }
            else {
                console.log(data);
                // this.allCakes.push(data);
                _this._router.navigate(["/reviews/" + _this.thistask + "/reviews"]);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewreviewComponent.prototype, "thistask", void 0);
    NewreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newreview',
            template: __webpack_require__(/*! ./newreview.component.html */ "./src/app/newreview/newreview.component.html"),
            styles: [__webpack_require__(/*! ./newreview.component.css */ "./src/app/newreview/newreview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewreviewComponent);
    return NewreviewComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/reviews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n\n<h1>Pet Shelter</h1>\n<h3>Details about {{tasks.title}}</h3><a [routerLink]=\"['']\">Home</a>\n\n<!-- <button [routerLink]=\"['/new', thistask._id, 'reviews']\">New Review</button> -->\n\n<!-- <button (click)=\"addnewreview(thistask)\">Add New Review</button> -->\n<!-- <button [routerLink]=\"['/new', thistask,'reviews']\">Add New Review</button> -->\n\n<table>\n  <tr>\n    <td>Pet type</td>\n    <td>{{tasks.type}}</td>\n  </tr>\n  <tr>\n    <td>Description:</td>\n    <td>{{tasks.description}}</td>\n  </tr>\n  <tr>\n    <td>Skills:</td>\n    <td>{{tasks.skill1}}</td>\n  </tr>\n  <tr>\n    <td>&nbsp;</td>\n    <td>{{tasks.skill2}}></td>\n  </tr>\n  <tr>\n    <td>&nbsp;</td>\n    <td>{{tasks.skill3}}</td>\n  </tr>\n  <tr>\n    <td>Likes:</td>\n    <td>{{likes}}</td>\n  </tr>\n</table>\n<form (click)='addlike()'>\n  <button type=\"submit\">Like this pet</button>\n</form>\n<button>Adopt this pet!</button>\n\n\n\n\n\n\n\n\n<!-- <table class=\"table table-striped\">\n  <tr>\n    <th>Customer</th>\n    <th>Stars</th>\n    <th>Descriptions</th>\n  </tr>\n  <tr *ngFor=\"let review of tasks.reviews\">\n    <td>{{review.name}}</td>\n    <td>{{review.star}}</td>\n    <td>{{review.description}}</td>\n  </tr>\n  \n</table> -->\n\n\n\n<!-- <app-newreview *ngIf='visibility' [RestforReview] = 'thistask' ></app-newreview> -->"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.likes = 0;
        this.alltasks = { title: "", description: "", like: '0' },
            this.tasks = { name: '', star: '', description: '' },
            this.getallshit();
        this.visibility = false;
        this._route.params.subscribe(function (params) {
            // console.log(params); //log the entire params
            // console.log(params['id']); //log the id
            _this.thistask = params['id'];
            _this.getoneshit();
        });
    };
    ReviewsComponent.prototype.addlike = function () {
        this.likes += 1;
    };
    ReviewsComponent.prototype.getoneshit = function () {
        var _this = this;
        //let obs = this._httpService.getTasks(this.id);
        var obs = this._httpService.getTasksone(this.thistask);
        obs.subscribe(function (data) {
            console.log(data);
            _this.tasks = data;
        });
    };
    ReviewsComponent.prototype.getallshit = function () {
        var _this = this;
        var obs = this._httpService.getTasks();
        obs.subscribe(function (data) {
            // console.log(data);
            _this.alltasks = data;
        });
    };
    ReviewsComponent.prototype.addnewreview = function (thistask) {
        this.visibility = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReviewsComponent.prototype, "thistask", void 0);
    ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/reviews/reviews.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"updateTask()\">\n  <!-- use the json pipe to see how newTask changes in real time -->\n  <h1>Pet Shlter</h1><br>\n  <h3>Edit this pet</h3>\n\n  <p>\n    <label for=\"title\">Pet Name: </label>\n    <input type=\"text\" name=\"editTask.title\"  [(ngModel)]=\"editTask.title\" />\n  </p>\n  <p>\n      <label for=\"type\">Pet Type: </label>\n      <input type=\"text\" name=\"editTask.type\"  [(ngModel)]=\"editTask.type\" />\n    </p>\n  <p>\n    <label for=\"description\">Cuisine: </label>\n    <input type=\"text\" name=\"editTask.description\" [(ngModel)]=\"editTask.description\"/>\n  </p>\n  <p>Skill (optional):</p>\n  <p>\n    <label for=\"title\">Skill 1: </label><br>\n    <input type=\"text\" name=\"editTask.skill1\"  [(ngModel)]=\"editTask.skill1\" />\n  </p>\n  <p>\n    <label for=\"title\">Skill 2: </label><br>\n    <input type=\"text\" name=\"editTask.skill2\"  [(ngModel)]=\"editTask.skill2\" />\n  </p>\n  <p>\n    <label for=\"title\">Skill 3: </label><br>\n    <input type=\"text\" name=\"editTask.skill3\"  [(ngModel)]=\"editTask.skill3\" />\n  </p>\n  <button [routerLink]=\"['']\">Cancel</button>\n  <input type=\"submit\" value=\"Edit pet\" />\n</form>\n\n<p *ngIf = \"anyerror\">{{error.errors}}</p>"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editTask = { title: '', description: '' };
        this.anyerror = false;
        this._route.params.subscribe(function (params) {
            console.log(params); //log the entire params
            console.log(params['id']); //log the id
            _this.toEdit = params['id'];
            _this.getoneshit();
        });
    };
    UpdateComponent.prototype.getoneshit = function () {
        var _this = this;
        //let obs = this._httpService.getTasks(this.id);
        var obs = this._httpService.getTasksone(this.toEdit);
        obs.subscribe(function (data) {
            _this.editTask = data;
        });
    };
    UpdateComponent.prototype.updateTask = function () {
        var _this = this;
        var obs = this._httpService.updateTask(this.toEdit, this.editTask);
        obs.subscribe(function (data) {
            if (data.errors) {
                _this.anyerror = true;
                _this.error = {
                    errors: data.message
                };
            }
            else {
                _this.editTask = data;
                _this._router.navigate(['/']);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UpdateComponent.prototype, "toEdit", void 0);
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\elihc\Desktop\mongoose\meanbelt\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map