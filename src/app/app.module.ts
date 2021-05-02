import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainBodyComponent } from './components/main-body/main-body.component';

import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailsDialogComponent } from './components/pokemon-details-dialog/pokemon-details-dialog.component';
import { WishlistPageComponent } from './components/page/wishlist-page/wishlist-page.component';
import { MainPageComponent } from './components/page/main-page/main-page.component';
import { OwnedPokemonPageComponent } from './components/page/owned-pokemon-page/owned-pokemon-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    PokemonCardComponent,
    PokemonDetailsDialogComponent,
    WishlistPageComponent,
    MainPageComponent,
    OwnedPokemonPageComponent,
  ],
  entryComponents: [PokemonDetailsDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
