import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SouchService{
    constructor(private http: HttpClient)
}