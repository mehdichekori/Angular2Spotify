"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var parent_component_1 = require("./../Child-Parent/parent.component");
var core_1 = require("@angular/core");
var _ = require("lodash");
var StylesComponent = (function () {
    function StylesComponent() {
        this.color = 'black';
        this.size = 16;
        this.colors = Array();
        this.backup = Array();
        this.ticks = 0;
        this.c = 0;
    }
    StylesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colors.push('Green', 'Purple', 'Blue', 'Black', 'Orange');
        this.backup = this.colors;
        // let timer = Observable.timer(0,1000);
        // timer.subscribe(t=>this.ticks = t);
        setInterval(function () {
            _this.ticks = (new Date().getTime() / 1000 - new Date("2017-05-04:12:45:00Z").getTime() / 1000);
            _this.hh = Math.floor(_this.ticks / 3600);
            _this.leftover = _this.ticks % 3600;
            _this.mm = Math.floor(_this.leftover / 60);
            _this.ss = (_this.ticks % 60).toFixed(0);
            _this.c = _this.ticks * 0.005555555555555555;
            //console.log(this.hh+'h'+this.mm+'m'+this.ss+'s',this.c.toFixed(2)+'$');     
        }, 1000);
    };
    StylesComponent.prototype.changeColor = function (col) {
        this.color = col;
    };
    StylesComponent.prototype.removeLastOfArray = function () {
        this.colors = _.dropRight(this.colors);
    };
    StylesComponent.prototype.resetArray = function () {
        this.colors = this.backup;
    };
    return StylesComponent;
}());
StylesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'styles',
        templateUrl: 'styles.component.html',
        directives: [parent_component_1.parentComponent]
    })
], StylesComponent);
exports.StylesComponent = StylesComponent;
//# sourceMappingURL=styles.component.js.map