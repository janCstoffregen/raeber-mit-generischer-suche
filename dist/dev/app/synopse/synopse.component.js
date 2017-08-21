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
var knora_api_params_1 = require("../shared/utilities/knora-api-params");
var SynopseComponent = (function () {
    function SynopseComponent(http, route) {
        this.http = http;
        this.route = route;
        this.showText = true;
        this.viewMode = 'grid';
    }
    SynopseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.synopseTag = params['synopse'];
        });
        var searchParams = new knora_api_params_1.ExtendedSearch();
        searchParams.filterByRestype = 'http://www.knora.org/ontology/text#Convolute';
        searchParams.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasTitle', 'MATCH', this.synopseTag);
        searchParams.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasDescription', '!EQ', ' ');
        searchParams.showNRows = 500;
        this.route.params
            .switchMap(function (params) {
            return _this.http.get(searchParams.toString());
        })
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.poemsInSynopse = res.subjects;
            _this.nHits = res.nhits;
        });
    };
    return SynopseComponent;
}());
SynopseComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-synopse',
        templateUrl: 'synopse.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], SynopseComponent);
exports.SynopseComponent = SynopseComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zeW5vcHNlL3N5bm9wc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsc0NBQWtEO0FBQ2xELHNDQUFxQztBQUNyQywwQ0FBeUQ7QUFFekQseUVBQXFGO0FBT3JGLElBQWEsZ0JBQWdCO0lBVzNCLDBCQUFvQixJQUFVLEVBQVUsS0FBcUI7UUFBekMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMzQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBRSxTQUFTLENBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUdILElBQUksWUFBWSxHQUFHLElBQUksaUNBQWMsRUFBRSxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxlQUFlLEdBQUcsOENBQThDLENBQUM7UUFDOUUsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFhLENBQUMsNkNBQTZDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuSCxZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQWEsQ0FBQyxtREFBbUQsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0csWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFFN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUN4QixPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUF0QyxDQUFzQyxDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUNsQixLQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtBQXJDWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsd0JBQXdCO0tBQ3RDLENBQUM7cUNBWTBCLFdBQUksRUFBaUIsdUJBQWM7R0FYbEQsZ0JBQWdCLENBcUM1QjtBQXJDWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL3N5bm9wc2Uvc3lub3BzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgU2ViYXN0aWFuIFNjaMO8cGJhY2ggKHNlYmFzdGlhbi5zY2h1ZXBiYWNoQHVuaWJhcy5jaCkgb24gNi83LzE3LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRXh0ZW5kZWRTZWFyY2gsIEtub3JhUHJvcGVydHkgfSBmcm9tICcuLi9zaGFyZWQvdXRpbGl0aWVzL2tub3JhLWFwaS1wYXJhbXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyYWUtc3lub3BzZScsXG4gIHRlbXBsYXRlVXJsOiAnc3lub3BzZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3lub3BzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcG9lbXNJblN5bm9wc2U6IEFycmF5PGFueT47XG4gIG5IaXRzOiBudW1iZXI7XG4gIHN5bm9wc2VUYWc6IHN0cmluZztcblxuICBzaG93VGV4dDogYm9vbGVhbjtcbiAgdmlld01vZGU6IHN0cmluZztcblxuICBwcml2YXRlIHN1YjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB0aGlzLnNob3dUZXh0ID0gdHJ1ZTtcbiAgICB0aGlzLnZpZXdNb2RlID0gJ2dyaWQnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuc3lub3BzZVRhZyA9IHBhcmFtc1sgJ3N5bm9wc2UnIF07XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPIFBhcmFtZXRlciBhbnBhc3NlblxuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgRXh0ZW5kZWRTZWFyY2goKTtcbiAgICBzZWFyY2hQYXJhbXMuZmlsdGVyQnlSZXN0eXBlID0gJ2h0dHA6Ly93d3cua25vcmEub3JnL29udG9sb2d5L3RleHQjQ29udm9sdXRlJztcbiAgICBzZWFyY2hQYXJhbXMucHJvcGVydHkgPSBuZXcgS25vcmFQcm9wZXJ0eSgnaHR0cDovL3d3dy5rbm9yYS5vcmcvb250b2xvZ3kvdGV4dCNoYXNUaXRsZScsICdNQVRDSCcsIHRoaXMuc3lub3BzZVRhZyk7XG4gICAgc2VhcmNoUGFyYW1zLnByb3BlcnR5ID0gbmV3IEtub3JhUHJvcGVydHkoJ2h0dHA6Ly93d3cua25vcmEub3JnL29udG9sb2d5L3RleHQjaGFzRGVzY3JpcHRpb24nLCAnIUVRJywgJyAnKTtcbiAgICBzZWFyY2hQYXJhbXMuc2hvd05Sb3dzID0gNTAwO1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PlxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHNlYXJjaFBhcmFtcy50b1N0cmluZygpKSlcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5wb2Vtc0luU3lub3BzZSA9IHJlcy5zdWJqZWN0cztcbiAgICAgICAgdGhpcy5uSGl0cyA9IHJlcy5uaGl0cztcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=
