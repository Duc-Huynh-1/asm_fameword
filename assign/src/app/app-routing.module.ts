import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { DetailsComponent } from './components/details/details.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LocationComponent } from './components/location/location.component';
import { AdminComponent } from './admin/admin/admin.component';

import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';



const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'product', component: ProductComponent},
      {path: 'details/:id', component: DetailsComponent},
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'location', component: LocationComponent},
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'product', component: AdminComponent},
      {path: 'product/add', component: AddComponent},
      {path: 'product/update/:id', component: UpdateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
