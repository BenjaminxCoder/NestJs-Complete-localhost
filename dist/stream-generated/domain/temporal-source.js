"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporalSource = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class TemporalSource {
    getStream() {
        return (0, rxjs_1.interval)(2000).pipe((0, operators_1.map)(count => ({
            sequence: count + 1,
            message: `You are event ${count + 1}`,
            timestamp: new Date().toISOString(),
            status: count % 3 === 0 ? 'complete' : 'processing'
        })));
    }
}
exports.TemporalSource = TemporalSource;
//# sourceMappingURL=temporal-source.js.map