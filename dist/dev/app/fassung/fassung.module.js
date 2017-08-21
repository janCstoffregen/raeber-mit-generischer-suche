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
var diplomatischer_text_module_1 = require("../shared/diplomatischer-text/diplomatischer-text.module");
var fassung_routing_module_1 = require("./fassung-routing.module");
var image_frame_module_1 = require("../shared/image-frame/image-frame.module");
var registerspalte_module_1 = require("../shared/registerspalte/registerspalte.module");
var fassung_blaettern_component_1 = require("./fassung-blaettern/fassung-blaettern.component");
var fassung_component_1 = require("./fassung.component");
var fassung_diplomatisch_component_1 = require("./fassung-diplomatisch/fassung-diplomatisch.component");
var fassung_steckbrief_component_1 = require("./fassung-steckbrief/fassung-steckbrief.component");
var fassung_weitere_component_1 = require("./fassung-weitere/fassung-weitere.component");
var fassung_werkzeugleiste_component_1 = require("./fassung-werkzeugleiste/fassung-werkzeugleiste.component");
var text_component_1 = require("../shared/text/text.component");
var FassungModule = (function () {
    function FassungModule() {
    }
    return FassungModule;
}());
FassungModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            diplomatischer_text_module_1.DiplomatischerTextModule,
            fassung_routing_module_1.FassungRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            image_frame_module_1.ImageFrameModule,
            material_1.MdButtonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCardModule,
            material_1.MdGridListModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdListModule,
            registerspalte_module_1.RegisterspalteModule,
            fassung_routing_module_1.FassungRoutingModule
        ],
        declarations: [
            fassung_blaettern_component_1.FassungBlaetternComponent,
            fassung_component_1.FassungComponent,
            fassung_diplomatisch_component_1.FassungDiplomatischComponent,
            fassung_steckbrief_component_1.FassungSteckbriefComponent,
            fassung_weitere_component_1.FassungWeitereComponent,
            fassung_werkzeugleiste_component_1.FassungWerkzeugleisteComponent,
            text_component_1.TextComponent
        ],
        exports: [fassung_component_1.FassungComponent],
        providers: []
    })
], FassungModule);
exports.FassungModule = FassungModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mYXNzdW5nL2Zhc3N1bmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsc0NBQXlDO0FBQ3pDLHdDQUE2QztBQUM3QyxzQ0FBMkM7QUFDM0MsOENBUTJCO0FBQzNCLDhEQUEwRDtBQUUxRCx1R0FBb0c7QUFDcEcsbUVBQWdFO0FBQ2hFLCtFQUE0RTtBQUM1RSx3RkFBc0Y7QUFFdEYsK0ZBQTRGO0FBQzVGLHlEQUF1RDtBQUN2RCx3R0FBcUc7QUFDckcsa0dBQStGO0FBQy9GLHlGQUFzRjtBQUN0Riw4R0FBMkc7QUFDM0csZ0VBQThEO0FBaUM5RCxJQUFhLGFBQWE7SUFBMUI7SUFDQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLGFBQWE7SUE5QnpCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGdDQUFhO1lBQ2IscURBQXdCO1lBQ3hCLDZDQUFvQjtZQUNwQixtQkFBVztZQUNYLGlCQUFVO1lBQ1YscUNBQWdCO1lBQ2hCLHlCQUFjO1lBQ2QsK0JBQW9CO1lBQ3BCLHVCQUFZO1lBQ1osMkJBQWdCO1lBQ2hCLHVCQUFZO1lBQ1osd0JBQWE7WUFDYix1QkFBWTtZQUNaLDRDQUFvQjtZQUNwQiw2Q0FBb0I7U0FDckI7UUFDRCxZQUFZLEVBQUU7WUFDWix1REFBeUI7WUFDekIsb0NBQWdCO1lBQ2hCLDZEQUE0QjtZQUM1Qix5REFBMEI7WUFDMUIsbURBQXVCO1lBQ3ZCLGlFQUE4QjtZQUM5Qiw4QkFBYTtTQUNkO1FBQ0QsT0FBTyxFQUFFLENBQUUsb0NBQWdCLENBQUU7UUFDN0IsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0dBQ1csYUFBYSxDQUN6QjtBQURZLHNDQUFhIiwiZmlsZSI6ImFwcC9mYXNzdW5nL2Zhc3N1bmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFJldG8gQmF1bWdhcnRuZXIgKHJmYmF1bWdhcnRuZXIpIG9uIDA1LjA3LjE3LlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7XG4gIE1kQnV0dG9uTW9kdWxlLFxuICBNZEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWRDYXJkTW9kdWxlLFxuICBNZEdyaWRMaXN0TW9kdWxlLFxuICBNZEljb25Nb2R1bGUsXG4gIE1kSW5wdXRNb2R1bGUsXG4gIE1kTGlzdE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IERpcGxvbWF0aXNjaGVyVGV4dE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9kaXBsb21hdGlzY2hlci10ZXh0L2RpcGxvbWF0aXNjaGVyLXRleHQubW9kdWxlJztcbmltcG9ydCB7IEZhc3N1bmdSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9mYXNzdW5nLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEltYWdlRnJhbWVNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaW1hZ2UtZnJhbWUvaW1hZ2UtZnJhbWUubW9kdWxlJztcbmltcG9ydCB7IFJlZ2lzdGVyc3BhbHRlTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3JlZ2lzdGVyc3BhbHRlL3JlZ2lzdGVyc3BhbHRlLm1vZHVsZSc7XG5cbmltcG9ydCB7IEZhc3N1bmdCbGFldHRlcm5Db21wb25lbnQgfSBmcm9tICcuL2Zhc3N1bmctYmxhZXR0ZXJuL2Zhc3N1bmctYmxhZXR0ZXJuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYXNzdW5nQ29tcG9uZW50IH0gZnJvbSAnLi9mYXNzdW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYXNzdW5nRGlwbG9tYXRpc2NoQ29tcG9uZW50IH0gZnJvbSAnLi9mYXNzdW5nLWRpcGxvbWF0aXNjaC9mYXNzdW5nLWRpcGxvbWF0aXNjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFzc3VuZ1N0ZWNrYnJpZWZDb21wb25lbnQgfSBmcm9tICcuL2Zhc3N1bmctc3RlY2ticmllZi9mYXNzdW5nLXN0ZWNrYnJpZWYuY29tcG9uZW50JztcbmltcG9ydCB7IEZhc3N1bmdXZWl0ZXJlQ29tcG9uZW50IH0gZnJvbSAnLi9mYXNzdW5nLXdlaXRlcmUvZmFzc3VuZy13ZWl0ZXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYXNzdW5nV2Vya3pldWdsZWlzdGVDb21wb25lbnQgfSBmcm9tICcuL2Zhc3N1bmctd2Vya3pldWdsZWlzdGUvZmFzc3VuZy13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC90ZXh0L3RleHQuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBEaXBsb21hdGlzY2hlclRleHRNb2R1bGUsXG4gICAgRmFzc3VuZ1JvdXRpbmdNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBJbWFnZUZyYW1lTW9kdWxlLFxuICAgIE1kQnV0dG9uTW9kdWxlLFxuICAgIE1kQnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1kQ2FyZE1vZHVsZSxcbiAgICBNZEdyaWRMaXN0TW9kdWxlLFxuICAgIE1kSWNvbk1vZHVsZSxcbiAgICBNZElucHV0TW9kdWxlLFxuICAgIE1kTGlzdE1vZHVsZSxcbiAgICBSZWdpc3RlcnNwYWx0ZU1vZHVsZSxcbiAgICBGYXNzdW5nUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGYXNzdW5nQmxhZXR0ZXJuQ29tcG9uZW50LFxuICAgIEZhc3N1bmdDb21wb25lbnQsXG4gICAgRmFzc3VuZ0RpcGxvbWF0aXNjaENvbXBvbmVudCxcbiAgICBGYXNzdW5nU3RlY2ticmllZkNvbXBvbmVudCxcbiAgICBGYXNzdW5nV2VpdGVyZUNvbXBvbmVudCxcbiAgICBGYXNzdW5nV2Vya3pldWdsZWlzdGVDb21wb25lbnQsXG4gICAgVGV4dENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbIEZhc3N1bmdDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGYXNzdW5nTW9kdWxlIHtcbn1cbiJdfQ==
