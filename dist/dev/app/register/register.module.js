"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var register_component_1 = require("./register.component");
var register_navigation_component_1 = require("./register-navigation/register-navigation.component");
var register_beschreibung_component_1 = require("./register-beschreibung/register-beschreibung.component");
var register_titelregister_component_1 = require("./titelregister/register-titelregister.component");
var router_1 = require("@angular/router");
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            material_1.MdButtonModule,
            material_1.MdListModule,
            router_1.RouterModule.forChild([
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'register/:zeitraum', component: register_component_1.RegisterComponent }
            ])
        ],
        declarations: [
            register_beschreibung_component_1.RegisterBeschreibungComponent,
            register_component_1.RegisterComponent,
            register_navigation_component_1.RegisterNavigationComponent,
            register_titelregister_component_1.RegisterTitelregisterComponent
        ],
        exports: [register_component_1.RegisterComponent],
        providers: []
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxzQ0FBeUM7QUFDekMsc0NBQTJDO0FBQzNDLDhDQUFpRTtBQUNqRSw4REFBMEQ7QUFDMUQsMkRBQXlEO0FBQ3pELHFHQUFrRztBQUNsRywyR0FBd0c7QUFDeEcscUdBQWtHO0FBQ2xHLDBDQUErQztBQXVCL0MsSUFBYSxjQUFjO0lBQTNCO0lBQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxjQUFjO0lBcEIxQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxnQ0FBYTtZQUNiLGlCQUFVO1lBQ1YseUJBQWM7WUFDZCx1QkFBWTtZQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO2dCQUNsRCxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7YUFDN0QsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFO1lBQ1osK0RBQTZCO1lBQzdCLHNDQUFpQjtZQUNqQiwyREFBMkI7WUFDM0IsaUVBQThCO1NBQy9CO1FBQ0QsT0FBTyxFQUFFLENBQUUsc0NBQWlCLENBQUU7UUFDOUIsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0dBQ1csY0FBYyxDQUMxQjtBQURZLHdDQUFjIiwiZmlsZSI6ImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgUmV0byBCYXVtZ2FydG5lciAocmZiYXVtZ2FydG5lcikgb24gMDcuMDcuMTcuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE1kQnV0dG9uTW9kdWxlLCBNZExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXItbmF2aWdhdGlvbi9yZWdpc3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWdpc3RlckJlc2NocmVpYnVuZ0NvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXItYmVzY2hyZWlidW5nL3JlZ2lzdGVyLWJlc2NocmVpYnVuZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJUaXRlbHJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi90aXRlbHJlZ2lzdGVyL3JlZ2lzdGVyLXRpdGVscmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBNZEJ1dHRvbk1vZHVsZSxcbiAgICBNZExpc3RNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHsgcGF0aDogJ3JlZ2lzdGVyJywgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAncmVnaXN0ZXIvOnplaXRyYXVtJywgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9XG4gICAgXSlcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUmVnaXN0ZXJCZXNjaHJlaWJ1bmdDb21wb25lbnQsXG4gICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgUmVnaXN0ZXJOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgIFJlZ2lzdGVyVGl0ZWxyZWdpc3RlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbIFJlZ2lzdGVyQ29tcG9uZW50IF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJNb2R1bGUge1xufVxuIl19
