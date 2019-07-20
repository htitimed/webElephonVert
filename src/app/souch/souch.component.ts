import { Component,OnInit } from '@angular/core';
import {SouchMockService} from './souch.mock.service';
import {Souch} from '../shared/souch';


@Component({
    selector: 'app-souch',
    templateUrl: './souch.component.html',
    styleUrls: ['./souch.component.css']
})
export class SouchComponent implements OnInit{
    souchs : Souch[];
    constructor(private souchService : SouchMockService){

    }
    ngOnInit(){
        this.souchs = this.souchService.getSouchs();
    }
}
