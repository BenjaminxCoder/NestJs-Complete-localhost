import { Observable } from 'rxjs';
export interface TemporalEvent {
    sequence: number;
    message: string;
    timestamp: string;
    status: string;
}
export declare class TemporalSource {
    getStream(): Observable<TemporalEvent>;
}
