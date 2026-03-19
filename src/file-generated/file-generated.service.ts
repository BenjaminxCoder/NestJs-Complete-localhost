import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { DataShaper } from './domain/data-shaper';

@Injectable()
export class FileGeneratedService {
  async getShapedProducts(view?: string): Promise<any[]> {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const rawData = JSON.parse(fileContents);
    const shaper = new DataShaper();
    return shaper.shape(rawData, view);
  }
}
