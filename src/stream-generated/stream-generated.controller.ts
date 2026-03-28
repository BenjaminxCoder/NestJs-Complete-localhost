import { Controller, Sse } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';

@Controller()
export class StreamGeneratedController {

  @Sse('stream')
  stream() {
    return interval(2000).pipe(
      map(count => ({
        data: {
          sequence: count + 1,
          message: `You are event ${count + 1}`,
          timestamp: new Date().toISOString(),
          status: 'processing'
        }
      }))
    );
  }
}
