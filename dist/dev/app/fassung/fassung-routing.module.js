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
var fassung_component_1 = require("./fassung.component");
var FassungRoutingModule = (function () {
    function FassungRoutingModule() {
    }
    return FassungRoutingModule;
}());
FassungRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'drucke/abgewandt-zugewandt/:konvolut/:fassung', component: fassung_component_1.FassungComponent },
                { path: 'drucke/:konvolut/:fassung', component: fassung_component_1.FassungComponent },
                { path: 'manuskripte/:konvolut/:fassung', component: fassung_component_1.FassungComponent },
                { path: 'notizbuecher/notizbuch-divers/:konvolut/:fassung', component: fassung_component_1.FassungComponent },
                { path: 'notizbuecher/:konvolut/:fassung', component: fassung_component_1.FassungComponent },
                { path: 'typoskripte/typoskripte-sammlungen/:konvolut/:fassung', component: fassung_component_1.FassungComponent },
                { path: 'typoskripte/:konvolut/:fassung', component: fassung_component_1.FassungComponent },
                { path: 'material/:konvolut/:fassung', component: fassung_component_1.FassungComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], FassungRoutingModule);
exports.FassungRoutingModule = FassungRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mYXNzdW5nL2Zhc3N1bmctcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLHlEQUF1RDtBQWlCdkQsSUFBYSxvQkFBb0I7SUFBakM7SUFDQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLG9CQUFvQjtJQWZoQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsRUFBRSxJQUFJLEVBQUUsK0NBQStDLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO2dCQUN0RixFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7Z0JBQ2xFLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtnQkFDdkUsRUFBRSxJQUFJLEVBQUUsa0RBQWtELEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO2dCQUN6RixFQUFFLElBQUksRUFBRSxpQ0FBaUMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7Z0JBQ3hFLEVBQUUsSUFBSSxFQUFFLHVEQUF1RCxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtnQkFDOUYsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO2dCQUN2RSxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7YUFDckUsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtLQUMxQixDQUFDO0dBQ1csb0JBQW9CLENBQ2hDO0FBRFksb0RBQW9CIiwiZmlsZSI6ImFwcC9mYXNzdW5nL2Zhc3N1bmctcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgUmV0byBCYXVtZ2FydG5lciAocmZiYXVtZ2FydG5lcikgb24gMDUuMDcuMTcuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGYXNzdW5nQ29tcG9uZW50IH0gZnJvbSAnLi9mYXNzdW5nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgeyBwYXRoOiAnZHJ1Y2tlL2FiZ2V3YW5kdC16dWdld2FuZHQvOmtvbnZvbHV0LzpmYXNzdW5nJywgY29tcG9uZW50OiBGYXNzdW5nQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdkcnVja2UvOmtvbnZvbHV0LzpmYXNzdW5nJywgY29tcG9uZW50OiBGYXNzdW5nQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdtYW51c2tyaXB0ZS86a29udm9sdXQvOmZhc3N1bmcnLCBjb21wb25lbnQ6IEZhc3N1bmdDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ25vdGl6YnVlY2hlci9ub3RpemJ1Y2gtZGl2ZXJzLzprb252b2x1dC86ZmFzc3VuZycsIGNvbXBvbmVudDogRmFzc3VuZ0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnbm90aXpidWVjaGVyLzprb252b2x1dC86ZmFzc3VuZycsIGNvbXBvbmVudDogRmFzc3VuZ0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAndHlwb3NrcmlwdGUvdHlwb3NrcmlwdGUtc2FtbWx1bmdlbi86a29udm9sdXQvOmZhc3N1bmcnLCBjb21wb25lbnQ6IEZhc3N1bmdDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3R5cG9za3JpcHRlLzprb252b2x1dC86ZmFzc3VuZycsIGNvbXBvbmVudDogRmFzc3VuZ0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnbWF0ZXJpYWwvOmtvbnZvbHV0LzpmYXNzdW5nJywgY29tcG9uZW50OiBGYXNzdW5nQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIEZhc3N1bmdSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==
