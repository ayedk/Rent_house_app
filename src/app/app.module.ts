import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {CalendarModule} from 'primeng/calendar';

import {MegaMenuModule} from 'primeng/megamenu';
      


import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseItemComponent } from './houses/house-list/house-item/house-item.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { HousesService } from './houses/houses.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseListComponent,
    HouseItemComponent,
    HouseDetailComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    routingcomponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    MegaMenuModule
  ],
  providers: [HousesService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
