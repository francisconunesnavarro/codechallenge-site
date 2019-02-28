export class ConfigService {
    private urlService: string;

    constructor() {
        this.urlService = 'http://localhost:9080';
    }

    getUrlService(): string {
        return this.urlService;
    }
}
