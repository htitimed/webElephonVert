import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { SouchComponent } from './souch/souch.component';
import { SouchMockService } from './souch/souch.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    AppComponent,
    SouchComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [SouchMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
