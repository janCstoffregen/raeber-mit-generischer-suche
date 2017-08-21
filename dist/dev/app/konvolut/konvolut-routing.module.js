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
var konvolut_component_1 = require("./konvolut.component");
var super_konvolut_component_1 = require("./super-konvolut.component");
var KonvolutRoutingModule = (function () {
    function KonvolutRoutingModule() {
    }
    return KonvolutRoutingModule;
}());
KonvolutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'drucke/abgewandt-zugewandt', component: super_konvolut_component_1.SuperKonvolutComponent },
                { path: 'drucke/abgewandt-zugewandt/:konvolut', component: konvolut_component_1.KonvolutComponent },
                { path: 'drucke/:konvolut', component: konvolut_component_1.KonvolutComponent },
                { path: 'manuskripte/:konvolut', component: konvolut_component_1.KonvolutComponent },
                { path: 'notizbuecher/notizbuch-divers/:konvolut', component: konvolut_component_1.KonvolutComponent },
                { path: 'notizbuecher/:konvolut', component: konvolut_component_1.KonvolutComponent },
                { path: 'typoskripte/typoskripte-sammlungen/:konvolut', component: konvolut_component_1.KonvolutComponent },
                { path: 'typoskripte/:konvolut', component: konvolut_component_1.KonvolutComponent },
                { path: 'material/:konvolut', component: konvolut_component_1.KonvolutComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], KonvolutRoutingModule);
exports.KonvolutRoutingModule = KonvolutRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9rb252b2x1dC9rb252b2x1dC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsMkRBQXlEO0FBQ3pELHVFQUFvRTtBQWtCcEUsSUFBYSxxQkFBcUI7SUFBbEM7SUFDQSxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHFCQUFxQjtJQWhCakMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTtnQkFDekUsRUFBRSxJQUFJLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO2dCQUM5RSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7Z0JBQzFELEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtnQkFDL0QsRUFBRSxJQUFJLEVBQUUseUNBQXlDLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO2dCQUNqRixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7Z0JBQ2hFLEVBQUUsSUFBSSxFQUFFLDhDQUE4QyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtnQkFDdEYsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO2dCQUMvRCxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7YUFDN0QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtLQUMxQixDQUFDO0dBQ1cscUJBQXFCLENBQ2pDO0FBRFksc0RBQXFCIiwiZmlsZSI6ImFwcC9rb252b2x1dC9rb252b2x1dC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBTZWJhc3RpYW4gU2Now7xwYmFjaCAoc2ViYXN0aWFuLnNjaHVlcGJhY2hAdW5pYmFzLmNoKSBvbiA2LzcvMTcuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBLb252b2x1dENvbXBvbmVudCB9IGZyb20gJy4va29udm9sdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFN1cGVyS29udm9sdXRDb21wb25lbnQgfSBmcm9tICcuL3N1cGVyLWtvbnZvbHV0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgeyBwYXRoOiAnZHJ1Y2tlL2FiZ2V3YW5kdC16dWdld2FuZHQnLCBjb21wb25lbnQ6IFN1cGVyS29udm9sdXRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2RydWNrZS9hYmdld2FuZHQtenVnZXdhbmR0Lzprb252b2x1dCcsIGNvbXBvbmVudDogS29udm9sdXRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2RydWNrZS86a29udm9sdXQnLCBjb21wb25lbnQ6IEtvbnZvbHV0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdtYW51c2tyaXB0ZS86a29udm9sdXQnLCBjb21wb25lbnQ6IEtvbnZvbHV0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdub3RpemJ1ZWNoZXIvbm90aXpidWNoLWRpdmVycy86a29udm9sdXQnLCBjb21wb25lbnQ6IEtvbnZvbHV0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdub3RpemJ1ZWNoZXIvOmtvbnZvbHV0JywgY29tcG9uZW50OiBLb252b2x1dENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAndHlwb3NrcmlwdGUvdHlwb3NrcmlwdGUtc2FtbWx1bmdlbi86a29udm9sdXQnLCBjb21wb25lbnQ6IEtvbnZvbHV0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0eXBvc2tyaXB0ZS86a29udm9sdXQnLCBjb21wb25lbnQ6IEtvbnZvbHV0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdtYXRlcmlhbC86a29udm9sdXQnLCBjb21wb25lbnQ6IEtvbnZvbHV0Q29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZvbHV0Um91dGluZ01vZHVsZSB7XG59XG4iXX0=
