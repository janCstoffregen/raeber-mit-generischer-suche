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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXRpbGl0aWVzL2FscGhhYmV0aWNhbC1zb3J0aW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxzQ0FBMkM7QUFHM0MsSUFBYSwwQkFBMEI7SUFBdkM7SUFtQkEsQ0FBQztJQWxCQyw4REFBeUIsR0FBekIsVUFBMEIsR0FBVztRQUVuQyxNQUFNLENBQUMsR0FBRzthQUNQLFdBQVcsRUFBRTthQUNiLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO2FBQ3hCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2FBQzNCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLDBCQUEwQjtJQUR0QyxpQkFBVSxFQUFFO0dBQ0EsMEJBQTBCLENBbUJ0QztBQW5CWSxnRUFBMEIiLCJmaWxlIjoiYXBwL3NoYXJlZC91dGlsaXRpZXMvYWxwaGFiZXRpY2FsLXNvcnRpbmcuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBSZXRvIEJhdW1nYXJ0bmVyIChyZmJhdW1nYXJ0bmVyKSBvbiAyNC4wNy4xNy5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxwaGFiZXRpY2FsU29ydGluZ1NlcnZpY2Uge1xuICBnZXJtYW5BbHBoYWJldGljYWxTb3J0S2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyByZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVycyBvZiBMYXRpbi0xIGJ5IGJhc2UgbGV0dGVyIGFuZCBhcHBlbmQgb3JpZ2luYWwgc3RyaW5nIGZvciBpbnRlcm5hbCBzb3J0aW5nXG4gICAgcmV0dXJuIGtleVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKC9bw6DDocOiw6PDpMOlXS9naSwgJ2EnKVxuICAgICAgLnJlcGxhY2UoL1vDpl0vZ2ksICdhZScpXG4gICAgICAucmVwbGFjZSgvW8OnXS9naSwgJ2MnKVxuICAgICAgLnJlcGxhY2UoL1vDsF0vZ2ksICdkJylcbiAgICAgIC5yZXBsYWNlKC9bw6jDqcOqw6tdL2dpLCAnZScpXG4gICAgICAucmVwbGFjZSgvW8Osw63DrsOvXS9naSwgJ2knKVxuICAgICAgLnJlcGxhY2UoL1vDssOzw7TDtcO2w7hdL2dpLCAnbycpXG4gICAgICAucmVwbGFjZSgvW8OxXS9naSwgJ24nKVxuICAgICAgLnJlcGxhY2UoL1vDn10vZ2ksICdzcycpXG4gICAgICAucmVwbGFjZSgvW8O5w7rDu8O8XS9naSwgJ3UnKVxuICAgICAgLnJlcGxhY2UoL1vDvcO/XS9naSwgJ3knKVxuICAgICAgLnJlcGxhY2UoL1teYS16MC05IF0vZ2ksICcnKVxuICAgICAgLmNvbmNhdCgnXFx0Jywga2V5LnRvTG93ZXJDYXNlKCksICdcXHQnLCBrZXkpO1xuICB9XG59XG4iXX0=
