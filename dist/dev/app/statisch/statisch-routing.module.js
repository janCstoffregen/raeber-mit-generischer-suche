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
var homepage_component_1 = require("./homepage.component");
var impressum_component_1 = require("./impressum.component");
var signaturen_component_1 = require("./signaturen.component");
var werkliste_component_1 = require("./werkliste.component");
var lebensdaten_component_1 = require("./lebensdaten.component");
var anleitung_component_1 = require("./anleitung.component");
var werkausgabe_component_1 = require("./werkausgabe.component");
var pdf_notizbuecher_component_1 = require("./pdf-notizbuecher.component");
var pdf_synopsen_component_1 = require("./pdf-synopsen.component");
var StatischRoutingModule = (function () {
    function StatischRoutingModule() {
    }
    return StatischRoutingModule;
}());
StatischRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'werkausgabe', component: werkausgabe_component_1.WerkausgabeComponent },
                { path: 'material/pdf-dateien/notizbuecher', component: pdf_notizbuecher_component_1.PdfNotizbuecherComponent },
                { path: 'anleitung', component: anleitung_component_1.AnleitungComponent },
                { path: 'lebensdaten', component: lebensdaten_component_1.LebensdatenComponent },
                { path: 'werkliste', component: werkliste_component_1.WerklisteComponent },
                { path: 'signaturen', component: signaturen_component_1.SignaturenComponent },
                { path: 'impressum', component: impressum_component_1.ImpressumComponent },
                { path: 'material/pdf-dateien/synopsen', component: pdf_synopsen_component_1.PdfSynopsenComponent },
                { path: 'start', component: homepage_component_1.HomepageComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], StatischRoutingModule);
exports.StatischRoutingModule = StatischRoutingModule;
exports.routingComponents = [
    anleitung_component_1.AnleitungComponent,
    homepage_component_1.HomepageComponent,
    impressum_component_1.ImpressumComponent,
    lebensdaten_component_1.LebensdatenComponent,
    pdf_notizbuecher_component_1.PdfNotizbuecherComponent,
    pdf_synopsen_component_1.PdfSynopsenComponent,
    signaturen_component_1.SignaturenComponent,
    werkausgabe_component_1.WerkausgabeComponent,
    werkliste_component_1.WerklisteComponent
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdGF0aXNjaC9zdGF0aXNjaC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFFL0MsMkRBQXlEO0FBQ3pELDZEQUEyRDtBQUMzRCwrREFBNkQ7QUFDN0QsNkRBQTJEO0FBQzNELGlFQUErRDtBQUMvRCw2REFBMkQ7QUFDM0QsaUVBQStEO0FBQy9ELDJFQUF3RTtBQUN4RSxtRUFBZ0U7QUFrQmhFLElBQWEscUJBQXFCO0lBQWxDO0lBQ0EsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxxQkFBcUI7SUFoQmpDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO2dCQUN4RCxFQUFFLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUU7Z0JBQ2xGLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7Z0JBQ3BELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7Z0JBQ3hELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7Z0JBQ3BELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7Z0JBQ3RELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7Z0JBQ3BELEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtnQkFDMUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTthQUNoRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO0tBQzFCLENBQUM7R0FDVyxxQkFBcUIsQ0FDakM7QUFEWSxzREFBcUI7QUFHckIsUUFBQSxpQkFBaUIsR0FBRztJQUMvQix3Q0FBa0I7SUFDbEIsc0NBQWlCO0lBQ2pCLHdDQUFrQjtJQUNsQiw0Q0FBb0I7SUFDcEIscURBQXdCO0lBQ3hCLDZDQUFvQjtJQUNwQiwwQ0FBbUI7SUFDbkIsNENBQW9CO0lBQ3BCLHdDQUFrQjtDQUNuQixDQUFDIiwiZmlsZSI6ImFwcC9zdGF0aXNjaC9zdGF0aXNjaC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lcGFnZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEltcHJlc3N1bUNvbXBvbmVudCB9IGZyb20gJy4vaW1wcmVzc3VtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWduYXR1cmVuQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduYXR1cmVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZXJrbGlzdGVDb21wb25lbnQgfSBmcm9tICcuL3dlcmtsaXN0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGViZW5zZGF0ZW5Db21wb25lbnQgfSBmcm9tICcuL2xlYmVuc2RhdGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmxlaXR1bmdDb21wb25lbnQgfSBmcm9tICcuL2FubGVpdHVuZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2Vya2F1c2dhYmVDb21wb25lbnQgfSBmcm9tICcuL3dlcmthdXNnYWJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZOb3RpemJ1ZWNoZXJDb21wb25lbnQgfSBmcm9tICcuL3BkZi1ub3RpemJ1ZWNoZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlN5bm9wc2VuQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtc3lub3BzZW4uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICd3ZXJrYXVzZ2FiZScsIGNvbXBvbmVudDogV2Vya2F1c2dhYmVDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ21hdGVyaWFsL3BkZi1kYXRlaWVuL25vdGl6YnVlY2hlcicsIGNvbXBvbmVudDogUGRmTm90aXpidWVjaGVyQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdhbmxlaXR1bmcnLCBjb21wb25lbnQ6IEFubGVpdHVuZ0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnbGViZW5zZGF0ZW4nLCBjb21wb25lbnQ6IExlYmVuc2RhdGVuQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd3ZXJrbGlzdGUnLCBjb21wb25lbnQ6IFdlcmtsaXN0ZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc2lnbmF0dXJlbicsIGNvbXBvbmVudDogU2lnbmF0dXJlbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnaW1wcmVzc3VtJywgY29tcG9uZW50OiBJbXByZXNzdW1Db21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ21hdGVyaWFsL3BkZi1kYXRlaWVuL3N5bm9wc2VuJywgY29tcG9uZW50OiBQZGZTeW5vcHNlbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc3RhcnQnLCBjb21wb25lbnQ6IEhvbWVwYWdlQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRpc2NoUm91dGluZ01vZHVsZSB7XG59XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nQ29tcG9uZW50cyA9IFtcbiAgQW5sZWl0dW5nQ29tcG9uZW50LFxuICBIb21lcGFnZUNvbXBvbmVudCxcbiAgSW1wcmVzc3VtQ29tcG9uZW50LFxuICBMZWJlbnNkYXRlbkNvbXBvbmVudCxcbiAgUGRmTm90aXpidWVjaGVyQ29tcG9uZW50LFxuICBQZGZTeW5vcHNlbkNvbXBvbmVudCxcbiAgU2lnbmF0dXJlbkNvbXBvbmVudCxcbiAgV2Vya2F1c2dhYmVDb21wb25lbnQsXG4gIFdlcmtsaXN0ZUNvbXBvbmVudFxuXTtcbiJdfQ==
