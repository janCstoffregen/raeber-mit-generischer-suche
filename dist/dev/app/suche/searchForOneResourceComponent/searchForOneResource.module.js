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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var searchForOneResource_component_1 = require("./searchForOneResource.component");
var defineOnePropertyForRequest_module_1 = require("../defineOnePropertyForRequest/defineOnePropertyForRequest.module");
var SearchForOneResourceModule = (function () {
    function SearchForOneResourceModule() {
    }
    return SearchForOneResourceModule;
}());
SearchForOneResourceModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCardModule,
            router_1.RouterModule,
            material_1.MdButtonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCardModule,
            material_1.MdGridListModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdMenuModule,
            material_1.MdCheckboxModule,
            material_1.MdSelectModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            platform_browser_1.BrowserModule,
            defineOnePropertyForRequest_module_1.DefineOnePropertyForRequestModule
        ],
        declarations: [
            searchForOneResource_component_1.SearchForOneResourceComponent
        ],
        exports: [
            searchForOneResource_component_1.SearchForOneResourceComponent
        ]
    })
], SearchForOneResourceModule);
exports.SearchForOneResourceModule = SearchForOneResourceModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS9zZWFyY2hGb3JPbmVSZXNvdXJjZUNvbXBvbmVudC9zZWFyY2hGb3JPbmVSZXNvdXJjZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDBDQUErQztBQUMvQyx3Q0FBNkM7QUFDN0MsbUVBQStFO0FBQy9FLDhEQUEwRDtBQUMxRCw4Q0FVMkI7QUFFM0IsbUZBQWlGO0FBQ2pGLHdIQUFzSDtBQThCdEgsSUFBYSwwQkFBMEI7SUFBdkM7SUFDQSxDQUFDO0lBQUQsaUNBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLDBCQUEwQjtJQTNCdEMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWiwrQkFBb0I7WUFDcEIsdUJBQVk7WUFDWixxQkFBWTtZQUNaLHlCQUFjO1lBQ2QsK0JBQW9CO1lBQ3BCLHVCQUFZO1lBQ1osMkJBQWdCO1lBQ2hCLHVCQUFZO1lBQ1osd0JBQWE7WUFDYix1QkFBWTtZQUNaLDJCQUFnQjtZQUNoQix5QkFBYztZQUNkLG1CQUFXO1lBQ1gsb0NBQXVCO1lBQ3ZCLGdDQUFhO1lBQ2Isc0VBQWlDO1NBQ2xDO1FBQ0QsWUFBWSxFQUFFO1lBQ1osOERBQTZCO1NBQzlCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsOERBQTZCO1NBQzlCO0tBQ0YsQ0FBQztHQUNXLDBCQUEwQixDQUN0QztBQURZLGdFQUEwQiIsImZpbGUiOiJhcHAvc3VjaGUvc2VhcmNoRm9yT25lUmVzb3VyY2VDb21wb25lbnQvc2VhcmNoRm9yT25lUmVzb3VyY2UubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICBNZEJ1dHRvbk1vZHVsZSxcbiAgTWRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1kQ2FyZE1vZHVsZSxcbiAgTWRHcmlkTGlzdE1vZHVsZSxcbiAgTWRJY29uTW9kdWxlLFxuICBNZElucHV0TW9kdWxlLFxuICBNZE1lbnVNb2R1bGUsXG4gIE1kQ2hlY2tib3hNb2R1bGUsXG4gIE1kU2VsZWN0TW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgU2VhcmNoRm9yT25lUmVzb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaEZvck9uZVJlc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3RNb2R1bGUgfSBmcm9tICcuLi9kZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3QvZGVmaW5lT25lUHJvcGVydHlGb3JSZXF1ZXN0Lm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNZENhcmRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1kQnV0dG9uTW9kdWxlLFxuICAgIE1kQnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1kQ2FyZE1vZHVsZSxcbiAgICBNZEdyaWRMaXN0TW9kdWxlLFxuICAgIE1kSWNvbk1vZHVsZSxcbiAgICBNZElucHV0TW9kdWxlLFxuICAgIE1kTWVudU1vZHVsZSxcbiAgICBNZENoZWNrYm94TW9kdWxlLFxuICAgIE1kU2VsZWN0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRGVmaW5lT25lUHJvcGVydHlGb3JSZXF1ZXN0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNlYXJjaEZvck9uZVJlc291cmNlQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTZWFyY2hGb3JPbmVSZXNvdXJjZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEZvck9uZVJlc291cmNlTW9kdWxlIHtcbn1cbiJdfQ==
