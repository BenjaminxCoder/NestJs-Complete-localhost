"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkTemporalSource = void 0;
const rxjs_1 = require("rxjs");
class NetworkTemporalSource {
    getStream() {
        return new rxjs_1.Observable(subscriber => {
            const intervalId = setInterval(async () => {
                try {
                    const response = await fetch('http://berrywalker.hopto.org/file-generated');
                    if (!response.ok) {
                        throw new Error(`Network error: ${response.status}`);
                    }
                    const data = await response.json();
                    subscriber.next({
                        timestamp: new Date().toISOString(),
                        source: 'remote-json',
                        payload: data
                    });
                }
                catch (error) {
                    subscriber.error(error);
                }
            }, 5000);
            return () => clearInterval(intervalId);
        });
    }
}
exports.NetworkTemporalSource = NetworkTemporalSource;
//# sourceMappingURL=network-temporal-source.js.map