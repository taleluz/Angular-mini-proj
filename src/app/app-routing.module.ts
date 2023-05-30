import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicalCannabisComponent } from './medical-cannabis/medical-cannabis.component';
import { StoreListComponent } from './store-list/store-list.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProductComponent } from './product/product.component';
import { WishlistService } from './services/wishlist.service';
import { SettingsPageComponent } from './settings-page/settings-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'medical-cannabis', component: MedicalCannabisComponent },
  { path: 'stores', component: StoreListComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'product', component: ProductComponent },
  {path: 'wishlist', component: WishlistService},
  { path: 'settings', component: SettingsPageComponent },

  // Add this route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
