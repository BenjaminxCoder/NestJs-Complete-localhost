import { Injectable } from '@nestjs/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StreamGeneratedService {

  getCounterStream() {
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
