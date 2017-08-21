"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var konvolut_component_1 = require("./konvolut.component");
var konvolut_routing_module_1 = require("./konvolut-routing.module");
var konvolut_steckbrief_component_1 = require("./konvolut-steckbrief/konvolut-steckbrief.component");
var registerspalte_module_1 = require("../shared/registerspalte/registerspalte.module");
var super_konvolut_component_1 = require("./super-konvolut.component");
var textgrid_module_1 = require("../shared/textgrid/textgrid.module");
var konvolut_werkzeugleiste_component_1 = require("./konvolut-werkzeugleiste/konvolut-werkzeugleiste.component");
var KonvolutModule = (function () {
    function KonvolutModule() {
    }
    return KonvolutModule;
}());
KonvolutModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MdButtonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCardModule,
            material_1.MdGridListModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdToolbarModule,
            registerspalte_module_1.RegisterspalteModule,
            textgrid_module_1.TextgridModule,
            konvolut_routing_module_1.KonvolutRoutingModule
        ],
        declarations: [
            konvolut_component_1.KonvolutComponent,
            konvolut_steckbrief_component_1.KonvolutSteckbriefComponent,
            konvolut_werkzeugleiste_component_1.KonvolutWerkzeugleisteComponent,
            super_konvolut_component_1.SuperKonvolutComponent
        ],
        exports: [konvolut_component_1.KonvolutComponent]
    })
], KonvolutModule);
exports.KonvolutModule = KonvolutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9rb252b2x1dC9rb252b2x1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxzQ0FBeUM7QUFDekMsd0NBQTZDO0FBQzdDLHNDQUEyQztBQUMzQyw4Q0FPMkI7QUFDM0IsOERBQTBEO0FBRTFELDJEQUF5RDtBQUN6RCxxRUFBa0U7QUFDbEUscUdBQWtHO0FBQ2xHLHdGQUFzRjtBQUN0Rix1RUFBb0U7QUFDcEUsc0VBQW9FO0FBQ3BFLGlIQUE4RztBQTBCOUcsSUFBYSxjQUFjO0lBQTNCO0lBQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxjQUFjO0lBeEIxQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxnQ0FBYTtZQUNiLG1CQUFXO1lBQ1gsaUJBQVU7WUFDVix5QkFBYztZQUNkLCtCQUFvQjtZQUNwQix1QkFBWTtZQUNaLDJCQUFnQjtZQUNoQix1QkFBWTtZQUNaLHdCQUFhO1lBQ2IsMEJBQWU7WUFDZiw0Q0FBb0I7WUFDcEIsZ0NBQWM7WUFDZCwrQ0FBcUI7U0FDdEI7UUFDRCxZQUFZLEVBQUU7WUFDWixzQ0FBaUI7WUFDakIsMkRBQTJCO1lBQzNCLG1FQUErQjtZQUMvQixpREFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUUsQ0FBRSxzQ0FBaUIsQ0FBRTtLQUMvQixDQUFDO0dBQ1csY0FBYyxDQUMxQjtBQURZLHdDQUFjIiwiZmlsZSI6ImFwcC9rb252b2x1dC9rb252b2x1dC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgU2ViYXN0aWFuIFNjaMO8cGJhY2ggKHNlYmFzdGlhbi5zY2h1ZXBiYWNoQHVuaWJhcy5jaCkgb24gNi83LzE3LlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7XG4gIE1kQnV0dG9uTW9kdWxlLFxuICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWRDYXJkTW9kdWxlLFxuICBNZEdyaWRMaXN0TW9kdWxlLFxuICBNZEljb25Nb2R1bGUsXG4gIE1kSW5wdXRNb2R1bGUsIE1kVG9vbGJhck1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEtvbnZvbHV0Q29tcG9uZW50IH0gZnJvbSAnLi9rb252b2x1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgS29udm9sdXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9rb252b2x1dC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBLb252b2x1dFN0ZWNrYnJpZWZDb21wb25lbnQgfSBmcm9tICcuL2tvbnZvbHV0LXN0ZWNrYnJpZWYva29udm9sdXQtc3RlY2ticmllZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJzcGFsdGVNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvcmVnaXN0ZXJzcGFsdGUvcmVnaXN0ZXJzcGFsdGUubW9kdWxlJztcbmltcG9ydCB7IFN1cGVyS29udm9sdXRDb21wb25lbnQgfSBmcm9tICcuL3N1cGVyLWtvbnZvbHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Z3JpZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC90ZXh0Z3JpZC90ZXh0Z3JpZC5tb2R1bGUnO1xuaW1wb3J0IHsgS29udm9sdXRXZXJremV1Z2xlaXN0ZUNvbXBvbmVudCB9IGZyb20gJy4va29udm9sdXQtd2Vya3pldWdsZWlzdGUva29udm9sdXQtd2Vya3pldWdsZWlzdGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBNZEJ1dHRvbk1vZHVsZSxcbiAgICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNZENhcmRNb2R1bGUsXG4gICAgTWRHcmlkTGlzdE1vZHVsZSxcbiAgICBNZEljb25Nb2R1bGUsXG4gICAgTWRJbnB1dE1vZHVsZSxcbiAgICBNZFRvb2xiYXJNb2R1bGUsXG4gICAgUmVnaXN0ZXJzcGFsdGVNb2R1bGUsXG4gICAgVGV4dGdyaWRNb2R1bGUsXG4gICAgS29udm9sdXRSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEtvbnZvbHV0Q29tcG9uZW50LFxuICAgIEtvbnZvbHV0U3RlY2ticmllZkNvbXBvbmVudCxcbiAgICBLb252b2x1dFdlcmt6ZXVnbGVpc3RlQ29tcG9uZW50LFxuICAgIFN1cGVyS29udm9sdXRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogWyBLb252b2x1dENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZvbHV0TW9kdWxlIHtcbn1cbiJdfQ==
