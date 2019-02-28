import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FinanType } from '../services/finanType';
import { ConfigService } from './config.service';

@Injectable()
export class FinanTypeService {

    private baseUrlService: string;

    constructor(private http: HttpClient, private configService: ConfigService) {
        this.baseUrlService = configService.getUrlService() + '/finantype';
    }

    getFinanTypes() {
        return this.http.get<FinanType[]>(this.baseUrlService);
    }

    addFinanType(finanType: FinanType) {
        return this.http.post(this.baseUrlService, JSON.stringify(finanType));
    }

    deleteFinanType(id: number) {
        return this.http.delete(this.baseUrlService + id);
    }

    getFinanType(id: number) {
        return this.http.get<FinanType>(this.baseUrlService + id);
    }

    updateFinanType(finanType: FinanType) {
        return this.http.put(this.baseUrlService, JSON.stringify(finanType));
    }
}
