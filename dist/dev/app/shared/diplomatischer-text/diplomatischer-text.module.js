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
var diplomatischer_text_component_1 = require("./diplomatischer-text.component");
var DiplomatischerTextModule = (function () {
    function DiplomatischerTextModule() {
    }
    return DiplomatischerTextModule;
}());
DiplomatischerTextModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MdButtonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCheckboxModule,
            material_1.MdToolbarModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            diplomatischer_text_component_1.DimplomatischerTextComponent
        ],
        exports: [diplomatischer_text_component_1.DimplomatischerTextComponent],
        providers: []
    })
], DiplomatischerTextModule);
exports.DiplomatischerTextModule = DiplomatischerTextModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGlwbG9tYXRpc2NoZXItdGV4dC9kaXBsb21hdGlzY2hlci10ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLHNDQUF5QztBQUN6Qyx3Q0FBa0U7QUFDbEUsc0NBQTJDO0FBQzNDLDhDQUkyQjtBQUMzQiw4REFBMEQ7QUFFMUQsaUZBQStFO0FBbUIvRSxJQUFhLHdCQUF3QjtJQUFyQztJQUNBLENBQUM7SUFBRCwrQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksd0JBQXdCO0lBakJwQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxnQ0FBYTtZQUNiLG1CQUFXO1lBQ1gsaUJBQVU7WUFDVix5QkFBYztZQUNkLCtCQUFvQjtZQUNwQiwyQkFBZ0I7WUFDaEIsMEJBQWU7WUFDZiwyQkFBbUI7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDWiw0REFBNEI7U0FDN0I7UUFDRCxPQUFPLEVBQUUsQ0FBRSw0REFBNEIsQ0FBRTtRQUN6QyxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7R0FDVyx3QkFBd0IsQ0FDcEM7QUFEWSw0REFBd0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9kaXBsb21hdGlzY2hlci10ZXh0L2RpcGxvbWF0aXNjaGVyLXRleHQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFJldG8gQmF1bWdhcnRuZXIgKHJmYmF1bWdhcnRuZXIpIG9uIDI0LjA3LjE3LlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7XG4gIE1kQnV0dG9uTW9kdWxlLFxuICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSwgTWRDaGVja2JveE1vZHVsZSxcbiAgTWRUb29sYmFyTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgRGltcGxvbWF0aXNjaGVyVGV4dENvbXBvbmVudCB9IGZyb20gJy4vZGlwbG9tYXRpc2NoZXItdGV4dC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIE1kQnV0dG9uTW9kdWxlLFxuICAgIE1kQnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1kQ2hlY2tib3hNb2R1bGUsXG4gICAgTWRUb29sYmFyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGltcGxvbWF0aXNjaGVyVGV4dENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbIERpbXBsb21hdGlzY2hlclRleHRDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEaXBsb21hdGlzY2hlclRleHRNb2R1bGUge1xufVxuIl19
