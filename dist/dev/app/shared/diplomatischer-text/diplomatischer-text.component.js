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
var DimplomatischerTextComponent = (function () {
    function DimplomatischerTextComponent() {
        this.gewaehlteSchichtChange = new core_1.EventEmitter();
        this.farbeNeutral = '#6e6e6e';
        this.farbeMarkierung = '#d00501';
        this.farbeEinfuegung = '#007FFF';
        this.farbeZeilennummer = '#FF0000';
        this.farbeLetzte = '#F00000';
        this.farbeErste = '#800000';
        this.textIsMovable = false;
        this.text = '<div class="transkription"><p>Baum</p><p><span class="einfuegung">Durch die Zweige </span><span class="einfuegung_gestr">schaut es</span><br /><span class="streichung grundschicht">Durch die Zweige</span> 				</p> 				<span class="weiss">schauten die Augen</span><span class="einfuegung_gestr">hervor</span><br /> 				<span class="streichung"><span class="grundschicht">schau<span class="ueberschrieben">en</span></span><span class="einfuegung_gestr ersetzung">t </span><span class="grundschicht">die Augen <span class="ueberschrieben">hervor</span></span> </span><span class="ersetzung streichung einfuegung_gestr">voller</span><span class="grundschicht">,</span><br /><span class="weiss">schauten die</span><span class="streichung einfuegung">Trauer hervor.</span> 				<p class="grundschicht"> 					<span class="streichung">voller Trauer,</span> 				</p> 				<p> 					<span class="einfuegung">schaut es hervor und senkt</span><br /><span class="streichung grundschicht">aber das Licht</span> 				</p> 				<span class="streichung grundschicht">auf den Blättern</span>&nbsp;<span class="einfuegung_gestr">schwarz und tr</span><br /><span class="weiss">auf den Blät&nbsp; tern </span><span class="einfuegung">langsam die Lider,</span> 				<p> 					<span class="streichung grundschicht">ist wie ein Lächeln.</span><span class="einfuegung"> schwarz,&nbsp;voller&nbsp;Trauer</span> 				</p> 				<p> 					<span class="streichung">Durch die Zweige schaut es,&nbsp;</span><span class="einfuegung_gestr">die Wimpern<br /></span><span class="weiss">Durch die Zweige schaut es,&nbsp;</span><span class="einfuegung_gestr">hervor</span> 				</p> 				<p> 					<span class="streichung">die Wimp </span> 				</p> 				<p> 					<span class="streichung">[langsam senkend hervor </span> 				</p> 				<p> 					<span class="streichung">schwarz hervor und senkt</span> 				</p> 				<p> 					<span class="streichung">langsam die]</span> 				</p> 				<p> 					<span class="streichung">hervor und senkt</span>&nbsp;<span class="streichung">schaut es </span> 				</p> 				<p> 					<span class="streichung grundschicht">schwarz hervor und senkt</span> 				</p> 				<p> 					<span class="streichung grundschicht">langsam die Wimpern.</span><br /><span class="weiss">langsam voller Trauer die</span><span class="einfuegung_gestr">Lider</span>.<br /><span class="weiss">langsam</span><span class="streichung">voller Trauer die Wimpern</span>. // 				</p> 			</div>';
    }
    DimplomatischerTextComponent.prototype.ngOnInit = function () {
        this.updateSchichten();
    };
    DimplomatischerTextComponent.prototype.ngDoCheck = function () {
        this.updateSchichten();
    };
    DimplomatischerTextComponent.prototype.updateSchichten = function () {
        switch (this.gewaehlteSchicht) {
            case 'schicht0':
                this.zeigeSchicht0();
                break;
            case 'schicht1':
                this.zeigeSchicht1();
                break;
            case 'schicht2':
                this.zeigeSchicht2();
                break;
            case 'schicht3':
                this.zeigeSchicht3();
                break;
            default:
                this.zeigeSchicht0();
                break;
        }
    };
    DimplomatischerTextComponent.prototype.zeigeSchicht0 = function () {
        for (var _i = 0, _a = document.getElementsByClassName('transkription'); _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.style.color = this.farbeNeutral;
            for (var _b = 0, _c = entry.getElementsByTagName('*'); _b < _c.length; _b++) {
                var child = _c[_b];
                child.style.color = this.farbeNeutral;
            }
        }
        for (var _d = 0, _e = document.getElementsByClassName('zeile'); _d < _e.length; _d++) {
            var entry = _e[_d];
            entry.style.color = this.farbeZeilennummer;
        }
        for (var _f = 0, _g = document.getElementsByClassName('markierung'); _f < _g.length; _f++) {
            var entry = _g[_f];
            entry.style.color = this.farbeMarkierung;
        }
        for (var _h = 0, _j = document.getElementsByClassName('herausgeber'); _h < _j.length; _h++) {
            var entry = _j[_h];
            entry.style.color = this.farbeMarkierung;
        }
        for (var _k = 0, _l = document.getElementsByClassName('streichung_typo'); _k < _l.length; _k++) {
            var entry = _l[_k];
            entry.style.color = this.farbeNeutral;
            for (var _m = 0, _o = entry.getElementsByTagName('*'); _m < _o.length; _m++) {
                var child = _o[_m];
                child.style.color = this.farbeNeutral;
            }
        }
    };
    DimplomatischerTextComponent.prototype.zeigeSchicht1 = function () {
        for (var _i = 0, _a = document.getElementsByClassName('transkription'); _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.style.color = this.farbeNeutral;
            for (var _b = 0, _c = entry.getElementsByTagName('*'); _b < _c.length; _b++) {
                var child = _c[_b];
                child.style.color = this.farbeNeutral;
            }
        }
        for (var _d = 0, _e = document.getElementsByClassName('grundschicht'); _d < _e.length; _d++) {
            var entry = _e[_d];
            entry.setAttribute('style', 'font-weight:normal');
            entry.style.color = this.farbeErste;
            for (var _f = 0, _g = entry.getElementsByTagName('*'); _f < _g.length; _f++) {
                var child = _g[_f];
                child.setAttribute('style', 'font-weight:normal');
                child.style.color = this.farbeErste;
            }
        }
    };
    DimplomatischerTextComponent.prototype.zeigeSchicht2 = function () {
        for (var _i = 0, _a = document.getElementsByClassName('transkription'); _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.style.color = this.farbeNeutral;
            for (var _b = 0, _c = entry.getElementsByTagName('*'); _b < _c.length; _b++) {
                var child = _c[_b];
                child.style.color = this.farbeNeutral;
            }
        }
        for (var _d = 0, _e = document.getElementsByClassName('einfuegung'); _d < _e.length; _d++) {
            var entry = _e[_d];
            entry.style.color = this.farbeEinfuegung;
            for (var _f = 0, _g = entry.getElementsByTagName('*'); _f < _g.length; _f++) {
                var child = _g[_f];
                child.style.color = this.farbeEinfuegung;
            }
        }
        for (var _h = 0, _j = document.getElementsByClassName('einfuegung_typo'); _h < _j.length; _h++) {
            var entry = _j[_h];
            entry.style.color = this.farbeEinfuegung;
            for (var _k = 0, _l = entry.getElementsByTagName('*'); _k < _l.length; _k++) {
                var child = _l[_k];
                child.style.color = this.farbeEinfuegung;
            }
        }
        for (var _m = 0, _o = document.getElementsByClassName('einfuegung_gestr_typo'); _m < _o.length; _m++) {
            var entry = _o[_m];
            entry.style.color = this.farbeEinfuegung;
            for (var _p = 0, _q = entry.getElementsByTagName('*'); _p < _q.length; _p++) {
                var child = _q[_p];
                child.style.color = this.farbeEinfuegung;
            }
        }
        for (var _r = 0, _s = document.getElementsByClassName('streichung_typo'); _r < _s.length; _r++) {
            var entry = _s[_r];
            entry.style.color = this.farbeNeutral;
            for (var _t = 0, _u = entry.getElementsByTagName('*'); _t < _u.length; _t++) {
                var child = _u[_t];
                child.style.color = this.farbeNeutral;
            }
        }
        for (var _v = 0, _w = document.getElementsByClassName('einfuegung_gestr'); _v < _w.length; _v++) {
            var entry = _w[_v];
            entry.style.color = this.farbeEinfuegung;
            for (var _x = 0, _y = entry.getElementsByTagName('*'); _x < _y.length; _x++) {
                var child = _y[_x];
                child.style.color = this.farbeEinfuegung;
            }
        }
        for (var _z = 0, _0 = document.getElementsByClassName('markierung'); _z < _0.length; _z++) {
            var entry = _0[_z];
            entry.style.color = this.farbeMarkierung;
        }
        for (var _1 = 0, _2 = document.getElementsByClassName('zeile'); _1 < _2.length; _1++) {
            var entry = _2[_1];
            entry.style.color = this.farbeZeilennummer;
        }
    };
    DimplomatischerTextComponent.prototype.zeigeSchicht3 = function () {
        for (var _i = 0, _a = document.getElementsByClassName('transkription'); _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.style.color = this.farbeLetzte;
            for (var _b = 0, _c = entry.getElementsByTagName('*'); _b < _c.length; _b++) {
                var child = _c[_b];
                child.style.color = this.farbeLetzte;
            }
        }
        for (var _d = 0, _e = document.getElementsByClassName('einfuegung_gestr'); _d < _e.length; _d++) {
            var entry = _e[_d];
            entry.style.color = this.farbeNeutral;
            for (var _f = 0, _g = entry.getElementsByTagName('*'); _f < _g.length; _f++) {
                var child = _g[_f];
                child.style.color = this.farbeNeutral;
            }
        }
        for (var _h = 0, _j = document.getElementsByClassName('einfuegung_gestr_typo'); _h < _j.length; _h++) {
            var entry = _j[_h];
            entry.style.color = this.farbeNeutral;
            for (var _k = 0, _l = entry.getElementsByTagName('*'); _k < _l.length; _k++) {
                var child = _l[_k];
                child.style.color = this.farbeNeutral;
            }
        }
        for (var _m = 0, _o = document.getElementsByClassName('unsicher_gestr'); _m < _o.length; _m++) {
            var entry = _o[_m];
            entry.style.color = this.farbeNeutral;
        }
        for (var _p = 0, _q = document.getElementsByClassName('streichung'); _p < _q.length; _p++) {
            var entry = _q[_p];
            entry.style.color = this.farbeNeutral;
            for (var _r = 0, _s = entry.getElementsByTagName('*'); _r < _s.length; _r++) {
                var child = _s[_r];
                child.style.color = this.farbeNeutral;
            }
        }
        for (var _t = 0, _u = document.getElementsByClassName('streichung_typo'); _t < _u.length; _t++) {
            var entry = _u[_t];
            entry.style.color = this.farbeNeutral;
            for (var _v = 0, _w = entry.getElementsByTagName('*'); _v < _w.length; _v++) {
                var child = _w[_v];
                child.style.color = this.farbeNeutral;
            }
        }
        for (var _x = 0, _y = document.getElementsByClassName('ueberschrieben'); _x < _y.length; _x++) {
            var entry = _y[_x];
            entry.style.color = this.farbeNeutral;
        }
        for (var _z = 0, _0 = document.getElementsByClassName('streichung_doppel'); _z < _0.length; _z++) {
            var entry = _0[_z];
            entry.style.color = this.farbeNeutral;
        }
        for (var _1 = 0, _2 = document.getElementsByClassName('blocktilgung'); _1 < _2.length; _1++) {
            var entry = _2[_1];
            entry.style.color = this.farbeNeutral;
            for (var _3 = 0, _4 = entry.getElementsByTagName('*'); _3 < _4.length; _3++) {
                var child = _4[_3];
                child.style.color = this.farbeNeutral;
            }
        }
    };
    return DimplomatischerTextComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DimplomatischerTextComponent.prototype, "page", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DimplomatischerTextComponent.prototype, "gewaehlteSchicht", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DimplomatischerTextComponent.prototype, "gewaehlteSchichtChange", void 0);
DimplomatischerTextComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-diplomatischer-text',
        templateUrl: 'diplomatischer-text.component.html',
        styleUrls: ['diplomatischer-text.component.css']
    })
], DimplomatischerTextComponent);
exports.DimplomatischerTextComponent = DimplomatischerTextComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGlwbG9tYXRpc2NoZXItdGV4dC9kaXBsb21hdGlzY2hlci10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLHNDQUF3RjtBQVF4RixJQUFhLDRCQUE0QjtJQU56QztRQVVZLDJCQUFzQixHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUdwRixpQkFBWSxHQUFHLFNBQVMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUM1QixvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUV2QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUcvQixTQUFJLEdBQVcsbzRFQUFvNEUsQ0FBQztJQTZLdDVFLENBQUM7SUExS0MsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0RBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0RBQWUsR0FBZjtRQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxDQUFDO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxD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LGNBQStCLEVBQS9CLElBQStCO2dCQUE1QyxJQUFJLEtBQUssU0FBQTtnQkFDWixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsbUNBQUM7QUFBRCxDQTlMQSxBQThMQyxJQUFBO0FBNUxVO0lBQVIsWUFBSyxFQUFFOzswREFBVztBQUNWO0lBQVIsWUFBSyxFQUFFOztzRUFBMEI7QUFDeEI7SUFBVCxhQUFNLEVBQUU7OEJBQXlCLG1CQUFZOzRFQUFzQztBQUp6RSw0QkFBNEI7SUFOeEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLENBQUUsbUNBQW1DLENBQUU7S0FDbkQsQ0FBQztHQUNXLDRCQUE0QixDQThMeEM7QUE5TFksb0VBQTRCIiwiZmlsZSI6ImFwcC9zaGFyZWQvZGlwbG9tYXRpc2NoZXItdGV4dC9kaXBsb21hdGlzY2hlci10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBSZXRvIEJhdW1nYXJ0bmVyIChyZmJhdW1nYXJ0bmVyKSBvbiAwNS4wNy4xNy5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIERvQ2hlY2ssIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JhZS1kaXBsb21hdGlzY2hlci10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICdkaXBsb21hdGlzY2hlci10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICdkaXBsb21hdGlzY2hlci10ZXh0LmNvbXBvbmVudC5jc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgRGltcGxvbWF0aXNjaGVyVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XG5cbiAgQElucHV0KCkgcGFnZTogYW55O1xuICBASW5wdXQoKSBnZXdhZWhsdGVTY2hpY2h0OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBnZXdhZWhsdGVTY2hpY2h0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cbiAgZmFyYmVOZXV0cmFsID0gJyM2ZTZlNmUnO1xuICBmYXJiZU1hcmtpZXJ1bmcgPSAnI2QwMDUwMSc7XG4gIGZhcmJlRWluZnVlZ3VuZyA9ICcjMDA3RkZGJztcbiAgZmFyYmVaZWlsZW5udW1tZXIgPSAnI0ZGMDAwMCc7XG4gIGZhcmJlTGV0enRlID0gJyNGMDAwMDAnO1xuICBmYXJiZUVyc3RlID0gJyM4MDAwMDAnO1xuXG4gIHRleHRJc01vdmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gVE9ETzogaGVyYXVzZmluZGVuIHdpZSBkYXMgZ2VodFxuXG4gIHRleHQ6IHN0cmluZyA9ICc8ZGl2IGNsYXNzPVwidHJhbnNrcmlwdGlvblwiPjxwPkJhdW08L3A+PHA+PHNwYW4gY2xhc3M9XCJlaW5mdWVndW5nXCI+RHVyY2ggZGllIFp3ZWlnZSA8L3NwYW4+PHNwYW4gY2xhc3M9XCJlaW5mdWVndW5nX2dlc3RyXCI+c2NoYXV0IGVzPC9zcGFuPjxiciAvPjxzcGFuIGNsYXNzPVwic3RyZWljaHVuZyBncnVuZHNjaGljaHRcIj5EdXJjaCBkaWUgWndlaWdlPC9zcGFuPiBcdFx0XHRcdDwvcD4gXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIndlaXNzXCI+c2NoYXV0ZW4gZGllIEF1Z2VuPC9zcGFuPjxzcGFuIGNsYXNzPVwiZWluZnVlZ3VuZ19nZXN0clwiPmhlcnZvcjwvc3Bhbj48YnIgLz4gXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cmVpY2h1bmdcIj48c3BhbiBjbGFzcz1cImdydW5kc2NoaWNodFwiPnNjaGF1PHNwYW4gY2xhc3M9XCJ1ZWJlcnNjaHJpZWJlblwiPmVuPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cImVpbmZ1ZWd1bmdfZ2VzdHIgZXJzZXR6dW5nXCI+dCA8L3NwYW4+PHNwYW4gY2xhc3M9XCJncnVuZHNjaGljaHRcIj5kaWUgQXVnZW4gPHNwYW4gY2xhc3M9XCJ1ZWJlcnNjaHJpZWJlblwiPmhlcnZvcjwvc3Bhbj48L3NwYW4+IDwvc3Bhbj48c3BhbiBjbGFzcz1cImVyc2V0enVuZyBzdHJlaWNodW5nIGVpbmZ1ZWd1bmdfZ2VzdHJcIj52b2xsZXI8L3NwYW4+PHNwYW4gY2xhc3M9XCJncnVuZHNjaGljaHRcIj4sPC9zcGFuPjxiciAvPjxzcGFuIGNsYXNzPVwid2Vpc3NcIj5zY2hhdXRlbiBkaWU8L3NwYW4+PHNwYW4gY2xhc3M9XCJzdHJlaWNodW5nIGVpbmZ1ZWd1bmdcIj5UcmF1ZXIgaGVydm9yLjwvc3Bhbj4gXHRcdFx0XHQ8cCBjbGFzcz1cImdydW5kc2NoaWNodFwiPiBcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJlaWNodW5nXCI+dm9sbGVyIFRyYXVlciw8L3NwYW4+IFx0XHRcdFx0PC9wPiBcdFx0XHRcdDxwPiBcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJlaW5mdWVndW5nXCI+c2NoYXV0IGVzIGhlcnZvciB1bmQgc2Vua3Q8L3NwYW4+PGJyIC8+PHNwYW4gY2xhc3M9XCJzdHJlaWNodW5nIGdydW5kc2NoaWNodFwiPmFiZXIgZGFzIExpY2h0PC9zcGFuPiBcdFx0XHRcdDwvcD4gXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cmVpY2h1bmcgZ3J1bmRzY2hpY2h0XCI+YXVmIGRlbiBCbMOkdHRlcm48L3NwYW4+Jm5ic3A7PHNwYW4gY2xhc3M9XCJlaW5mdWVndW5nX2dlc3RyXCI+c2Nod2FyeiB1bmQgdHI8L3NwYW4+PGJyIC8+PHNwYW4gY2xhc3M9XCJ3ZWlzc1wiPmF1ZiBkZW4gQmzDpHQmbmJzcDsgdGVybiA8L3NwYW4+PHNwYW4gY2xhc3M9XCJlaW5mdWVndW5nXCI+bGFuZ3NhbSBkaWUgTGlkZXIsPC9zcGFuPiBcdFx0XHRcdDxwPiBcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJlaWNodW5nIGdydW5kc2NoaWNodFwiPmlzdCB3aWUgZWluIEzDpGNoZWxuLjwvc3Bhbj48c3BhbiBjbGFzcz1cImVpbmZ1ZWd1bmdcIj4gc2Nod2FyeiwmbmJzcDt2b2xsZXImbmJzcDtUcmF1ZXI8L3NwYW4+IFx0XHRcdFx0PC9wPiBcdFx0XHRcdDxwPiBcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJlaWNodW5nXCI+RHVyY2ggZGllIFp3ZWlnZSBzY2hhdXQgZXMsJm5ic3A7PC9zcGFuPjxzcGFuIGNsYXNzPVwiZWluZnVlZ3VuZ19nZXN0clwiPmRpZSBXaW1wZXJuPGJyIC8+PC9zcGFuPjxzcGFuIGNsYXNzPVwid2Vpc3NcIj5EdXJjaCBkaWUgWndlaWdlIHNjaGF1dCBlcywmbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJlaW5mdWVndW5nX2dlc3RyXCI+aGVydm9yPC9zcGFuPiBcdFx0XHRcdDwvcD4gXHRcdFx0XHQ8cD4gXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic3RyZWljaHVuZ1wiPmRpZSBXaW1wIDwvc3Bhbj4gXHRcdFx0XHQ8L3A+IFx0XHRcdFx0PHA+IFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cmVpY2h1bmdcIj5bbGFuZ3NhbSBzZW5rZW5kIGhlcnZvciA8L3NwYW4+IFx0XHRcdFx0PC9wPiBcdFx0XHRcdDxwPiBcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJlaWNodW5nXCI+c2Nod2FyeiBoZXJ2b3IgdW5kIHNlbmt0PC9zcGFuPiBcdFx0XHRcdDwvcD4gXHRcdFx0XHQ8cD4gXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic3RyZWljaHVuZ1wiPmxhbmdzYW0gZGllXTwvc3Bhbj4gXHRcdFx0XHQ8L3A+IFx0XHRcdFx0PHA+IFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cmVpY2h1bmdcIj5oZXJ2b3IgdW5kIHNlbmt0PC9zcGFuPiZuYnNwOzxzcGFuIGNsYXNzPVwic3RyZWljaHVuZ1wiPnNjaGF1dCBlcyA8L3NwYW4+IFx0XHRcdFx0PC9wPiBcdFx0XHRcdDxwPiBcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJlaWNodW5nIGdydW5kc2NoaWNodFwiPnNjaHdhcnogaGVydm9yIHVuZCBzZW5rdDwvc3Bhbj4gXHRcdFx0XHQ8L3A+IFx0XHRcdFx0PHA+IFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cmVpY2h1bmcgZ3J1bmRzY2hpY2h0XCI+bGFuZ3NhbSBkaWUgV2ltcGVybi48L3NwYW4+PGJyIC8+PHNwYW4gY2xhc3M9XCJ3ZWlzc1wiPmxhbmdzYW0gdm9sbGVyIFRyYXVlciBkaWU8L3NwYW4+PHNwYW4gY2xhc3M9XCJlaW5mdWVndW5nX2dlc3RyXCI+TGlkZXI8L3NwYW4+LjxiciAvPjxzcGFuIGNsYXNzPVwid2Vpc3NcIj5sYW5nc2FtPC9zcGFuPjxzcGFuIGNsYXNzPVwic3RyZWljaHVuZ1wiPnZvbGxlciBUcmF1ZXIgZGllIFdpbXBlcm48L3NwYW4+LiAvLyBcdFx0XHRcdDwvcD4gXHRcdFx0PC9kaXY+Jztcbi8vIFRPRE86IGR5bmFtaXNpZXJlblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlU2NoaWNodGVuKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgdGhpcy51cGRhdGVTY2hpY2h0ZW4oKTtcbiAgfVxuXG4gIHVwZGF0ZVNjaGljaHRlbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuZ2V3YWVobHRlU2NoaWNodCkge1xuICAgICAgY2FzZSAnc2NoaWNodDAnOlxuICAgICAgICB0aGlzLnplaWdlU2NoaWNodDAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY2hpY2h0MSc6XG4gICAgICAgIHRoaXMuemVpZ2VTY2hpY2h0MSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NjaGljaHQyJzpcbiAgICAgICAgdGhpcy56ZWlnZVNjaGljaHQyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2NoaWNodDMnOlxuICAgICAgICB0aGlzLnplaWdlU2NoaWNodDMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnplaWdlU2NoaWNodDAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgemVpZ2VTY2hpY2h0MCgpIHtcbiAgICAvLyBmYWVyYmUgYWxsZXMgaW4gZGVyIEdydW5kZmFyYmUgZWluIGF1c3NlciBaZWlsZW5udW1tZXJuIHVuZCBNYXJraWVydW5nZW5cblxuICAgIGZvciAobGV0IGVudHJ5IG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RyYW5za3JpcHRpb24nKSkge1xuICAgICAgZW50cnkuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGVudHJ5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6ZWlsZScpKSB7IGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZVplaWxlbm51bW1lcjsgfVxuICAgIGZvciAobGV0IGVudHJ5IG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcmtpZXJ1bmcnKSkgeyBlbnRyeS5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVNYXJraWVydW5nOyB9XG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVyYXVzZ2ViZXInKSkgeyBlbnRyeS5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVNYXJraWVydW5nOyB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlaWNodW5nX3R5cG8nKSkge1xuICAgICAgZW50cnkuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGVudHJ5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB6ZWlnZVNjaGljaHQxKCkge1xuICAgIC8vIGZhZXJiZSBhbGxlcyBpbiBkZXIgR3J1bmRmYXJiZSBlaW4gYXVzc2VyIGRpZSBHcnVuZHNjaGljaHRcblxuICAgIGZvciAobGV0IGVudHJ5IG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RyYW5za3JpcHRpb24nKSkge1xuICAgICAgZW50cnkuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGVudHJ5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdncnVuZHNjaGljaHQnKSkge1xuICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXdlaWdodDpub3JtYWwnKTtcbiAgICAgIGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZUVyc3RlO1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZW50cnkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSkge1xuICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0Om5vcm1hbCcpO1xuICAgICAgICBjaGlsZC5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVFcnN0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB6ZWlnZVNjaGljaHQyKCkge1xuICAgIC8vIGZhZXJiZSBhbGxlIEVpbmZ1ZWd1bmdlbiBibGF1IGVpblxuXG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHJhbnNrcmlwdGlvbicpKSB7XG4gICAgICBlbnRyeS5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVOZXV0cmFsO1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZW50cnkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSkge1xuICAgICAgICBjaGlsZC5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVOZXV0cmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGVudHJ5IG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VpbmZ1ZWd1bmcnKSkge1xuICAgICAgZW50cnkuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlRWluZnVlZ3VuZztcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGVudHJ5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlRWluZnVlZ3VuZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlaW5mdWVndW5nX3R5cG8nKSkge1xuICAgICAgZW50cnkuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlRWluZnVlZ3VuZztcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGVudHJ5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlRWluZnVlZ3VuZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlaW5mdWVndW5nX2dlc3RyX3R5cG8nKSkge1xuICAgICAgZW50cnkuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlRWluZnVlZ3VuZztcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGVudHJ5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlRWluZnVlZ3VuZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlaWNodW5nX3R5cG8nKSkge1xuICAgICAgZW50cnkuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGVudHJ5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlaW5mdWVndW5nX2dlc3RyJykpIHtcbiAgICAgIGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZUVpbmZ1ZWd1bmc7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBlbnRyeS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZUVpbmZ1ZWd1bmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFya2llcnVuZycpKSB7IGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU1hcmtpZXJ1bmc7IH1cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6ZWlsZScpKSB7IGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZVplaWxlbm51bW1lcjsgfVxuXG4gIH1cblxuICB6ZWlnZVNjaGljaHQzKCkge1xuICAgIC8vIGZhZXJiZSBhbGxlcywgZGFzIG5pY2h0IGdlc3RyaWNoZW4gd3VyZGUsIGluIGRlciBGYXJiZSBkZXIgRW5mYXNzdW5nIGVpblxuXG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHJhbnNrcmlwdGlvbicpKSB7XG4gICAgICBlbnRyeS5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVMZXR6dGU7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBlbnRyeS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZUxldHp0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlaW5mdWVndW5nX2dlc3RyJykpIHtcbiAgICAgIGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU5ldXRyYWw7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBlbnRyeS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU5ldXRyYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWluZnVlZ3VuZ19nZXN0cl90eXBvJykpIHtcbiAgICAgIGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU5ldXRyYWw7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBlbnRyeS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU5ldXRyYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5zaWNoZXJfZ2VzdHInKSkgeyBlbnRyeS5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVOZXV0cmFsOyB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdHJlaWNodW5nJykpIHtcbiAgICAgIGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU5ldXRyYWw7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBlbnRyeS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU5ldXRyYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWljaHVuZ190eXBvJykpIHtcbiAgICAgIGVudHJ5LnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU5ldXRyYWw7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBlbnRyeS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmNvbG9yID0gdGhpcy5mYXJiZU5ldXRyYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndWViZXJzY2hyaWViZW4nKSkgeyBlbnRyeS5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVOZXV0cmFsOyB9XG4gICAgZm9yIChsZXQgZW50cnkgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RyZWljaHVuZ19kb3BwZWwnKSkgeyBlbnRyeS5zdHlsZS5jb2xvciA9IHRoaXMuZmFyYmVOZXV0cmFsOyB9XG5cbiAgICBmb3IgKGxldCBlbnRyeSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibG9ja3RpbGd1bmcnKSkge1xuICAgICAgZW50cnkuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGVudHJ5LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSB0aGlzLmZhcmJlTmV1dHJhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
