import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NetworkTemporalSource } from './domain/network-temporal-source';

@Injectable()
export class StreamGeneratedService {

  private source = new NetworkTemporalSource();

  getCounterStream(): Observable<any> {
    return this.source.getStream();
  }
}
