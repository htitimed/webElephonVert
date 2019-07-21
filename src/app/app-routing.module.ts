import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SouchComponent } from './souch/souch.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: 'souch', component: SouchComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
