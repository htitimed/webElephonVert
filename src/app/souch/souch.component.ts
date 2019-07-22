import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SouchMockService } from './souch.mock.service';
import { Souch } from '../shared/souch';



@Component({
    selector: 'app-souch',
    templateUrl: './souch.component.html',
    styleUrls: ['./souch.component.css']
})
export class SouchComponent implements OnInit {
    souchs: Souch[];
    souchForm: FormGroup;
    constructor(private souchService: SouchMockService, private fb: FormBuilder) {
        this.souchForm = this.fb.group({
            strainCode: ['', Validators.required],
            QuantityOfStorage: '',
            originalCode: ''
        });
    }
    ngOnInit() {
        this.souchs = this.souchService.getSouchs();
    }
}
