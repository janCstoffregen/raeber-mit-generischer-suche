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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var suche_routing_module_1 = require("./suche-routing.module");
var suche_component_1 = require("./suche.component");
var textgrid_module_1 = require("./textgrid/textgrid.module");
var searchForOneResource_module_1 = require("./searchForOneResourceComponent/searchForOneResource.module");
var SucheModule = (function () {
    function SucheModule() {
    }
    return SucheModule;
}());
SucheModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'suche', component: suche_component_1.SucheComponent }
            ]),
            suche_routing_module_1.SucheRoutingModule,
            material_1.MdButtonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCardModule,
            material_1.MdGridListModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdMenuModule,
            material_1.MdCheckboxModule,
            animations_1.BrowserAnimationsModule,
            material_1.MdSelectModule,
            textgrid_module_1.TextgridModule,
            searchForOneResource_module_1.SearchForOneResourceModule
        ],
        declarations: [
            suche_component_1.SucheComponent
        ],
        exports: [suche_component_1.SucheComponent],
        providers: []
    })
], SucheModule);
exports.SucheModule = SucheModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS9zdWNoZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDBDQUErQztBQUMvQyx3Q0FBNkM7QUFDN0Msc0NBQTJDO0FBQzNDLG1FQUE4RTtBQUM5RSw4Q0FVMkI7QUFDM0IsOERBQTBEO0FBRTFELCtEQUE0RDtBQUM1RCxxREFBbUQ7QUFDbkQsOERBQTREO0FBQzVELDJHQUF5RztBQStCekcsSUFBYSxXQUFXO0lBQXhCO0lBQ0EsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxXQUFXO0lBN0J2QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxnQ0FBYTtZQUNiLG1CQUFXO1lBQ1gsaUJBQVU7WUFDVixxQkFBWTtZQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7YUFDN0MsQ0FBQztZQUNGLHlDQUFrQjtZQUNsQix5QkFBYztZQUNkLCtCQUFvQjtZQUNwQix1QkFBWTtZQUNaLDJCQUFnQjtZQUNoQix1QkFBWTtZQUNaLHdCQUFhO1lBQ2IsdUJBQVk7WUFDWiwyQkFBZ0I7WUFDaEIsb0NBQXVCO1lBQ3ZCLHlCQUFjO1lBQ2QsZ0NBQWM7WUFDZCx3REFBMEI7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDWixnQ0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUUsZ0NBQWMsQ0FBRTtRQUMzQixTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxXQUFXLENBQ3ZCO0FBRFksa0NBQVciLCJmaWxlIjoiYXBwL3N1Y2hlL3N1Y2hlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBTZWJhc3RpYW4gU2Now7xwYmFjaCAoc2ViYXN0aWFuLnNjaHVlcGJhY2hAdW5pYmFzLmNoKSBvbiA3LzIxLzE3LlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBNZEJ1dHRvbk1vZHVsZSxcbiAgTWRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1kQ2FyZE1vZHVsZSxcbiAgTWRHcmlkTGlzdE1vZHVsZSxcbiAgTWRJY29uTW9kdWxlLFxuICBNZElucHV0TW9kdWxlLFxuICBNZE1lbnVNb2R1bGUsXG4gIE1kQ2hlY2tib3hNb2R1bGUsXG4gIE1kU2VsZWN0TW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgU3VjaGVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zdWNoZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTdWNoZUNvbXBvbmVudCB9IGZyb20gJy4vc3VjaGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRncmlkTW9kdWxlIH0gZnJvbSAnLi90ZXh0Z3JpZC90ZXh0Z3JpZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoRm9yT25lUmVzb3VyY2VNb2R1bGUgfSBmcm9tICcuL3NlYXJjaEZvck9uZVJlc291cmNlQ29tcG9uZW50L3NlYXJjaEZvck9uZVJlc291cmNlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICdzdWNoZScsIGNvbXBvbmVudDogU3VjaGVDb21wb25lbnQgfVxuICAgIF0pLFxuICAgIFN1Y2hlUm91dGluZ01vZHVsZSxcbiAgICBNZEJ1dHRvbk1vZHVsZSxcbiAgICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNZENhcmRNb2R1bGUsXG4gICAgTWRHcmlkTGlzdE1vZHVsZSxcbiAgICBNZEljb25Nb2R1bGUsXG4gICAgTWRJbnB1dE1vZHVsZSxcbiAgICBNZE1lbnVNb2R1bGUsXG4gICAgTWRDaGVja2JveE1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNZFNlbGVjdE1vZHVsZSxcbiAgICBUZXh0Z3JpZE1vZHVsZSxcbiAgICBTZWFyY2hGb3JPbmVSZXNvdXJjZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdWNoZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbIFN1Y2hlQ29tcG9uZW50IF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VjaGVNb2R1bGUge1xufVxuIl19
