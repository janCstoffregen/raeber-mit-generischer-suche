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
var router_1 = require("@angular/router");
var registerspalte_component_1 = require("./registerspalte.component");
var common_1 = require("@angular/common");
var RegisterspalteModule = (function () {
    function RegisterspalteModule() {
    }
    return RegisterspalteModule;
}());
RegisterspalteModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MdButtonToggleModule,
            material_1.MdListModule,
            router_1.RouterModule
        ],
        declarations: [registerspalte_component_1.RegisterspalteComponent],
        exports: [registerspalte_component_1.RegisterspalteComponent],
        providers: []
    })
], RegisterspalteModule);
exports.RegisterspalteModule = RegisterspalteModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcmVnaXN0ZXJzcGFsdGUvcmVnaXN0ZXJzcGFsdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsc0NBQXlDO0FBQ3pDLHdDQUE2QztBQUM3QyxzQ0FBMkM7QUFDM0MsOENBQXVFO0FBQ3ZFLDhEQUEwRDtBQUMxRCwwQ0FBK0M7QUFFL0MsdUVBQXFFO0FBQ3JFLDBDQUErQztBQWdCL0MsSUFBYSxvQkFBb0I7SUFBakM7SUFDQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLG9CQUFvQjtJQWRoQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxnQ0FBYTtZQUNiLHFCQUFZO1lBQ1osbUJBQVc7WUFDWCxpQkFBVTtZQUNWLCtCQUFvQjtZQUNwQix1QkFBWTtZQUNaLHFCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUUsQ0FBRSxrREFBdUIsQ0FBRTtRQUN6QyxPQUFPLEVBQUUsQ0FBRSxrREFBdUIsQ0FBRTtRQUNwQyxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyxvQkFBb0IsQ0FDaEM7QUFEWSxvREFBb0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9yZWdpc3RlcnNwYWx0ZS9yZWdpc3RlcnNwYWx0ZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgUmV0byBCYXVtZ2FydG5lciAocmZiYXVtZ2FydG5lcikgb24gMjcuMDYuMTcuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTWRCdXR0b25Ub2dnbGVNb2R1bGUsIE1kTGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJlZ2lzdGVyc3BhbHRlQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3RlcnNwYWx0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgTWRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWRMaXN0TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgUmVnaXN0ZXJzcGFsdGVDb21wb25lbnQgXSxcbiAgZXhwb3J0czogWyBSZWdpc3RlcnNwYWx0ZUNvbXBvbmVudCBdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyc3BhbHRlTW9kdWxlIHtcbn1cbiJdfQ==
