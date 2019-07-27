import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Souch } from '../shared/souch';

@Injectable()
export class SouchService {
    constructor(private http: HttpClient) {

    }
    getSouchs(): Observable<any> {
        return this.http.get(API_URLS.SOUCHS_URL);
    }

    addSouch(souch: Souch): Observable<any> {
        return this.http.post(API_URLS.SOUCHS_URL, souch);
    }
    updateSouch(souch: Souch): Observable<any> {
        return this.http.put(API_URLS.SOUCHS_URL, souch);
    }
    deleteSouch(strainCode: string): Observable<any> {
        return this.http.delete(API_URLS.SOUCHS_URL + '/${strainCode}');
    }
}
