import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'countries', component: CountriesComponent}
]
@NgModule({
  declarations: [		
    AppComponent,
      NavBarComponent,
      HomeComponent,
      CountriesComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
