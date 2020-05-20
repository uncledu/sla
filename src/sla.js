"use strict";
exports.__esModule = true;
var SLA = /** @class */ (function () {
    function SLA(sla) {
        this.totalTime = 24 * 60 * 365;
        this.sla = sla;
        this.init();
    }
    SLA.prototype.init = function () {
        if (!this.sla) {
            this.echo();
        }
    };
    SLA.prototype.echo = function () {
        return "SLA util, example: sla 99.9\n      available minutes: " + this.count(99.9) + ", unavailable minutes: " + (this
            .totalTime - this.count(99.9)) + "\n    ";
    };
    SLA.prototype.count = function (sla) {
        return (this.totalTime * sla) / 100;
    };
    SLA.prototype.print = function (sla) {
        return "available minutes: " + this.count(99.9) + ", unavailable minutes: " + (this
            .totalTime - this.count(99.9)) + "\n    ";
    };
    return SLA;
}());
exports.SLA = SLA;
