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
var homepage_component_1 = require("../statisch/homepage.component");
var impressum_component_1 = require("../statisch/impressum.component");
var signaturen_component_1 = require("../statisch/signaturen.component");
var werkliste_component_1 = require("../statisch/werkliste.component");
var lebensdaten_component_1 = require("../statisch/lebensdaten.component");
var anleitung_component_1 = require("../statisch/anleitung.component");
var werkausgabe_component_1 = require("../statisch/werkausgabe.component");
var suche_module_1 = require("../suche/suche.module");
var pdf_notizbuecher_component_1 = require("../statisch/pdf-notizbuecher.component");
var pdf_synopsen_component_1 = require("../statisch/pdf-synopsen.component");
var _404_component_1 = require("./404.component");
var CoreRoutingModule = (function () {
    function CoreRoutingModule() {
    }
    return CoreRoutingModule;
}());
CoreRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            suche_module_1.SucheModule,
            router_1.RouterModule.forRoot([
                { path: 'werkausgabe', component: werkausgabe_component_1.WerkausgabeComponent },
                { path: 'material/pdf-dateien/notizbuecher', component: pdf_notizbuecher_component_1.PdfNotizbuecherComponent },
                { path: 'anleitung', component: anleitung_component_1.AnleitungComponent },
                { path: 'lebensdaten', component: lebensdaten_component_1.LebensdatenComponent },
                { path: 'werkliste', component: werkliste_component_1.WerklisteComponent },
                { path: 'signaturen', component: signaturen_component_1.SignaturenComponent },
                { path: 'impressum', component: impressum_component_1.ImpressumComponent },
                { path: 'material/pdf-dateien/synopsen', component: pdf_synopsen_component_1.PdfSynopsenComponent },
                { path: 'start', component: homepage_component_1.HomepageComponent },
                { path: '', redirectTo: '/start', pathMatch: 'full' },
                { path: '**', component: _404_component_1.PageNotFoundComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], CoreRoutingModule);
exports.CoreRoutingModule = CoreRoutingModule;
exports.routingComponents = [
    anleitung_component_1.AnleitungComponent,
    homepage_component_1.HomepageComponent,
    impressum_component_1.ImpressumComponent,
    lebensdaten_component_1.LebensdatenComponent,
    _404_component_1.PageNotFoundComponent,
    pdf_notizbuecher_component_1.PdfNotizbuecherComponent,
    pdf_synopsen_component_1.PdfSynopsenComponent,
    signaturen_component_1.SignaturenComponent,
    werkausgabe_component_1.WerkausgabeComponent,
    werkliste_component_1.WerklisteComponent
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvcmUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBRS9DLHFFQUFtRTtBQUNuRSx1RUFBcUU7QUFDckUseUVBQXVFO0FBQ3ZFLHVFQUFxRTtBQUNyRSwyRUFBeUU7QUFDekUsdUVBQXFFO0FBQ3JFLDJFQUF5RTtBQUN6RSxzREFBb0Q7QUFDcEQscUZBQWtGO0FBQ2xGLDZFQUEwRTtBQUMxRSxrREFBd0Q7QUFxQnhELElBQWEsaUJBQWlCO0lBQTlCO0lBQ0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxpQkFBaUI7SUFuQjdCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDBCQUFXO1lBQ1gscUJBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7Z0JBQ3hELEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRTtnQkFDbEYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtnQkFDcEQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBRTtnQkFDeEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtnQkFDcEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtnQkFDdEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtnQkFDcEQsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO2dCQUMxRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO2dCQUMvQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO2dCQUNyRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHNDQUFxQixFQUFFO2FBQ2pELENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFFLHFCQUFZLENBQUU7S0FDMUIsQ0FBQztHQUNXLGlCQUFpQixDQUM3QjtBQURZLDhDQUFpQjtBQUdqQixRQUFBLGlCQUFpQixHQUFHO0lBQy9CLHdDQUFrQjtJQUNsQixzQ0FBaUI7SUFDakIsd0NBQWtCO0lBQ2xCLDRDQUFvQjtJQUNwQixzQ0FBcUI7SUFDckIscURBQXdCO0lBQ3hCLDZDQUFvQjtJQUNwQiwwQ0FBbUI7SUFDbkIsNENBQW9CO0lBQ3BCLHdDQUFrQjtDQUNuQixDQUFDIiwiZmlsZSI6ImFwcC9jb3JlL2NvcmUtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZXBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9zdGF0aXNjaC9ob21lcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1wcmVzc3VtQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RhdGlzY2gvaW1wcmVzc3VtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWduYXR1cmVuQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RhdGlzY2gvc2lnbmF0dXJlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2Vya2xpc3RlQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RhdGlzY2gvd2Vya2xpc3RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWJlbnNkYXRlbkNvbXBvbmVudCB9IGZyb20gJy4uL3N0YXRpc2NoL2xlYmVuc2RhdGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmxlaXR1bmdDb21wb25lbnQgfSBmcm9tICcuLi9zdGF0aXNjaC9hbmxlaXR1bmcuY29tcG9uZW50JztcbmltcG9ydCB7IFdlcmthdXNnYWJlQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RhdGlzY2gvd2Vya2F1c2dhYmUuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Y2hlTW9kdWxlIH0gZnJvbSAnLi4vc3VjaGUvc3VjaGUubW9kdWxlJztcbmltcG9ydCB7IFBkZk5vdGl6YnVlY2hlckNvbXBvbmVudCB9IGZyb20gJy4uL3N0YXRpc2NoL3BkZi1ub3RpemJ1ZWNoZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlN5bm9wc2VuQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RhdGlzY2gvcGRmLXN5bm9wc2VuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuLzQwNC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3VjaGVNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwYXRoOiAnd2Vya2F1c2dhYmUnLCBjb21wb25lbnQ6IFdlcmthdXNnYWJlQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdtYXRlcmlhbC9wZGYtZGF0ZWllbi9ub3RpemJ1ZWNoZXInLCBjb21wb25lbnQ6IFBkZk5vdGl6YnVlY2hlckNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnYW5sZWl0dW5nJywgY29tcG9uZW50OiBBbmxlaXR1bmdDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2xlYmVuc2RhdGVuJywgY29tcG9uZW50OiBMZWJlbnNkYXRlbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnd2Vya2xpc3RlJywgY29tcG9uZW50OiBXZXJrbGlzdGVDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3NpZ25hdHVyZW4nLCBjb21wb25lbnQ6IFNpZ25hdHVyZW5Db21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2ltcHJlc3N1bScsIGNvbXBvbmVudDogSW1wcmVzc3VtQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdtYXRlcmlhbC9wZGYtZGF0ZWllbi9zeW5vcHNlbicsIGNvbXBvbmVudDogUGRmU3lub3BzZW5Db21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3N0YXJ0JywgY29tcG9uZW50OiBIb21lcGFnZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9zdGFydCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVSb3V0aW5nTW9kdWxlIHtcbn1cblxuZXhwb3J0IGNvbnN0IHJvdXRpbmdDb21wb25lbnRzID0gW1xuICBBbmxlaXR1bmdDb21wb25lbnQsXG4gIEhvbWVwYWdlQ29tcG9uZW50LFxuICBJbXByZXNzdW1Db21wb25lbnQsXG4gIExlYmVuc2RhdGVuQ29tcG9uZW50LFxuICBQYWdlTm90Rm91bmRDb21wb25lbnQsXG4gIFBkZk5vdGl6YnVlY2hlckNvbXBvbmVudCxcbiAgUGRmU3lub3BzZW5Db21wb25lbnQsXG4gIFNpZ25hdHVyZW5Db21wb25lbnQsXG4gIFdlcmthdXNnYWJlQ29tcG9uZW50LFxuICBXZXJrbGlzdGVDb21wb25lbnRcbl07XG5cbiJdfQ==
