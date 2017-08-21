"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var image_frame_component_1 = require("./image-frame.component");
var ImageFrameModule = (function () {
    function ImageFrameModule() {
    }
    return ImageFrameModule;
}());
ImageFrameModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            material_1.MdButtonToggleModule,
            material_1.MdListModule,
            router_1.RouterModule,
            material_1.MdCardModule,
            material_1.MdGridListModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdButtonModule,
            material_1.MdSliderModule,
            material_1.MdMenuModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [image_frame_component_1.ImageFrameComponent],
        exports: [image_frame_component_1.ImageFrameComponent],
        providers: []
    })
], ImageFrameModule);
exports.ImageFrameModule = ImageFrameModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaW1hZ2UtZnJhbWUvaW1hZ2UtZnJhbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsc0NBQXlDO0FBQ3pDLHNDQUEyQztBQUMzQyw4REFBMEQ7QUFDMUQsbUVBQStFO0FBQy9FLDBDQUErQztBQUMvQyw4Q0FVMkI7QUFFM0IsaUVBQThEO0FBc0I5RCxJQUFhLGdCQUFnQjtJQUE3QjtJQUNBLENBQUM7SUFBRCx1QkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksZ0JBQWdCO0lBcEI1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxnQ0FBYTtZQUNiLGlCQUFVO1lBQ1YsK0JBQW9CO1lBQ3BCLHVCQUFZO1lBQ1oscUJBQVk7WUFDWix1QkFBWTtZQUNaLDJCQUFnQjtZQUNoQix1QkFBWTtZQUNaLHdCQUFhO1lBQ2IseUJBQWM7WUFDZCx5QkFBYztZQUNkLHVCQUFZO1lBQ1osb0NBQXVCO1NBQ3hCO1FBQ0QsWUFBWSxFQUFFLENBQUUsMkNBQW1CLENBQUU7UUFDckMsT0FBTyxFQUFFLENBQUUsMkNBQW1CLENBQUU7UUFDaEMsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0dBQ1csZ0JBQWdCLENBQzVCO0FBRFksNENBQWdCIiwiZmlsZSI6ImFwcC9zaGFyZWQvaW1hZ2UtZnJhbWUvaW1hZ2UtZnJhbWUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEphbiBTdG9mZnJlZ2VuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBNZEJ1dHRvbk1vZHVsZSxcbiAgTWRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1kQ2FyZE1vZHVsZSxcbiAgTWRHcmlkTGlzdE1vZHVsZSxcbiAgTWRJY29uTW9kdWxlLFxuICBNZElucHV0TW9kdWxlLFxuICBNZExpc3RNb2R1bGUsXG4gIE1kU2xpZGVyTW9kdWxlLFxuICBNZE1lbnVNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBJbWFnZUZyYW1lQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1mcmFtZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIE1kQnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1kTGlzdE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWRDYXJkTW9kdWxlLFxuICAgIE1kR3JpZExpc3RNb2R1bGUsXG4gICAgTWRJY29uTW9kdWxlLFxuICAgIE1kSW5wdXRNb2R1bGUsXG4gICAgTWRCdXR0b25Nb2R1bGUsXG4gICAgTWRTbGlkZXJNb2R1bGUsXG4gICAgTWRNZW51TW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyBJbWFnZUZyYW1lQ29tcG9uZW50IF0sXG4gIGV4cG9ydHM6IFsgSW1hZ2VGcmFtZUNvbXBvbmVudCBdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlRnJhbWVNb2R1bGUge1xufVxuIl19
