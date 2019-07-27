import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SouchService } from './souch.service';
import { Souch } from '../shared/souch';





@Component({
    selector: 'app-souch',
    templateUrl: './souch.component.html',
    styleUrls: ['./souch.component.css']
})
export class SouchComponent implements OnInit {
    souchs: Souch[];
    souchForm: FormGroup;
    constructor(private souchService: SouchService, private fb: FormBuilder) {
        this.souchForm = this.fb.group({
            strainCode: ['', Validators.required],
            QuantityOfStorage: '',
            originalCode: ''
        });
    }
    ngOnInit() {
        this.loadSouchs();
    }
    loadSouchs() {
        this.souchService.getSouchs().subscribe(
            data => { this.souchs = data; },
            error => { console.log('An error was occured.'); },
            () => { console.log('loading souchs was done.'); }
        );
    }

    addSouch() {
        const ss = this.souchForm.value;
        this.souchService.addSouch(ss).subscribe(
            res => {
                this.loadSouchs();
            }
        );
    }
}

