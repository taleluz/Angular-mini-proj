import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PantsComponent } from './pants/pants.component';
import { TShirtsComponent } from './tshirts/tshirts.component';
import { TopsComponent } from './tops/tops.component';
import { MedicalCannabisComponent } from './medical-cannabis/medical-cannabis.component';
import { StoreListComponent } from './store-list/store-list.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

// Add the library.add statement here
library.add(faHome, faMapMarkerAlt);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'stores', component: StoreListComponent },
  { path: 'medical-cannabis', component: MedicalCannabisComponent },
  { path: 'personal-details', component: PersonalDetailsComponent }, // Add this route
  { path: 'product', component: ProductComponent }, 
  { path: 'settings', component: SettingsPageComponent },



];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    HomeComponent,
    PantsComponent,
    TShirtsComponent,
    TopsComponent,
    MedicalCannabisComponent,
    StoreListComponent,
    PersonalDetailsComponent,
    ProductComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
