"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("../operators");
var RegisterComponent = (function () {
    function RegisterComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.title = 'Titelregister';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.selectedTab = params['zeitraum'];
        });
        console.log('search/schlaf?searchtype=fulltext');
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-register',
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxzQ0FBa0Q7QUFDbEQsc0NBQXFDO0FBQ3JDLDBDQUF5RDtBQUV6RCx3QkFBc0I7QUFPdEIsSUFBYSxpQkFBaUI7SUFPNUIsMkJBQW9CLElBQVUsRUFBVSxLQUFxQixFQUFVLE1BQWM7UUFBakUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5yRixVQUFLLEdBQUcsZUFBZSxDQUFDO0lBT3hCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFMQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDM0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUUsVUFBVSxDQUFFLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdILHdCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUseUJBQXlCO0tBQ3ZDLENBQUM7cUNBUTBCLFdBQUksRUFBaUIsdUJBQWMsRUFBa0IsZUFBTTtHQVAxRSxpQkFBaUIsQ0FvQjdCO0FBcEJZLDhDQUFpQiIsImZpbGUiOiJhcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFNlYmFzdGlhbiBTY2jDvHBiYWNoIChzZWJhc3RpYW4uc2NodWVwYmFjaEB1bmliYXMuY2gpIG9uIDYvNy8xNy5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgJy4uL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JhZS1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGUgPSAnVGl0ZWxyZWdpc3Rlcic7XG5cbiAgc2VsZWN0ZWRUYWI6IHN0cmluZztcblxuICBwcml2YXRlIHN1YjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSBwYXJhbXNbICd6ZWl0cmF1bScgXTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdzZWFyY2gvc2NobGFmP3NlYXJjaHR5cGU9ZnVsbHRleHQnKTtcbiAgfVxuXG5cbn1cbiJdfQ==
