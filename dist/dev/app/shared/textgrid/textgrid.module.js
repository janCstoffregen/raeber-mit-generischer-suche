"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var paging_service_1 = require("./paging.service");
var textgrid_component_1 = require("./textgrid.component");
var TextgridModule = (function () {
    function TextgridModule() {
    }
    return TextgridModule;
}());
TextgridModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCardModule,
            router_1.RouterModule
        ],
        declarations: [
            textgrid_component_1.TextgridComponent
        ],
        providers: [
            paging_service_1.DynamicPaging
        ],
        exports: [
            textgrid_component_1.TextgridComponent
        ]
    })
], TextgridModule);
exports.TextgridModule = TextgridModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdGV4dGdyaWQvdGV4dGdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyw4Q0FBdUU7QUFDdkUsMENBQStDO0FBRS9DLG1EQUFpRDtBQUNqRCwyREFBeUQ7QUFtQnpELElBQWEsY0FBYztJQUEzQjtJQUNBLENBQUM7SUFBRCxxQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksY0FBYztJQWpCMUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWiwrQkFBb0I7WUFDcEIsdUJBQVk7WUFDWixxQkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osc0NBQWlCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsOEJBQWE7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLHNDQUFpQjtTQUNsQjtLQUNGLENBQUM7R0FDVyxjQUFjLENBQzFCO0FBRFksd0NBQWMiLCJmaWxlIjoiYXBwL3NoYXJlZC90ZXh0Z3JpZC90ZXh0Z3JpZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgU2ViYXN0aWFuIFNjaMO8cGJhY2ggKHNlYmFzdGlhbi5zY2h1ZXBiYWNoQHVuaWJhcy5jaCkgb24gNy8yMS8xNy5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1kQnV0dG9uVG9nZ2xlTW9kdWxlLCBNZENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEeW5hbWljUGFnaW5nIH0gZnJvbSAnLi9wYWdpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBUZXh0Z3JpZENvbXBvbmVudCB9IGZyb20gJy4vdGV4dGdyaWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNZENhcmRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRleHRncmlkQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIER5bmFtaWNQYWdpbmdcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRleHRncmlkQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGdyaWRNb2R1bGUge1xufVxuIl19
