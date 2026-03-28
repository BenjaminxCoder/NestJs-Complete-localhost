import { StreamGeneratedService } from './stream-generated.service';
export declare class StreamGeneratedController {
    private readonly streamService;
    constructor(streamService: StreamGeneratedService);
    stream(): import("rxjs").Observable<{
        data: any;
    }>;
}
