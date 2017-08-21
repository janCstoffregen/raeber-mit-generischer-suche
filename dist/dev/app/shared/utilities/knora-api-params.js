"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var env_config_1 = require("../config/env.config");
var KnoraRequest = (function () {
    function KnoraRequest() {
        this._host = env_config_1.Config.API;
    }
    Object.defineProperty(KnoraRequest.prototype, "filterByRestype", {
        set: function (v) {
            this._filterByRestype = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnoraRequest.prototype, "filterByProject", {
        set: function (v) {
            this._filterByProject = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnoraRequest.prototype, "showNRows", {
        set: function (v) {
            this._showNRows = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnoraRequest.prototype, "startAt", {
        set: function (v) {
            this._startAt = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnoraRequest.prototype, "host", {
        set: function (v) {
            this._host = v;
        },
        enumerable: true,
        configurable: true
    });
    return KnoraRequest;
}());
exports.KnoraRequest = KnoraRequest;
var KnoraProperty = (function () {
    function KnoraProperty(propertyId, compop, searchval) {
        this.propertyId = propertyId;
        this.compop = compop;
        this.searchval = searchval;
        this._propertyId = propertyId;
        this._compop = compop;
        this._searchval = searchval;
    }
    KnoraProperty.prototype.toString = function () {
        return 'property_id=' + encodeURIComponent(this._propertyId) +
            '&compop=' + encodeURIComponent(this._compop) +
            '&searchval=' + encodeURIComponent(this._searchval);
    };
    return KnoraProperty;
}());
exports.KnoraProperty = KnoraProperty;
var FulltextSearch = (function (_super) {
    __extends(FulltextSearch, _super);
    function FulltextSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._searchstring = '';
        _this._searchtype = 'fulltext';
        _this._filterByRestype = '';
        _this._filterByProject = '';
        _this._showNRows = 0;
        _this._startAt = 0;
        return _this;
    }
    Object.defineProperty(FulltextSearch.prototype, "searchstring", {
        set: function (v) {
            this._searchstring = v;
        },
        enumerable: true,
        configurable: true
    });
    FulltextSearch.prototype.toString = function () {
        return this._host + this._searchstring +
            '?searchtype=' + this._searchtype +
            (this._filterByRestype.length > 0 ? '&filter_by_restype=' + encodeURIComponent(this._filterByRestype) : '') +
            (this._filterByProject.length > 0 ? '&filter_by_project=' + encodeURIComponent(this._filterByProject) : '') +
            (this._showNRows > 0 ? '&show_nrows=' + encodeURIComponent(this._showNRows.toString()) : '') +
            (this._startAt > 0 ? '&start_at=' + encodeURIComponent(this._startAt.toString()) : '');
    };
    return FulltextSearch;
}(KnoraRequest));
exports.FulltextSearch = FulltextSearch;
var ExtendedSearch = (function (_super) {
    __extends(ExtendedSearch, _super);
    function ExtendedSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._searchtype = 'extended';
        _this._filterByRestype = '';
        _this._filterByProject = '';
        _this._filterByOwner = '';
        _this._property = [];
        _this._showNRows = 0;
        _this._startAt = 0;
        return _this;
    }
    Object.defineProperty(ExtendedSearch.prototype, "filterByOwner", {
        set: function (v) {
            this._filterByOwner = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedSearch.prototype, "property", {
        set: function (v) {
            this._property.push(v);
        },
        enumerable: true,
        configurable: true
    });
    ExtendedSearch.prototype.toString = function () {
        var propString = '';
        if (this._property.length > 0) {
            for (var _i = 0, _a = this._property; _i < _a.length; _i++) {
                var e = _a[_i];
                propString += '&';
                propString += e.toString();
            }
        }
        return this._host +
            '?searchtype=' + this._searchtype +
            (this._filterByRestype.length > 0 ? '&filter_by_restype=' + encodeURIComponent(this._filterByRestype) : '') +
            (this._filterByProject.length > 0 ? '&filter_by_project=' + encodeURIComponent(this._filterByProject) : '') +
            (this._filterByOwner.length > 0 ? '&filter_by_owner=' + encodeURIComponent(this._filterByOwner) : '') +
            propString +
            (this._showNRows > 0 ? '&show_nrows=' + encodeURIComponent(this._showNRows.toString()) : '') +
            (this._startAt > 0 ? '&start_at=' + encodeURIComponent(this._startAt.toString()) : '');
    };
    return ExtendedSearch;
}(KnoraRequest));
exports.ExtendedSearch = ExtendedSearch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXRpbGl0aWVzL2tub3JhLWFwaS1wYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBUzlDO0lBQUE7UUFDWSxVQUFLLEdBQUcsbUJBQU0sQ0FBQyxHQUFHLENBQUM7SUErQi9CLENBQUM7SUFuQkMsc0JBQUkseUNBQWU7YUFBbkIsVUFBb0IsQ0FBUztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQWU7YUFBbkIsVUFBb0IsQ0FBUztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQVM7YUFBYixVQUFjLENBQVM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBTzthQUFYLFVBQVksQ0FBUztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFJO2FBQVIsVUFBUyxDQUFTO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBQ0gsbUJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENxQixvQ0FBWTtBQXFDbEM7SUFnQkUsdUJBQXFCLFVBQWtCLEVBQVcsTUFBYyxFQUFXLFNBQWlCO1FBQXZFLGVBQVUsR0FBVixVQUFVLENBQVE7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUMxRixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBVk0sZ0NBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxRCxVQUFVLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFRSCxvQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksc0NBQWE7QUEyQjFCO0lBQW9DLGtDQUFZO0lBQWhEO1FBQUEscUVBd0JDO1FBbkJXLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGlCQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUFjakMsQ0FBQztJQXZCQyxzQkFBSSx3Q0FBWTthQUFoQixVQUFpQixDQUFTO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBYU0saUNBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhO1lBQ3BDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNqQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVGLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsWUFBWSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQXhCQSxBQXdCQyxDQXhCbUMsWUFBWSxHQXdCL0M7QUF4Qlksd0NBQWM7QUE2QjNCO0lBQW9DLGtDQUFZO0lBQWhEO1FBQUEscUVBd0NDO1FBOUJXLGlCQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsZUFBUyxHQUF5QixFQUFFLENBQUM7UUFDckMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUF3QmpDLENBQUM7SUF0Q0Msc0JBQUkseUNBQWE7YUFBakIsVUFBa0IsQ0FBUztZQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFRO2FBQVosVUFBYSxDQUFnQjtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQWNNLGlDQUFRLEdBQWY7UUFDRSxJQUFJLFVBQVUsR0FBVyxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsQ0FBVSxVQUFjLEVBQWQsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjO2dCQUF2QixJQUFJLENBQUMsU0FBQTtnQkFDUixVQUFVLElBQUksR0FBRyxDQUFDO2dCQUNsQixVQUFVLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNmLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNqQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3JHLFVBQVU7WUFDVixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVGLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsWUFBWSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUgscUJBQUM7QUFBRCxDQXhDQSxBQXdDQyxDQXhDbUMsWUFBWSxHQXdDL0M7QUF4Q1ksd0NBQWMiLCJmaWxlIjoiYXBwL3NoYXJlZC91dGlsaXRpZXMva25vcmEtYXBpLXBhcmFtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9lbnYuY29uZmlnJztcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IFNlYmFzdGlhbiBTY2jDvHBiYWNoIChzZWJhc3RpYW4uc2NodWVwYmFjaEB1bmliYXMuY2gpIG9uIDcvMTEvMTcuXG4gKi9cblxuLyoqXG4gKiBCYXNlIGFic3RyYWN0IGNsYXNzIGZvciBjb25maWd1cmluZyBhIHJlcXVlc3QgdG8gS25vcmEgQVBJXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBLbm9yYVJlcXVlc3Qge1xuICBwcm90ZWN0ZWQgX2hvc3QgPSBDb25maWcuQVBJO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3NlYXJjaHR5cGU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9maWx0ZXJCeVJlc3R5cGU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9maWx0ZXJCeVByb2plY3Q6IHN0cmluZztcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9zaG93TlJvd3M6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9zdGFydEF0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlcmlhbGlzZXMgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xuXG4gIHNldCBmaWx0ZXJCeVJlc3R5cGUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsdGVyQnlSZXN0eXBlID0gdjtcbiAgfVxuXG4gIHNldCBmaWx0ZXJCeVByb2plY3Qodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsdGVyQnlQcm9qZWN0ID0gdjtcbiAgfVxuXG4gIHNldCBzaG93TlJvd3ModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2hvd05Sb3dzID0gdjtcbiAgfVxuXG4gIHNldCBzdGFydEF0KHY6IG51bWJlcikge1xuICAgIHRoaXMuX3N0YXJ0QXQgPSB2O1xuICB9XG5cbiAgc2V0IGhvc3Qodjogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdCA9IHY7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgZm9yIGRlZmluaW5nIGEgcHJvcGVydHkgdHJpcGxlIGFzIHJlcXVlc3RlZCBieSBLbm9yYSBBUElcbiAqL1xuZXhwb3J0IGNsYXNzIEtub3JhUHJvcGVydHkge1xuXG4gIHByaXZhdGUgX3Byb3BlcnR5SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tcG9wOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NlYXJjaHZhbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXJpYWxpc2VzIHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEZvcm1hdHRlZCBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ3Byb3BlcnR5X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fcHJvcGVydHlJZCkgK1xuICAgICAgJyZjb21wb3A9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9jb21wb3ApICtcbiAgICAgICcmc2VhcmNodmFsPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fc2VhcmNodmFsKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHByb3BlcnR5SWQ6IHN0cmluZywgcmVhZG9ubHkgY29tcG9wOiBzdHJpbmcsIHJlYWRvbmx5IHNlYXJjaHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvcGVydHlJZCA9IHByb3BlcnR5SWQ7XG4gICAgdGhpcy5fY29tcG9wID0gY29tcG9wO1xuICAgIHRoaXMuX3NlYXJjaHZhbCA9IHNlYXJjaHZhbDtcbiAgfVxuXG59XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIGZvciBjb25maWd1cmluZyBhIGZ1bGx0ZXh0IHNlYXJjaCByZXF1ZXN0IHRvIEtub3JhIEFQSVxuICovXG5leHBvcnQgY2xhc3MgRnVsbHRleHRTZWFyY2ggZXh0ZW5kcyBLbm9yYVJlcXVlc3Qge1xuICBzZXQgc2VhcmNoc3RyaW5nKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaHN0cmluZyA9IHY7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3NlYXJjaHN0cmluZzogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBfc2VhcmNodHlwZSA9ICdmdWxsdGV4dCc7XG4gIHByb3RlY3RlZCBfZmlsdGVyQnlSZXN0eXBlOiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIF9maWx0ZXJCeVByb2plY3Q6IHN0cmluZyA9ICcnO1xuICBwcm90ZWN0ZWQgX3Nob3dOUm93czogbnVtYmVyID0gMDtcbiAgcHJvdGVjdGVkIF9zdGFydEF0OiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBTZXJpYWxpc2VzIHJlcXVlc3RcbiAgICogQHJldHVybnMge3N0cmluZ30gRm9ybWF0dGVkIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0ICsgdGhpcy5fc2VhcmNoc3RyaW5nICtcbiAgICAgICc/c2VhcmNodHlwZT0nICsgdGhpcy5fc2VhcmNodHlwZSArXG4gICAgICAodGhpcy5fZmlsdGVyQnlSZXN0eXBlLmxlbmd0aCA+IDAgPyAnJmZpbHRlcl9ieV9yZXN0eXBlPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fZmlsdGVyQnlSZXN0eXBlKSA6ICcnKSArXG4gICAgICAodGhpcy5fZmlsdGVyQnlQcm9qZWN0Lmxlbmd0aCA+IDAgPyAnJmZpbHRlcl9ieV9wcm9qZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fZmlsdGVyQnlQcm9qZWN0KSA6ICcnKSArXG4gICAgICAodGhpcy5fc2hvd05Sb3dzID4gMCA/ICcmc2hvd19ucm93cz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX3Nob3dOUm93cy50b1N0cmluZygpKSA6ICcnKSArXG4gICAgICAodGhpcy5fc3RhcnRBdCA+IDAgPyAnJnN0YXJ0X2F0PScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fc3RhcnRBdC50b1N0cmluZygpKSA6ICcnKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBjbGFzcyBjb25maWd1cmluZyBhbiBleHRlbmRlZCBzZWFyY2ggcmVxdWVzdCB0byBLbm9yYSBBUEkuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRlbmRlZFNlYXJjaCBleHRlbmRzIEtub3JhUmVxdWVzdCB7XG5cbiAgc2V0IGZpbHRlckJ5T3duZXIodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsdGVyQnlPd25lciA9IHY7XG4gIH1cblxuICBzZXQgcHJvcGVydHkodjogS25vcmFQcm9wZXJ0eSkge1xuICAgIHRoaXMuX3Byb3BlcnR5LnB1c2godik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3NlYXJjaHR5cGUgPSAnZXh0ZW5kZWQnO1xuICBwcm90ZWN0ZWQgX2ZpbHRlckJ5UmVzdHlwZTogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBfZmlsdGVyQnlQcm9qZWN0OiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIF9maWx0ZXJCeU93bmVyOiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIF9wcm9wZXJ0eTogQXJyYXk8S25vcmFQcm9wZXJ0eT4gPSBbXTtcbiAgcHJvdGVjdGVkIF9zaG93TlJvd3M6IG51bWJlciA9IDA7XG4gIHByb3RlY3RlZCBfc3RhcnRBdDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogU2VyaWFsaXNlcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEZvcm1hdHRlZCBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICBsZXQgcHJvcFN0cmluZzogc3RyaW5nID0gJyc7XG4gICAgaWYgKHRoaXMuX3Byb3BlcnR5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGUgb2YgdGhpcy5fcHJvcGVydHkpIHtcbiAgICAgICAgcHJvcFN0cmluZyArPSAnJic7XG4gICAgICAgIHByb3BTdHJpbmcgKz0gZS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faG9zdCArXG4gICAgICAnP3NlYXJjaHR5cGU9JyArIHRoaXMuX3NlYXJjaHR5cGUgK1xuICAgICAgKHRoaXMuX2ZpbHRlckJ5UmVzdHlwZS5sZW5ndGggPiAwID8gJyZmaWx0ZXJfYnlfcmVzdHlwZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX2ZpbHRlckJ5UmVzdHlwZSkgOiAnJykgK1xuICAgICAgKHRoaXMuX2ZpbHRlckJ5UHJvamVjdC5sZW5ndGggPiAwID8gJyZmaWx0ZXJfYnlfcHJvamVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX2ZpbHRlckJ5UHJvamVjdCkgOiAnJykgK1xuICAgICAgKHRoaXMuX2ZpbHRlckJ5T3duZXIubGVuZ3RoID4gMCA/ICcmZmlsdGVyX2J5X293bmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fZmlsdGVyQnlPd25lcikgOiAnJykgK1xuICAgICAgcHJvcFN0cmluZyArXG4gICAgICAodGhpcy5fc2hvd05Sb3dzID4gMCA/ICcmc2hvd19ucm93cz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX3Nob3dOUm93cy50b1N0cmluZygpKSA6ICcnKSArXG4gICAgICAodGhpcy5fc3RhcnRBdCA+IDAgPyAnJnN0YXJ0X2F0PScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fc3RhcnRBdC50b1N0cmluZygpKSA6ICcnKTtcbiAgfVxuXG59XG4iXX0=
