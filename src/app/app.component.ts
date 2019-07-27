import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'webElephonVert';
  showHideSideBar: boolean = false;
  onAffiche( event ) {
    this.showHideSideBar = event;
  }
}

