import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { HousesComponent } from './houses/houses.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: HouseListComponent },
    { path: 'houses/:id', component: HouseDetailComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingcomponent = [HouseDetailComponent,HousesComponent]
