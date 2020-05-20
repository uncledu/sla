"use strict";
exports.__esModule = true;
var sla_1 = require("./sla");
var sla = new sla_1.SLA();
if (process.argv) {
    var percentage = Number(process.argv[2]);
    if (isNaN(percentage)) {
        // tslint-disable-next-line
        process.stderr.write("invalid input");
    }
    else {
        // tslint-disable-next-line
        process.stdout.write(sla.echo(percentage).toString());
    }
}
