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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS90ZXh0Z3JpZC90ZXh0Z3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDhDQUF1RTtBQUN2RSwwQ0FBK0M7QUFFL0MsbURBQWlEO0FBQ2pELDJEQUF5RDtBQW1CekQsSUFBYSxjQUFjO0lBQTNCO0lBQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxjQUFjO0lBakIxQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLCtCQUFvQjtZQUNwQix1QkFBWTtZQUNaLHFCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWixzQ0FBaUI7U0FDbEI7UUFDRCxTQUFTLEVBQUU7WUFDVCw4QkFBYTtTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asc0NBQWlCO1NBQ2xCO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FDMUI7QUFEWSx3Q0FBYyIsImZpbGUiOiJhcHAvc3VjaGUvdGV4dGdyaWQvdGV4dGdyaWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFNlYmFzdGlhbiBTY2jDvHBiYWNoIChzZWJhc3RpYW4uc2NodWVwYmFjaEB1bmliYXMuY2gpIG9uIDcvMjEvMTcuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNZEJ1dHRvblRvZ2dsZU1vZHVsZSwgTWRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRHluYW1pY1BhZ2luZyB9IGZyb20gJy4vcGFnaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGV4dGdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RleHRncmlkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWRDYXJkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZXh0Z3JpZENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEeW5hbWljUGFnaW5nXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZXh0Z3JpZENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRncmlkTW9kdWxlIHtcbn1cbiJdfQ==
