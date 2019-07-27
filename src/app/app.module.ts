import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { SouchComponent } from './souch/souch.component';
import { SouchMockService } from './souch/souch.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SouchService } from './souch/souch.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SouchComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,




  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule

  ],
  providers: [SouchMockService, SouchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
