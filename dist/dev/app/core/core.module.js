"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fusszeile_component_1 = require("./fusszeile.component");
var kopfzeile_component_1 = require("./kopfzeile.component");
var navigationsleiste_component_1 = require("./navigationsleiste.component");
var common_1 = require("@angular/common");
var haupttext_component_1 = require("./haupttext.component");
var router_1 = require("@angular/router");
var _404_component_1 = require("./404.component");
var konvolut_module_1 = require("../konvolut/konvolut.module");
var fassung_module_1 = require("../fassung/fassung.module");
var register_module_1 = require("../register/register.module");
var statisch_module_1 = require("../statisch/statisch.module");
var suche_module_1 = require("../suche/suche.module");
var synopse_module_1 = require("../synopse/synopse.module");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            statisch_module_1.StatischModule,
            konvolut_module_1.KonvolutModule,
            fassung_module_1.FassungModule,
            register_module_1.RegisterModule,
            suche_module_1.SucheModule,
            synopse_module_1.SynopseModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: '/start', pathMatch: 'full' },
                { path: '**', component: _404_component_1.PageNotFoundComponent }
            ])
        ],
        declarations: [
            fusszeile_component_1.FusszeileComponent,
            kopfzeile_component_1.KopfzeileComponent,
            haupttext_component_1.HaupttextComponent,
            navigationsleiste_component_1.NavigationsleisteComponent,
            _404_component_1.PageNotFoundComponent
        ],
        exports: [
            kopfzeile_component_1.KopfzeileComponent,
            haupttext_component_1.HaupttextComponent,
            fusszeile_component_1.FusszeileComponent
        ]
    })
], CoreModule);
exports.CoreModule = CoreModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsc0NBQXlDO0FBRXpDLDZEQUEyRDtBQUMzRCw2REFBMkQ7QUFDM0QsNkVBQTJFO0FBQzNFLDBDQUErQztBQUMvQyw2REFBMkQ7QUFDM0QsMENBQStDO0FBQy9DLGtEQUF3RDtBQUN4RCwrREFBNkQ7QUFDN0QsNERBQTBEO0FBQzFELCtEQUE2RDtBQUM3RCwrREFBNkQ7QUFDN0Qsc0RBQW9EO0FBQ3BELDREQUEwRDtBQThCMUQsSUFBYSxVQUFVO0lBQXZCO0lBQ0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxVQUFVO0lBNUJ0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUVaLGdDQUFjO1lBQ2QsZ0NBQWM7WUFDZCw4QkFBYTtZQUNiLGdDQUFjO1lBQ2QsMEJBQVc7WUFDWCw4QkFBYTtZQUNiLHFCQUFZLENBQUMsT0FBTyxDQUFDO2dCQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO2dCQUNyRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHNDQUFxQixFQUFFO2FBQ2pELENBQUM7U0FDSDtRQUNELFlBQVksRUFBRTtZQUNaLHdDQUFrQjtZQUNsQix3Q0FBa0I7WUFDbEIsd0NBQWtCO1lBQ2xCLHdEQUEwQjtZQUMxQixzQ0FBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsd0NBQWtCO1lBQ2xCLHdDQUFrQjtTQUNuQjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQ3RCO0FBRFksZ0NBQVUiLCJmaWxlIjoiYXBwL2NvcmUvY29yZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgU2ViYXN0aWFuIFNjaMO8cGJhY2ggKHNlYmFzdGlhbi5zY2h1ZXBiYWNoQHVuaWJhcy5jaCkgb24gNy8yMC8xNy5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGdXNzemVpbGVDb21wb25lbnQgfSBmcm9tICcuL2Z1c3N6ZWlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgS29wZnplaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9rb3BmemVpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25zbGVpc3RlQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uc2xlaXN0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhhdXB0dGV4dENvbXBvbmVudCB9IGZyb20gJy4vaGF1cHR0ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi80MDQuY29tcG9uZW50JztcbmltcG9ydCB7IEtvbnZvbHV0TW9kdWxlIH0gZnJvbSAnLi4va29udm9sdXQva29udm9sdXQubW9kdWxlJztcbmltcG9ydCB7IEZhc3N1bmdNb2R1bGUgfSBmcm9tICcuLi9mYXNzdW5nL2Zhc3N1bmcubW9kdWxlJztcbmltcG9ydCB7IFJlZ2lzdGVyTW9kdWxlIH0gZnJvbSAnLi4vcmVnaXN0ZXIvcmVnaXN0ZXIubW9kdWxlJztcbmltcG9ydCB7IFN0YXRpc2NoTW9kdWxlIH0gZnJvbSAnLi4vc3RhdGlzY2gvc3RhdGlzY2gubW9kdWxlJztcbmltcG9ydCB7IFN1Y2hlTW9kdWxlIH0gZnJvbSAnLi4vc3VjaGUvc3VjaGUubW9kdWxlJztcbmltcG9ydCB7IFN5bm9wc2VNb2R1bGUgfSBmcm9tICcuLi9zeW5vcHNlL3N5bm9wc2UubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICAvLyBPcmRlciBvZiBpbXBvcnRzIGlzIGltcG9ydGFudCFcbiAgICBTdGF0aXNjaE1vZHVsZSxcbiAgICBLb252b2x1dE1vZHVsZSxcbiAgICBGYXNzdW5nTW9kdWxlLFxuICAgIFJlZ2lzdGVyTW9kdWxlLFxuICAgIFN1Y2hlTW9kdWxlLFxuICAgIFN5bm9wc2VNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9zdGFydCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGdXNzemVpbGVDb21wb25lbnQsXG4gICAgS29wZnplaWxlQ29tcG9uZW50LFxuICAgIEhhdXB0dGV4dENvbXBvbmVudCxcbiAgICBOYXZpZ2F0aW9uc2xlaXN0ZUNvbXBvbmVudCxcbiAgICBQYWdlTm90Rm91bmRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEtvcGZ6ZWlsZUNvbXBvbmVudCxcbiAgICBIYXVwdHRleHRDb21wb25lbnQsXG4gICAgRnVzc3plaWxlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG59XG4iXX0=
