import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './components/hearder/hearder.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductComponent } from './components/product/product.component';
import { LocationComponent } from './components/location/location.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FooterComponent,

    HomeComponent,
     SigninComponent,
     SignupComponent,
     DetailsComponent,
     ProductComponent,
     LocationComponent,
     AdminComponent,
     ClientLayoutComponent,
     AdminLayoutComponent,
     DashboardComponent,
     SlideshowComponent,
     AddComponent,
     UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule ,//khai bao nhung gi lien quan den form
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
