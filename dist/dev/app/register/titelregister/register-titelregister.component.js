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
var knora_api_params_1 = require("../../shared/utilities/knora-api-params");
var alphabetical_sorting_service_1 = require("../../shared/utilities/alphabetical-sorting.service");
var RegisterTitelregisterComponent = (function () {
    function RegisterTitelregisterComponent(http, route, router, sortingService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.sortingService = sortingService;
    }
    RegisterTitelregisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var searchParams = new knora_api_params_1.FulltextSearch;
        searchParams.searchstring = 'e';
        this.route.params
            .switchMap(function (params) { return _this.http.get(searchParams.toString()); })
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.rsEntry = res.subjects;
            _this.nHits = res.nhits;
            _this.sortAlphabetically();
        });
    };
    RegisterTitelregisterComponent.prototype.sortAlphabetically = function () {
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
    RegisterTitelregisterComponent.prototype.sortChronologically = function () {
        this.rsEntry = this.rsEntry.sort(function (n1, n2) {
            var k1 = n1.obj_id;
            var k2 = n2.obj_id;
            if (k1 > k2) {
                return 1;
            }
            if (k1 < k2) {
                return -1;
            }
            return 0;
        });
    };
    return RegisterTitelregisterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RegisterTitelregisterComponent.prototype, "selectedTab", void 0);
RegisterTitelregisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-register-titelregister',
        templateUrl: 'register-titelregister.component.html',
        styleUrls: ['register-titelregister.component.css'],
        providers: [alphabetical_sorting_service_1.AlphabeticalSortingService]
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router,
        alphabetical_sorting_service_1.AlphabeticalSortingService])
], RegisterTitelregisterComponent);
exports.RegisterTitelregisterComponent = RegisterTitelregisterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci90aXRlbHJlZ2lzdGVyL3JlZ2lzdGVyLXRpdGVscmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsc0NBQXlEO0FBQ3pELHNDQUFxQztBQUNyQywwQ0FBaUU7QUFFakUsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQiw0RUFBeUU7QUFDekUsb0dBQWlHO0FBU2pHLElBQWEsOEJBQThCO0lBT3pDLHdDQUFvQixJQUFVLEVBQVUsS0FBcUIsRUFBVSxNQUFjLEVBQ2pFLGNBQTBDO1FBRDFDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakUsbUJBQWMsR0FBZCxjQUFjLENBQTRCO0lBQzlELENBQUM7SUFFRCxpREFBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLFlBQVksR0FBRyxJQUFJLGlDQUFjLENBQUM7UUFDdEMsWUFBWSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFFaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXRDLENBQXNDLENBQUM7YUFDckUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQyxHQUFRO1lBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsMkRBQWtCLEdBQWxCO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdEMsSUFBTSxFQUFFLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUM7WUFDeEUsSUFBTSxFQUFFLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUM7WUFDeEUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDO1lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDREQUFtQixHQUFuQjtRQUVFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLEVBQUUsRUFBRTtZQUN0QyxJQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3JCLElBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDO1lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFDQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQXREVTtJQUFSLFlBQUssRUFBRTs7bUVBQXFCO0FBTGxCLDhCQUE4QjtJQVAxQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsV0FBVyxFQUFFLHVDQUF1QztRQUNwRCxTQUFTLEVBQUUsQ0FBRSxzQ0FBc0MsQ0FBRTtRQUNyRCxTQUFTLEVBQUUsQ0FBRSx5REFBMEIsQ0FBRTtLQUMxQyxDQUFDO3FDQVEwQixXQUFJLEVBQWlCLHVCQUFjLEVBQWtCLGVBQU07UUFDakQseURBQTBCO0dBUm5ELDhCQUE4QixDQTJEMUM7QUEzRFksd0VBQThCIiwiZmlsZSI6ImFwcC9yZWdpc3Rlci90aXRlbHJlZ2lzdGVyL3JlZ2lzdGVyLXRpdGVscmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFJldG8gQmF1bWdhcnRuZXIgKHJmYmF1bWdhcnRuZXIpIG9uIDA3LjA3LjE3LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBGdWxsdGV4dFNlYXJjaCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsaXRpZXMva25vcmEtYXBpLXBhcmFtcyc7XG5pbXBvcnQgeyBBbHBoYWJldGljYWxTb3J0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsaXRpZXMvYWxwaGFiZXRpY2FsLXNvcnRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JhZS1yZWdpc3Rlci10aXRlbHJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci10aXRlbHJlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICdyZWdpc3Rlci10aXRlbHJlZ2lzdGVyLmNvbXBvbmVudC5jc3MnIF0sXG4gIHByb3ZpZGVyczogWyBBbHBoYWJldGljYWxTb3J0aW5nU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVGl0ZWxyZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcnNFbnRyeTogQXJyYXk8YW55PjtcbiAgbkhpdHM6IG51bWJlcjtcblxuICBASW5wdXQoKSBzZWxlY3RlZFRhYjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgc29ydGluZ1NlcnZpY2U6IEFscGhhYmV0aWNhbFNvcnRpbmdTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IEZ1bGx0ZXh0U2VhcmNoO1xuICAgIHNlYXJjaFBhcmFtcy5zZWFyY2hzdHJpbmcgPSAnZSc7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuaHR0cC5nZXQoc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCkpKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yc0VudHJ5ID0gcmVzLnN1YmplY3RzO1xuICAgICAgdGhpcy5uSGl0cyA9IHJlcy5uaGl0cztcbiAgICAgIHRoaXMuc29ydEFscGhhYmV0aWNhbGx5KCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiBTb3J0IGFscGhhYmV0aWNhbGx5IGFmdGVyIGluaXQuIEhvdz9cblxuICBzb3J0QWxwaGFiZXRpY2FsbHkoKSB7XG4gICAgdGhpcy5yc0VudHJ5ID0gdGhpcy5yc0VudHJ5LnNvcnQoKG4xLCBuMikgPT4ge1xuICAgICAgY29uc3QgazEgPSB0aGlzLnNvcnRpbmdTZXJ2aWNlLmdlcm1hbkFscGhhYmV0aWNhbFNvcnRLZXkobjEudmFsdWVbIDAgXSk7XG4gICAgICBjb25zdCBrMiA9IHRoaXMuc29ydGluZ1NlcnZpY2UuZ2VybWFuQWxwaGFiZXRpY2FsU29ydEtleShuMi52YWx1ZVsgMCBdKTtcbiAgICAgIGlmIChrMSA+IGsyKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoazEgPCBrMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydENocm9ub2xvZ2ljYWxseSgpIHtcbiAgICAvLyBTb3J0aWVyZSBuYWNoIG9ial9pZCBiaXMgZWluZSBpbnRlcm5lIE51bW1lcmllcnVuZyBkYSBpc3RcbiAgICB0aGlzLnJzRW50cnkgPSB0aGlzLnJzRW50cnkuc29ydCgobjEsIG4yKSA9PiB7XG4gICAgICBjb25zdCBrMSA9IG4xLm9ial9pZDtcbiAgICAgIGNvbnN0IGsyID0gbjIub2JqX2lkO1xuICAgICAgaWYgKGsxID4gazIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChrMSA8IGsyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
