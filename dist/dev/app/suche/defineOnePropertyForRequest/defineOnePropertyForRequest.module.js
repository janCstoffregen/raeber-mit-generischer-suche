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
var defineOnePropertyForRequest_component_1 = require("./defineOnePropertyForRequest.component");
var DefineOnePropertyForRequestModule = (function () {
    function DefineOnePropertyForRequestModule() {
    }
    return DefineOnePropertyForRequestModule;
}());
DefineOnePropertyForRequestModule = __decorate([
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
            platform_browser_1.BrowserModule
        ],
        declarations: [
            defineOnePropertyForRequest_component_1.DefineOnePropertyForRequestComponent
        ],
        exports: [
            defineOnePropertyForRequest_component_1.DefineOnePropertyForRequestComponent
        ]
    })
], DefineOnePropertyForRequestModule);
exports.DefineOnePropertyForRequestModule = DefineOnePropertyForRequestModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS9kZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3QvZGVmaW5lT25lUHJvcGVydHlGb3JSZXF1ZXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3QyxtRUFBK0U7QUFDL0UsOERBQTBEO0FBQzFELDhDQVUyQjtBQUUzQixpR0FBK0Y7QUE0Qi9GLElBQWEsaUNBQWlDO0lBQTlDO0lBQ0EsQ0FBQztJQUFELHdDQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxpQ0FBaUM7SUExQjdDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZO1lBQ1osK0JBQW9CO1lBQ3BCLHVCQUFZO1lBQ1oscUJBQVk7WUFDWix5QkFBYztZQUNkLCtCQUFvQjtZQUNwQix1QkFBWTtZQUNaLDJCQUFnQjtZQUNoQix1QkFBWTtZQUNaLHdCQUFhO1lBQ2IsdUJBQVk7WUFDWiwyQkFBZ0I7WUFDaEIseUJBQWM7WUFDZCxtQkFBVztZQUNYLG9DQUF1QjtZQUN2QixnQ0FBYTtTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEVBQW9DO1NBQ3JDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsNEVBQW9DO1NBQ3JDO0tBQ0YsQ0FBQztHQUNXLGlDQUFpQyxDQUM3QztBQURZLDhFQUFpQyIsImZpbGUiOiJhcHAvc3VjaGUvZGVmaW5lT25lUHJvcGVydHlGb3JSZXF1ZXN0L2RlZmluZU9uZVByb3BlcnR5Rm9yUmVxdWVzdC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7XG4gIE1kQnV0dG9uTW9kdWxlLFxuICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWRDYXJkTW9kdWxlLFxuICBNZEdyaWRMaXN0TW9kdWxlLFxuICBNZEljb25Nb2R1bGUsXG4gIE1kSW5wdXRNb2R1bGUsXG4gIE1kTWVudU1vZHVsZSxcbiAgTWRDaGVja2JveE1vZHVsZSxcbiAgTWRTZWxlY3RNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBEZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3RDb21wb25lbnQgfSBmcm9tICcuL2RlZmluZU9uZVByb3BlcnR5Rm9yUmVxdWVzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1kQnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1kQ2FyZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWRCdXR0b25Nb2R1bGUsXG4gICAgTWRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWRDYXJkTW9kdWxlLFxuICAgIE1kR3JpZExpc3RNb2R1bGUsXG4gICAgTWRJY29uTW9kdWxlLFxuICAgIE1kSW5wdXRNb2R1bGUsXG4gICAgTWRNZW51TW9kdWxlLFxuICAgIE1kQ2hlY2tib3hNb2R1bGUsXG4gICAgTWRTZWxlY3RNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3RDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERlZmluZU9uZVByb3BlcnR5Rm9yUmVxdWVzdENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERlZmluZU9uZVByb3BlcnR5Rm9yUmVxdWVzdE1vZHVsZSB7XG59XG5cbiJdfQ==
