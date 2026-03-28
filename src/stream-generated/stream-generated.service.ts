import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TemporalSource, TemporalEvent } from './domain/temporal-source';

@Injectable()
export class StreamGeneratedService {

  private source = new TemporalSource();

  getCounterStream(): Observable<TemporalEvent> {
    return this.source.getStream();
  }
}
