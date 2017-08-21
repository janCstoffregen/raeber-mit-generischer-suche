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
var DynamicPaging = (function () {
    function DynamicPaging(http) {
        this.http = http;
        this._offset = 0;
        this._size = 20;
    }
    Object.defineProperty(DynamicPaging.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (v) {
            this._size = v;
        },
        enumerable: true,
        configurable: true
    });
    DynamicPaging.prototype.loadText = function (req) {
        req.showNRows = this._size;
        req.startAt = this._offset;
        this._offset = this._offset + this._size;
        return this.getText(req);
    };
    DynamicPaging.prototype.getText = function (params) {
        return this.http
            .get(params.toString())
            .map(function (response) { return response.json().subjects; });
    };
    return DynamicPaging;
}());
DynamicPaging = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DynamicPaging);
exports.DynamicPaging = DynamicPaging;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS90ZXh0Z3JpZC9wYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLHNDQUEyQztBQUUzQyxzQ0FBcUM7QUFJckMsSUFBYSxhQUFhO0lBSXhCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUh0QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUduQixDQUFDO0lBRUQsc0JBQUksK0JBQUk7YUFBUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFFRCxVQUFTLENBQVM7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQzs7O09BSkE7SUFNRCxnQ0FBUSxHQUFSLFVBQVMsR0FBaUI7UUFDeEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLE1BQW9CO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFSCxvQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUtlLFdBQUk7R0FKbkIsYUFBYSxDQTRCekI7QUE1Qlksc0NBQWEiLCJmaWxlIjoiYXBwL3N1Y2hlL3RleHRncmlkL3BhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFNlYmFzdGlhbiBTY2jDvHBiYWNoIChzZWJhc3RpYW4uc2NodWVwYmFjaEB1bmliYXMuY2gpIG9uIDcvMTIvMTcuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBLbm9yYVJlcXVlc3QgfSBmcm9tICcuLi91dGlsaXRpZXMva25vcmEtYXBpLXBhcmFtcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEeW5hbWljUGFnaW5nIHtcbiAgcHJpdmF0ZSBfb2Zmc2V0ID0gMDtcbiAgcHJpdmF0ZSBfc2l6ZSA9IDIwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICB9XG5cbiAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIHNldCBzaXplKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3NpemUgPSB2O1xuICB9XG5cbiAgbG9hZFRleHQocmVxOiBLbm9yYVJlcXVlc3QpOiBPYnNlcnZhYmxlPEFycmF5PGFueT4+IHtcbiAgICByZXEuc2hvd05Sb3dzID0gdGhpcy5fc2l6ZTtcbiAgICByZXEuc3RhcnRBdCA9IHRoaXMuX29mZnNldDtcbiAgICB0aGlzLl9vZmZzZXQgPSB0aGlzLl9vZmZzZXQgKyB0aGlzLl9zaXplO1xuICAgIHJldHVybiB0aGlzLmdldFRleHQocmVxKTtcbiAgfVxuXG4gIGdldFRleHQocGFyYW1zOiBLbm9yYVJlcXVlc3QpOiBPYnNlcnZhYmxlPEFycmF5PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHBhcmFtcy50b1N0cmluZygpKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkuc3ViamVjdHMpO1xuICB9XG5cbn1cbiJdfQ==
