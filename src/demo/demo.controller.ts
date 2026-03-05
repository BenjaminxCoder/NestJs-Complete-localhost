import { Controller, Get } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  @Get()
  findAll() {
    return { message: "Berry Walker Jr is Awesome!" };
  }
}
