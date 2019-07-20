import { Injectable } from '@angular/core';
import { Souch } from '../shared/souch';

@Injectable()

export class SouchMockService{
    private SOUCHS : Souch[] = [];
    constructor(){
        let S1: Souch = new Souch('EVCH0001',200,'VG2');
        let S2: Souch = new Souch('EVCH0001',200,'VG2');
        let S3: Souch = new Souch('EVCH0001',200,'VG2');
        let S4: Souch = new Souch('EVCH0001',200,'VG2');
        this.SOUCHS.push(S1);
        this.SOUCHS.push(S2);
        this.SOUCHS.push(S3);
        this.SOUCHS.push(S4);
    }
    public getSouchs(): Souch[]{
        return this.SOUCHS;
    }
}