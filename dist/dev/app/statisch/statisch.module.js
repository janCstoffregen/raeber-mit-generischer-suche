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
var statisch_routing_module_1 = require("./statisch-routing.module");
var StatischModule = (function () {
    function StatischModule() {
    }
    return StatischModule;
}());
StatischModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            statisch_routing_module_1.StatischRoutingModule
        ],
        declarations: [
            statisch_routing_module_1.routingComponents
        ],
        exports: [
            statisch_routing_module_1.routingComponents
        ]
    })
], StatischModule);
exports.StatischModule = StatischModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdGF0aXNjaC9zdGF0aXNjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBRS9DLHFFQUFxRjtBQWNyRixJQUFhLGNBQWM7SUFBM0I7SUFDQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLGNBQWM7SUFaMUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWiwrQ0FBcUI7U0FDdEI7UUFDRCxZQUFZLEVBQUU7WUFDWiwyQ0FBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCwyQ0FBaUI7U0FDbEI7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUMxQjtBQURZLHdDQUFjIiwiZmlsZSI6ImFwcC9zdGF0aXNjaC9zdGF0aXNjaC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgU2ViYXN0aWFuIFNjaMO8cGJhY2ggKHNlYmFzdGlhbi5zY2h1ZXBiYWNoQHVuaWJhcy5jaCkgb24gNy8yMS8xNy5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgcm91dGluZ0NvbXBvbmVudHMsIFN0YXRpc2NoUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc3RhdGlzY2gtcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFN0YXRpc2NoUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICByb3V0aW5nQ29tcG9uZW50c1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgcm91dGluZ0NvbXBvbmVudHNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0aXNjaE1vZHVsZSB7XG59XG4iXX0=
