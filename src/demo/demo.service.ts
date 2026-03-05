import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  getData() {
    return { message: "Service Generated, Woo Hoo!" };
  }
}
