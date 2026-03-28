import { FileGeneratedService } from './file-generated.service';
export declare class FileGeneratedController {
    private readonly fileGeneratedService;
    constructor(fileGeneratedService: FileGeneratedService);
    getFileGenerated(view: string): Promise<any[]>;
}
