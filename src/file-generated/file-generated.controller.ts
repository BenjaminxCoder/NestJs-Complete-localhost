import { Controller, Get, Query } from '@nestjs/common';
import { FileGeneratedService } from './file-generated.service';

@Controller('file-generated')
export class FileGeneratedController {
  constructor(private readonly fileGeneratedService: FileGeneratedService) {}

  @Get()
  getFileGenerated(@Query('view') view: string) {
    return this.fileGeneratedService.getShapedProducts(view);
  }
}
