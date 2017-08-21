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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var RegisterNavigationComponent = (function () {
    function RegisterNavigationComponent() {
    }
    return RegisterNavigationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RegisterNavigationComponent.prototype, "selectedTab", void 0);
RegisterNavigationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-register-navigation',
        templateUrl: 'register-navigation.component.html',
        styleUrls: ['register-navigation.component.css']
    })
], RegisterNavigationComponent);
exports.RegisterNavigationComponent = RegisterNavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci1uYXZpZ2F0aW9uL3JlZ2lzdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esc0NBQWlEO0FBRWpELG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBUXJDLElBQWEsMkJBQTJCO0lBQXhDO0lBSUEsQ0FBQztJQUFELGtDQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFGVTtJQUFSLFlBQUssRUFBRTs7Z0VBQXFCO0FBRmxCLDJCQUEyQjtJQU52QyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBRSxtQ0FBbUMsQ0FBRTtLQUNuRCxDQUFDO0dBQ1csMkJBQTJCLENBSXZDO0FBSlksa0VBQTJCIiwiZmlsZSI6ImFwcC9yZWdpc3Rlci9yZWdpc3Rlci1uYXZpZ2F0aW9uL3JlZ2lzdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFJldG8gQmF1bWdhcnRuZXIgKHJmYmF1bWdhcnRuZXIpIG9uIDA3LjA3LjE3LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyYWUtcmVnaXN0ZXItbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAncmVnaXN0ZXItbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyTmF2aWdhdGlvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgc2VsZWN0ZWRUYWI6IHN0cmluZztcblxufVxuIl19
