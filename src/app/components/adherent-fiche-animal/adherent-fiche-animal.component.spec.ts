import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentFicheAnimalComponent } from './adherent-fiche-animal.component';

describe('AdherentFicheAnimalComponent', () => {
  let component: AdherentFicheAnimalComponent;
  let fixture: ComponentFixture<AdherentFicheAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentFicheAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentFicheAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
