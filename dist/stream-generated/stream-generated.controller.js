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
exports.StreamGeneratedController = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const stream_generated_service_1 = require("./stream-generated.service");
let StreamGeneratedController = class StreamGeneratedController {
    streamService;
    constructor(streamService) {
        this.streamService = streamService;
    }
    stream() {
        return this.streamService.getCounterStream().pipe((0, operators_1.map)(payload => ({
            data: payload
        })));
    }
};
exports.StreamGeneratedController = StreamGeneratedController;
__decorate([
    (0, common_1.Sse)('stream'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StreamGeneratedController.prototype, "stream", null);
exports.StreamGeneratedController = StreamGeneratedController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [stream_generated_service_1.StreamGeneratedService])
], StreamGeneratedController);
//# sourceMappingURL=stream-generated.controller.js.map