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
var FassungComponent = (function () {
    function FassungComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.creationDate = 'Freitag, 01 Juni 1979';
        this.modificationDate = 'Samstag, 13 Mai 2017';
        this.zeigeKonstituiert = true;
        this.zeigeDiplomatisch = false;
        this.fassung_tag = [
            'Sonne',
            'Wind',
            'Wasser'
        ];
        this.pages = ['page1', 'page2'];
        this.nextPoem = '219-brunnen';
        this.prevPoem = '221-baum';
    }
    FassungComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.poem_resizable = true;
        this.show_register = true;
        this.konvolut_type = this.route.snapshot.url[0].path;
        var searchParams = new knora_api_params_1.FulltextSearch;
        searchParams.searchstring = 'e';
        this.konvolut_type = this.route.snapshot.url[0].path;
        this.sub = this.route.params.subscribe(function (params) {
            _this.konvolut_id = params['konvolut'];
            _this.poem_id = params['fassung'];
        });
    };
    return FassungComponent;
}());
FassungComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-fassung',
        templateUrl: 'fassung.component.html',
        styleUrls: ['fassung.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router])
], FassungComponent);
exports.FassungComponent = FassungComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mYXNzdW5nL2Zhc3N1bmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esc0NBQWtEO0FBQ2xELHNDQUFxQztBQUNyQywwQ0FBaUU7QUFFakUsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFDckMseUVBQXNFO0FBUXRFLElBQWEsZ0JBQWdCO0lBZ0MzQiwwQkFBb0IsSUFBVSxFQUFVLEtBQXFCLEVBQVUsTUFBYztRQUFqRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBL0JyRixpQkFBWSxHQUFHLHVCQUF1QixDQUFDO1FBQ3ZDLHFCQUFnQixHQUFHLHNCQUFzQixDQUFDO1FBRTFDLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFbkMsZ0JBQVcsR0FBa0I7WUFDM0IsT0FBTztZQUNQLE1BQU07WUFDTixRQUFRO1NBQ1QsQ0FBQztRQUdGLFVBQUssR0FBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQVV2QyxhQUFRLEdBQVcsYUFBYSxDQUFDO1FBQ2pDLGFBQVEsR0FBVyxVQUFVLENBQUM7SUFROUIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBQztRQUV2RCxJQUFJLFlBQVksR0FBRyxJQUFJLGlDQUFjLENBQUM7UUFDdEMsWUFBWSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFFaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMzQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBRSxVQUFVLENBQUUsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBRSxTQUFTLENBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBbERBLEFBa0RDLElBQUE7QUFsRFksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBRSx1QkFBdUIsQ0FBRTtLQUN2QyxDQUFDO3FDQWlDMEIsV0FBSSxFQUFpQix1QkFBYyxFQUFrQixlQUFNO0dBaEMxRSxnQkFBZ0IsQ0FrRDVCO0FBbERZLDRDQUFnQiIsImZpbGUiOiJhcHAvZmFzc3VuZy9mYXNzdW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBTZWJhc3RpYW4gU2Now7xwYmFjaCAoc2ViYXN0aWFuLnNjaHVlcGJhY2hAdW5pYmFzLmNoKSBvbiA2LzcvMTcuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCB7IEZ1bGx0ZXh0U2VhcmNoIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxpdGllcy9rbm9yYS1hcGktcGFyYW1zJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmFlLWZhc3N1bmcnLFxuICB0ZW1wbGF0ZVVybDogJ2Zhc3N1bmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsgJ2Zhc3N1bmcuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBGYXNzdW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY3JlYXRpb25EYXRlID0gJ0ZyZWl0YWcsIDAxIEp1bmkgMTk3OSc7XG4gIG1vZGlmaWNhdGlvbkRhdGUgPSAnU2Ftc3RhZywgMTMgTWFpIDIwMTcnO1xuXG4gIHplaWdlS29uc3RpdHVpZXJ0OiBib29sZWFuID0gdHJ1ZTtcbiAgemVpZ2VEaXBsb21hdGlzY2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBmYXNzdW5nX3RhZzogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAnU29ubmUnLFxuICAgICdXaW5kJyxcbiAgICAnV2Fzc2VyJ1xuICBdO1xuICAvLyBUT0RPIGR5bmFtaXNpZXJlblxuXG4gIHBhZ2VzOiBBcnJheTxhbnk+ID0gWydwYWdlMScsICdwYWdlMiddO1xuICAvLyBUT0RPIGR5bmFtaXNpZXJlblxuXG4gIC8vIGZvciB0ZXN0aW5nc1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuXG4gIHBvZW1faWQ6IHN0cmluZztcbiAga29udm9sdXRfaWQ6IHN0cmluZztcbiAga29udm9sdXRfdHlwZTogc3RyaW5nO1xuXG4gIG5leHRQb2VtOiBzdHJpbmcgPSAnMjE5LWJydW5uZW4nOyAvLyBUT0RPXG4gIHByZXZQb2VtOiBzdHJpbmcgPSAnMjIxLWJhdW0nOyAvLyBUT0RPXG5cbiAgcG9lbV9yZXNpemFibGU6IGJvb2xlYW47XG4gIHNob3dfcmVnaXN0ZXI6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBzdWI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBvZW1fcmVzaXphYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dfcmVnaXN0ZXIgPSB0cnVlO1xuXG4gICAgdGhpcy5rb252b2x1dF90eXBlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbIDAgXS5wYXRoO1xuXG4gICAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBGdWxsdGV4dFNlYXJjaDtcbiAgICBzZWFyY2hQYXJhbXMuc2VhcmNoc3RyaW5nID0gJ2UnO1xuXG4gICAgdGhpcy5rb252b2x1dF90eXBlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbIDAgXS5wYXRoO1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmtvbnZvbHV0X2lkID0gcGFyYW1zWyAna29udm9sdXQnIF07XG4gICAgICB0aGlzLnBvZW1faWQgPSBwYXJhbXNbICdmYXNzdW5nJyBdO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
