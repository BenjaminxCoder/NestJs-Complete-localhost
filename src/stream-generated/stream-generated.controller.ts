import { Controller, Sse } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { StreamGeneratedService } from './stream-generated.service';

@Controller()
export class StreamGeneratedController {

  constructor(
    private readonly streamService: StreamGeneratedService
  ) {}

  @Sse('stream')
  stream() {
    return this.streamService.getCounterStream().pipe(
      map(payload => ({
        data: payload
      }))
    );
  }
}
