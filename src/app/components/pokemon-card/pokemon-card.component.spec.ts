import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { MatButtonHarness } from '@angular/material/button/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from '@app/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        AppRoutingModule,
        MatIconModule,
        MatCardModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save pokemon to wishlist', async () => {
    const button = await loader.getHarness(
      MatButtonHarness.with({ selector: '.star-color' })
    );
    button.click();
    const wishlistPokemon = (await import('@app/db.json')).wishlistPokemon;

    expect(wishlistPokemon.count).toBe(1);
  });

  it('should save pokemon to personal list', async () => {
    const button = await loader.getHarness(
      MatButtonHarness.with({ selector: '.pokeball-color' })
    );
    button.click();
    const ownedPokemon = (await import('@app/db.json')).ownedPokemon;

    expect(ownedPokemon.count).toBe(1);
  });
});
