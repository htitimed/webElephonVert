import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { SouchComponent } from './souch/souch.component';
import { SouchMockService } from './souch/souch.mock.service';


@NgModule({
  declarations: [
    AppComponent,
    SouchComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [SouchMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
