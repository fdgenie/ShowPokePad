import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedPokemonPageComponent } from './owned-pokemon-page.component';

describe('OwnedPokemonPageComponent', () => {
  let component: OwnedPokemonPageComponent;
  let fixture: ComponentFixture<OwnedPokemonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnedPokemonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnedPokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
