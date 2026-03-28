import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TemporalEvent {
  sequence: number;
  message: string;
  timestamp: string;
  status: string;
}

export class TemporalSource {

  getStream(): Observable<TemporalEvent> {
    return interval(2000).pipe(
      map(count => ({
        sequence: count + 1,
        message: `You are event ${count + 1}`,
        timestamp: new Date().toISOString(),
        status: count % 3 === 0 ? 'complete' : 'processing'
      }))
    );
  }
}
