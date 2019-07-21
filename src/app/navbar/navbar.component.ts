import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  @Input()
  showHideSideBar:boolean;
  
  @Output()
  showHideSideBarChange:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  afficherSideBar() {
    this.showHideSideBar=!this.showHideSideBar;
    this.showHideSideBarChange.emit(this.showHideSideBar);
   }
}
