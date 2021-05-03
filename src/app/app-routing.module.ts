import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '@app/components/page/main-page/main-page.component';
import { WishlistPageComponent } from '@app/components/page/wishlist-page/wishlist-page.component';
import { OwnedPokemonPageComponent } from '@app/components/page/owned-pokemon-page/owned-pokemon-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'wishlist', component: WishlistPageComponent },
  { path: 'gotem', component: OwnedPokemonPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
