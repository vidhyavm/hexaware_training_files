import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { RegisterComponent } from './components/register/register.component';
import { PolicyRegComponent } from './components/policy-reg/policy-reg.component';
import { PolicySearchComponent } from './components/policy-search/policy-search.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { AuthGuard } from './services/auth.guard';
import { AdminAuthGuard } from './services/admin-auth.guard';
const routes: Routes = [

  {
    path:'',
    component:HomepageComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'user-dashboard',
    component:UserDashComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path:'register-user',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'register-policy',
    component:PolicyRegComponent,
    pathMatch:'full',
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin-dashboard',
    component:AdminDashComponent,
    pathMatch:'full',
    canActivate: [AdminAuthGuard]
  },
  {
    path:'policy-search',
    component:PolicySearchComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
