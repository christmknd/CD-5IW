import { HttpService } from 'nestjs-http-promise';
import Joke from './joke';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getJoke(): Promise<Joke>;
    getHello(): string;
}
