import { Injectable } from '@angular/core';
import { Souch } from '../shared/souch';

@Injectable()

export class SouchMockService {
    private SOUCHS: Souch[] = [];
    constructor() {
        let s1: Souch = new Souch('EVCH0001', 200, 'VG2');
        let s2: Souch = new Souch('EVCH0001', 200, 'VG2');
        let s3: Souch = new Souch('EVCH0001', 200, 'VG2');
        let s4: Souch = new Souch('EVCH0001', 200, 'VG2');
        this.SOUCHS.push(s1);
        this.SOUCHS.push(s2);
        this.SOUCHS.push(s3);
        this.SOUCHS.push(s4);
    }
    public getSouchs(): Souch[] {
        return this.SOUCHS;
    }
}
