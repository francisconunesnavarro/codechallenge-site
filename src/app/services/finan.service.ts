import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Finan } from './finan';
import { ConfigService } from './config.service';

@Injectable()
export class FinanService {

    private baseUrlService: string;

    constructor(private http: HttpClient, private configService: ConfigService) {
        this.baseUrlService = configService.getUrlService() + '/finan';
    }

    getFinans() {
        return this.http.get<Finan[]>(this.baseUrlService);
    }

    addFinan(finan: Finan) {
        return this.http.post(this.baseUrlService, JSON.stringify(finan));
    }

    deleteFinan(id: number) {
        return this.http.delete(this.baseUrlService + id);
    }

    getFinan(id: number) {
        return this.http.get<Finan>(this.baseUrlService + id);
    }

    updateFinan(finan: Finan) {
        return this.http.put(this.baseUrlService, JSON.stringify(finan));
    }

    calcAmount(finantypeId: number, value: number, amount: number) {
        return this.http.get<number>(this.baseUrlService + '/calc?finantype_id=' + finantypeId +
            '&value=' + value + '&amount=' + amount);
    }
}
