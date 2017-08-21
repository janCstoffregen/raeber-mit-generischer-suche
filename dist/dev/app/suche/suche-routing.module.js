"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var suche_component_1 = require("./suche.component");
var SucheRoutingModule = (function () {
    function SucheRoutingModule() {
    }
    return SucheRoutingModule;
}());
SucheRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'suche', component: suche_component_1.SucheComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], SucheRoutingModule);
exports.SucheRoutingModule = SucheRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS9zdWNoZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MscURBQW1EO0FBVW5ELElBQWEsa0JBQWtCO0lBQS9CO0lBQ0EsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxrQkFBa0I7SUFSOUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTthQUM3QyxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO0tBQzFCLENBQUM7R0FDVyxrQkFBa0IsQ0FDOUI7QUFEWSxnREFBa0IiLCJmaWxlIjoiYXBwL3N1Y2hlL3N1Y2hlLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWNoZUNvbXBvbmVudCB9IGZyb20gJy4vc3VjaGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICdzdWNoZScsIGNvbXBvbmVudDogU3VjaGVDb21wb25lbnQgfVxuICAgIF0pXG4gIF0sXG4gIGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VjaGVSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==
