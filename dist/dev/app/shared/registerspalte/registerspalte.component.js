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
var knora_api_params_1 = require("../utilities/knora-api-params");
var alphabetical_sorting_service_1 = require("../utilities/alphabetical-sorting.service");
var RegisterspalteComponent = (function () {
    function RegisterspalteComponent(http, route, router, sortingService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.sortingService = sortingService;
    }
    RegisterspalteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var searchParams = new knora_api_params_1.ExtendedSearch();
        searchParams.filterByRestype = 'http://www.knora.org/ontology/text#Convolute';
        searchParams.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasTitle', '!EQ', ' ');
        searchParams.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasDescription', '!EQ', ' ');
        searchParams.showNRows = 500;
        this.route.params
            .switchMap(function (params) {
            return _this.http.get(searchParams.toString());
        })
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.rsEntry = res.subjects;
            _this.nHits = res.nhits;
            _this.sortAlphabetically();
            _this.sortingType = 'alphabetic';
        });
        this.konvolutType = this.route.snapshot.url[0].path;
        this.sub = this.route.params.subscribe(function (params) {
            _this.konvolutId = params['konvolut'];
        });
    };
    RegisterspalteComponent.prototype.sortAlphabetically = function () {
        var _this = this;
        this.rsEntry = this.rsEntry.sort(function (n1, n2) {
            var k1 = _this.sortingService.germanAlphabeticalSortKey(n1.value[0]);
            var k2 = _this.sortingService.germanAlphabeticalSortKey(n2.value[0]);
            if (k1 > k2) {
                return 1;
            }
            if (k1 < k2) {
                return -1;
            }
            return 0;
        });
    };
    RegisterspalteComponent.prototype.sortChronologically = function () {
        var _this = this;
        this.rsEntry = this.rsEntry.sort(function (n1, n2) {
            var k1;
            var k2;
            if (_this.konvolutType === 'notizbuecher' || _this.konvolutType === 'manuskripte') {
                k1 = n1.obj_id;
                k2 = n2.obj_id;
            }
            else {
                k1 = n1.obj_id;
                k2 = n2.obj_id;
            }
            if (k1 > k2) {
                return 1;
            }
            if (k1 < k2) {
                return -1;
            }
            return 0;
        });
    };
    return RegisterspalteComponent;
}());
RegisterspalteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-registerspalte',
        templateUrl: 'registerspalte.component.html',
        styleUrls: ['registerspalte.component.css'],
        providers: [alphabetical_sorting_service_1.AlphabeticalSortingService]
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router,
        alphabetical_sorting_service_1.AlphabeticalSortingService])
], RegisterspalteComponent);
exports.RegisterspalteComponent = RegisterspalteComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcmVnaXN0ZXJzcGFsdGUvcmVnaXN0ZXJzcGFsdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsc0NBQWtEO0FBQ2xELHNDQUFxQztBQUNyQywwQ0FBaUU7QUFFakUsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQixrRUFBOEU7QUFDOUUsMEZBQXVGO0FBU3ZGLElBQWEsdUJBQXVCO0lBU2xDLGlDQUFvQixJQUFVLEVBQVUsS0FBcUIsRUFBVSxNQUFjLEVBQ2pFLGNBQTBDO1FBRDFDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakUsbUJBQWMsR0FBZCxjQUFjLENBQTRCO0lBQzlELENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBckJDLElBQUksWUFBWSxHQUFHLElBQUksaUNBQWMsRUFBRSxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxlQUFlLEdBQUcsOENBQThDLENBQUM7UUFDOUUsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFhLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JHLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBYSxDQUFDLG1EQUFtRCxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRyxZQUFZLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQ3hCLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQXRDLENBQXNDLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FB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QThCLENBQUU7UUFDN0MsU0FBUyxFQUFFLENBQUUseURBQTBCLENBQUU7S0FDMUMsQ0FBQztxQ0FVMEIsV0FBSSxFQUFpQix1QkFBYyxFQUFrQixlQUFNO1FBQ2pELHlEQUEwQjtHQVZuRCx1QkFBdUIsQ0ErRW5DO0FBL0VZLDBEQUF1QiIsImZpbGUiOiJhcHAvc2hhcmVkL3JlZ2lzdGVyc3BhbHRlL3JlZ2lzdGVyc3BhbHRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBSZXRvIEJhdW1nYXJ0bmVyIChyZmJhdW1nYXJ0bmVyKSBvbiAyNy4wNi4xNy5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBFeHRlbmRlZFNlYXJjaCwgS25vcmFQcm9wZXJ0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9rbm9yYS1hcGktcGFyYW1zJztcbmltcG9ydCB7IEFscGhhYmV0aWNhbFNvcnRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2FscGhhYmV0aWNhbC1zb3J0aW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyYWUtcmVnaXN0ZXJzcGFsdGUnLFxuICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyc3BhbHRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICdyZWdpc3RlcnNwYWx0ZS5jb21wb25lbnQuY3NzJyBdLFxuICBwcm92aWRlcnM6IFsgQWxwaGFiZXRpY2FsU29ydGluZ1NlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlcnNwYWx0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcnNFbnRyeTogQXJyYXk8YW55PjtcbiAgbkhpdHM6IG51bWJlcjtcbiAga29udm9sdXRJZDogc3RyaW5nO1xuICBrb252b2x1dFR5cGU6IHN0cmluZztcbiAgc29ydGluZ1R5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvcnRpbmdTZXJ2aWNlOiBBbHBoYWJldGljYWxTb3J0aW5nU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBFeHRlbmRlZFNlYXJjaCgpO1xuICAgIHNlYXJjaFBhcmFtcy5maWx0ZXJCeVJlc3R5cGUgPSAnaHR0cDovL3d3dy5rbm9yYS5vcmcvb250b2xvZ3kvdGV4dCNDb252b2x1dGUnO1xuICAgIHNlYXJjaFBhcmFtcy5wcm9wZXJ0eSA9IG5ldyBLbm9yYVByb3BlcnR5KCdodHRwOi8vd3d3Lmtub3JhLm9yZy9vbnRvbG9neS90ZXh0I2hhc1RpdGxlJywgJyFFUScsICcgJyk7XG4gICAgc2VhcmNoUGFyYW1zLnByb3BlcnR5ID0gbmV3IEtub3JhUHJvcGVydHkoJ2h0dHA6Ly93d3cua25vcmEub3JnL29udG9sb2d5L3RleHQjaGFzRGVzY3JpcHRpb24nLCAnIUVRJywgJyAnKTtcbiAgICBzZWFyY2hQYXJhbXMuc2hvd05Sb3dzID0gNTAwO1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PlxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHNlYXJjaFBhcmFtcy50b1N0cmluZygpKSlcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5yc0VudHJ5ID0gcmVzLnN1YmplY3RzO1xuICAgICAgICB0aGlzLm5IaXRzID0gcmVzLm5oaXRzO1xuICAgICAgICB0aGlzLnNvcnRBbHBoYWJldGljYWxseSgpO1xuICAgICAgICB0aGlzLnNvcnRpbmdUeXBlID0gJ2FscGhhYmV0aWMnO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmtvbnZvbHV0VHlwZSA9IHRoaXMucm91dGUuc25hcHNob3QudXJsWyAwIF0ucGF0aDtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5rb252b2x1dElkID0gcGFyYW1zWyAna29udm9sdXQnIF07XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiBTb3J0IGFscGhhYmV0aWNhbGx5IGFmdGVyIGluaXQuIEhvdz9cblxuICBzb3J0QWxwaGFiZXRpY2FsbHkoKSB7XG4gICAgdGhpcy5yc0VudHJ5ID0gdGhpcy5yc0VudHJ5LnNvcnQoKG4xLCBuMikgPT4ge1xuICAgICAgY29uc3QgazEgPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLmdlcm1hbkFscGhhYmV0aWNhbFNvcnRLZXkobjEudmFsdWVbIDAgXSk7XG4gICAgICBjb25zdCBrMiA9IHRoaXMuc29ydGluZ1NlcnZpY2UuZ2VybWFuQWxwaGFiZXRpY2FsU29ydEtleShuMi52YWx1ZVsgMCBdKTtcbiAgICAgIGlmIChrMSA+IGsyKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoazEgPCBrMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydENocm9ub2xvZ2ljYWxseSgpIHtcbiAgICAvLyBTb3J0aWVyZSBuYWNoIG9ial9pZCBiaXMgZWluZSBpbnRlcm5lIE51bW1lcmllcnVuZyBkYSBpc3RcbiAgICAvLyBUT0RPIHBhc3NlIGFuIGVudHNwcmVjaGVuZGUgRGF0ZW50eXBlbiBkZXIgRmVsZGVyIGFuXG4gICAgdGhpcy5yc0VudHJ5ID0gdGhpcy5yc0VudHJ5LnNvcnQoKG4xLCBuMikgPT4ge1xuICAgICAgbGV0IGsxO1xuICAgICAgbGV0IGsyO1xuICAgICAgaWYgKHRoaXMua29udm9sdXRUeXBlID09PSAnbm90aXpidWVjaGVyJyB8fCB0aGlzLmtvbnZvbHV0VHlwZSA9PT0gJ21hbnVza3JpcHRlJykge1xuICAgICAgICBrMSA9IG4xLm9ial9pZDtcbiAgICAgICAgazIgPSBuMi5vYmpfaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrMSA9IG4xLm9ial9pZDtcbiAgICAgICAgazIgPSBuMi5vYmpfaWQ7XG4gICAgICB9XG4gICAgICBpZiAoazEgPiBrMikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGsxIDwgazIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxufVxuIl19
