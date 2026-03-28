import { Observable } from 'rxjs';

export class NetworkTemporalSource {

  getStream(): Observable<any> {

    return new Observable(subscriber => {

      const intervalId = setInterval(async () => {

        try {

          const response = await fetch(
            'http://berrywalker.hopto.org/file-generated'   // <- Phase 3 endpoint
          );

          if (!response.ok) {
            throw new Error(`Network error: ${response.status}`);
          }

          const data = await response.json();

          subscriber.next({
            timestamp: new Date().toISOString(),
            source: 'remote-json',
            payload: data
          });

        } catch (error) {
          subscriber.error(error);
        }

      }, 5000);   // 5-second poll

      return () => clearInterval(intervalId);
    });
  }
}
