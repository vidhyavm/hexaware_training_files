import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayallComponent } from './components/displayall/displayall.component';
import { AddplayersComponent } from './components/addplayers/addplayers.component';

const routes: Routes = [
{path:'home',component:DashboardComponent},
{path:'addplayers',component:AddplayersComponent},
{path:'displayall',component:DisplayallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
