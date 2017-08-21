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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var knora_api_params_1 = require("../shared/utilities/knora-api-params");
var SuperKonvolutComponent = (function () {
    function SuperKonvolutComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this._esearch = new knora_api_params_1.ExtendedSearch();
    }
    SuperKonvolutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.konvolut_type = this.route.snapshot.url[0].path;
        this._esearch.filterByRestype = 'http://www.knora.org/ontology/text#Convolute';
        this._esearch.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasTitle', '!EQ', ' ');
        this._esearch.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasDescription', '!EQ', ' ');
        this._esearch.showNRows = 500;
        this.route.params
            .switchMap(function (params) {
            return _this.http.get(_this._esearch.toString());
        })
            .map(function (response) { return response.json().subjects; })
            .subscribe(function (res) { return _this.poems = res; });
        this.konvolut_type = this.route.snapshot.url[0].path;
        this.sub = this.route.params.subscribe(function (params) {
            _this.konvolut_id = params['id'];
        });
        console.log('search/schlaf?searchtype=fulltext');
    };
    return SuperKonvolutComponent;
}());
SuperKonvolutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-super-konvolut',
        templateUrl: 'super-konvolut.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router])
], SuperKonvolutComponent);
exports.SuperKonvolutComponent = SuperKonvolutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9rb252b2x1dC9zdXBlci1rb252b2x1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBa0Q7QUFDbEQsc0NBQXFDO0FBQ3JDLDBDQUFpRTtBQUVqRSxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLHVDQUFxQztBQUNyQyx5RUFBcUY7QUFPckYsSUFBYSxzQkFBc0I7SUFZakMsZ0NBQW9CLElBQVUsRUFBVSxLQUFxQixFQUFVLE1BQWM7UUFBakUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUY3RSxhQUFRLEdBQUcsSUFBSSxpQ0FBYyxFQUFFLENBQUM7SUFHeEMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxDQUFDO1FBRXZELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLDhDQUE4QyxDQUFDO1FBQy9FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQWEsQ0FBQyw2Q0FBNkMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBYSxDQUFDLG1EQUFtRCxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFFOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUN4QixPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFBdkMsQ0FBdUMsQ0FBQzthQUN6QyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUF4QixDQUF3QixDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxVQUFDLEdBQWUsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMzQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUgsNkJBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLHNCQUFzQjtJQUxsQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsV0FBVyxFQUFFLCtCQUErQjtLQUM3QyxDQUFDO3FDQWEwQixXQUFJLEVBQWlCLHVCQUFjLEVBQWtCLGVBQU07R0FaMUUsc0JBQXNCLENBcUNsQztBQXJDWSx3REFBc0IiLCJmaWxlIjoiYXBwL2tvbnZvbHV0L3N1cGVyLWtvbnZvbHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBSZXRvIEJhdW1nYXJ0bmVyIChyZmJhdW1nYXJ0bmVyKSBvbiAyOS4wNi4xNy5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQgeyBFeHRlbmRlZFNlYXJjaCwgS25vcmFQcm9wZXJ0eSB9IGZyb20gJy4uL3NoYXJlZC91dGlsaXRpZXMva25vcmEtYXBpLXBhcmFtcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JhZS1zdXBlci1rb252b2x1dCcsXG4gIHRlbXBsYXRlVXJsOiAnc3VwZXIta29udm9sdXQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN1cGVyS29udm9sdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHBvZW1zOiBBcnJheTxhbnk+O1xuXG4gIC8vIGZvciB0ZXN0aW5nc1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuXG4gIGtvbnZvbHV0X2lkOiBzdHJpbmc7XG4gIGtvbnZvbHV0X3R5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgcHJpdmF0ZSBfZXNlYXJjaCA9IG5ldyBFeHRlbmRlZFNlYXJjaCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMua29udm9sdXRfdHlwZSA9IHRoaXMucm91dGUuc25hcHNob3QudXJsWyAwIF0ucGF0aDtcblxuICAgIHRoaXMuX2VzZWFyY2guZmlsdGVyQnlSZXN0eXBlID0gJ2h0dHA6Ly93d3cua25vcmEub3JnL29udG9sb2d5L3RleHQjQ29udm9sdXRlJztcbiAgICB0aGlzLl9lc2VhcmNoLnByb3BlcnR5ID0gbmV3IEtub3JhUHJvcGVydHkoJ2h0dHA6Ly93d3cua25vcmEub3JnL29udG9sb2d5L3RleHQjaGFzVGl0bGUnLCAnIUVRJywgJyAnKTtcbiAgICB0aGlzLl9lc2VhcmNoLnByb3BlcnR5ID0gbmV3IEtub3JhUHJvcGVydHkoJ2h0dHA6Ly93d3cua25vcmEub3JnL29udG9sb2d5L3RleHQjaGFzRGVzY3JpcHRpb24nLCAnIUVRJywgJyAnKTtcbiAgICB0aGlzLl9lc2VhcmNoLnNob3dOUm93cyA9IDUwMDtcblxuICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT5cbiAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLl9lc2VhcmNoLnRvU3RyaW5nKCkpKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkuc3ViamVjdHMpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IEFycmF5PGFueT4pID0+IHRoaXMucG9lbXMgPSByZXMpO1xuXG4gICAgdGhpcy5rb252b2x1dF90eXBlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbIDAgXS5wYXRoO1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmtvbnZvbHV0X2lkID0gcGFyYW1zWyAnaWQnIF07XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnc2VhcmNoL3NjaGxhZj9zZWFyY2h0eXBlPWZ1bGx0ZXh0Jyk7XG4gIH1cblxufVxuIl19
