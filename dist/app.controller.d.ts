import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    apiVersion: string;
    constructor(appService: AppService);
    getJoke(): Promise<{
        joke: import("./joke").default;
        version: string;
    }>;
}
