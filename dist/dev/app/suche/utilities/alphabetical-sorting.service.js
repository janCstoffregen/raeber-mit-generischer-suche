"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AlphabeticalSortingService = (function () {
    function AlphabeticalSortingService() {
    }
    AlphabeticalSortingService.prototype.germanAlphabeticalSortKey = function (key) {
        return key
            .toLowerCase()
            .replace(/[àáâãäå]/gi, 'a')
            .replace(/[æ]/gi, 'ae')
            .replace(/[ç]/gi, 'c')
            .replace(/[ð]/gi, 'd')
            .replace(/[èéêë]/gi, 'e')
            .replace(/[ìíîï]/gi, 'i')
            .replace(/[òóôõöø]/gi, 'o')
            .replace(/[ñ]/gi, 'n')
            .replace(/[ß]/gi, 'ss')
            .replace(/[ùúûü]/gi, 'u')
            .replace(/[ýÿ]/gi, 'y')
            .replace(/[^a-z0-9 ]/gi, '')
            .concat('\t', key.toLowerCase(), '\t', key);
    };
    return AlphabeticalSortingService;
}());
AlphabeticalSortingService = __decorate([
    core_1.Injectable()
], AlphabeticalSortingService);
exports.AlphabeticalSortingService = AlphabeticalSortingService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS91dGlsaXRpZXMvYWxwaGFiZXRpY2FsLXNvcnRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLHNDQUEyQztBQUczQyxJQUFhLDBCQUEwQjtJQUF2QztJQW1CQSxDQUFDO0lBbEJDLDhEQUF5QixHQUF6QixVQUEwQixHQUFXO1FBRW5DLE1BQU0sQ0FBQyxHQUFHO2FBQ1AsV0FBVyxFQUFFO2FBQ2IsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7YUFDMUIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7YUFDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7YUFDckIsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7YUFDeEIsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7YUFDeEIsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7YUFDMUIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7YUFDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDdEIsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7YUFDeEIsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7YUFDdEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7YUFDM0IsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDSCxpQ0FBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksMEJBQTBCO0lBRHRDLGlCQUFVLEVBQUU7R0FDQSwwQkFBMEIsQ0FtQnRDO0FBbkJZLGdFQUEwQiIsImZpbGUiOiJhcHAvc3VjaGUvdXRpbGl0aWVzL2FscGhhYmV0aWNhbC1zb3J0aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgUmV0byBCYXVtZ2FydG5lciAocmZiYXVtZ2FydG5lcikgb24gMjQuMDcuMTcuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFscGhhYmV0aWNhbFNvcnRpbmdTZXJ2aWNlIHtcbiAgZ2VybWFuQWxwaGFiZXRpY2FsU29ydEtleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gcmVwbGFjZSBzcGVjaWFsIGNoYXJhY3RlcnMgb2YgTGF0aW4tMSBieSBiYXNlIGxldHRlciBhbmQgYXBwZW5kIG9yaWdpbmFsIHN0cmluZyBmb3IgaW50ZXJuYWwgc29ydGluZ1xuICAgIHJldHVybiBrZXlcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAucmVwbGFjZSgvW8Ogw6HDosOjw6TDpV0vZ2ksICdhJylcbiAgICAgIC5yZXBsYWNlKC9bw6ZdL2dpLCAnYWUnKVxuICAgICAgLnJlcGxhY2UoL1vDp10vZ2ksICdjJylcbiAgICAgIC5yZXBsYWNlKC9bw7BdL2dpLCAnZCcpXG4gICAgICAucmVwbGFjZSgvW8Oow6nDqsOrXS9naSwgJ2UnKVxuICAgICAgLnJlcGxhY2UoL1vDrMOtw67Dr10vZ2ksICdpJylcbiAgICAgIC5yZXBsYWNlKC9bw7LDs8O0w7XDtsO4XS9naSwgJ28nKVxuICAgICAgLnJlcGxhY2UoL1vDsV0vZ2ksICduJylcbiAgICAgIC5yZXBsYWNlKC9bw59dL2dpLCAnc3MnKVxuICAgICAgLnJlcGxhY2UoL1vDucO6w7vDvF0vZ2ksICd1JylcbiAgICAgIC5yZXBsYWNlKC9bw73Dv10vZ2ksICd5JylcbiAgICAgIC5yZXBsYWNlKC9bXmEtejAtOSBdL2dpLCAnJylcbiAgICAgIC5jb25jYXQoJ1xcdCcsIGtleS50b0xvd2VyQ2FzZSgpLCAnXFx0Jywga2V5KTtcbiAgfVxufVxuIl19
