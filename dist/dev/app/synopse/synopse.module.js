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
var synopse_component_1 = require("./synopse.component");
var textgrid_module_1 = require("../shared/textgrid/textgrid.module");
var synopse_werkzeugleiste_component_1 = require("./synopse-werkzeugleiste/synopse-werkzeugleiste.component");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var SynopseModule = (function () {
    function SynopseModule() {
    }
    return SynopseModule;
}());
SynopseModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            material_1.MdButtonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCheckboxModule,
            material_1.MdIconModule,
            material_1.MdToolbarModule,
            router_1.RouterModule.forChild([
                { path: 'synopsen/:synopse', component: synopse_component_1.SynopseComponent }
            ]),
            textgrid_module_1.TextgridModule
        ],
        declarations: [
            synopse_component_1.SynopseComponent,
            synopse_werkzeugleiste_component_1.SynopseWerkzeugleisteComponent
        ],
        exports: [
            synopse_component_1.SynopseComponent
        ]
    })
], SynopseModule);
exports.SynopseModule = SynopseModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zeW5vcHNlL3N5bm9wc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBK0M7QUFFL0MseURBQXVEO0FBQ3ZELHNFQUFvRTtBQUNwRSw4R0FBMkc7QUFDM0csOENBRzJCO0FBQzNCLHdDQUE2QztBQXdCN0MsSUFBYSxhQUFhO0lBQTFCO0lBQ0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxhQUFhO0lBdEJ6QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLG1CQUFXO1lBQ1gseUJBQWM7WUFDZCwrQkFBb0I7WUFDcEIsMkJBQWdCO1lBQ2hCLHVCQUFZO1lBQ1osMEJBQWU7WUFDZixxQkFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO2FBQzNELENBQUM7WUFDRixnQ0FBYztTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1osb0NBQWdCO1lBQ2hCLGlFQUE4QjtTQUMvQjtRQUNELE9BQU8sRUFBRTtZQUNQLG9DQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxhQUFhLENBQ3pCO0FBRFksc0NBQWEiLCJmaWxlIjoiYXBwL3N5bm9wc2Uvc3lub3BzZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgU2ViYXN0aWFuIFNjaMO8cGJhY2ggKHNlYmFzdGlhbi5zY2h1ZXBiYWNoQHVuaWJhcy5jaCkgb24gNy8yMS8xNy5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN5bm9wc2VDb21wb25lbnQgfSBmcm9tICcuL3N5bm9wc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRncmlkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3RleHRncmlkL3RleHRncmlkLm1vZHVsZSc7XG5pbXBvcnQgeyBTeW5vcHNlV2Vya3pldWdsZWlzdGVDb21wb25lbnQgfSBmcm9tICcuL3N5bm9wc2Utd2Vya3pldWdsZWlzdGUvc3lub3BzZS13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTWRCdXR0b25Nb2R1bGUsXG4gIE1kQnV0dG9uVG9nZ2xlTW9kdWxlLCBNZENoZWNrYm94TW9kdWxlLCBNZEljb25Nb2R1bGUsIE1kVG9vbGJhck1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNZEJ1dHRvbk1vZHVsZSxcbiAgICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNZENoZWNrYm94TW9kdWxlLFxuICAgIE1kSWNvbk1vZHVsZSxcbiAgICBNZFRvb2xiYXJNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHsgcGF0aDogJ3N5bm9wc2VuLzpzeW5vcHNlJywgY29tcG9uZW50OiBTeW5vcHNlQ29tcG9uZW50IH1cbiAgICBdKSxcbiAgICBUZXh0Z3JpZE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTeW5vcHNlQ29tcG9uZW50LFxuICAgIFN5bm9wc2VXZXJremV1Z2xlaXN0ZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU3lub3BzZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN5bm9wc2VNb2R1bGUge1xufVxuIl19
