import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentFicheAnimalSummaryComponent } from './adherent-fiche-animal-summary.component';

describe('AdherentFicheAnimalSummaryComponent', () => {
  let component: AdherentFicheAnimalSummaryComponent;
  let fixture: ComponentFixture<AdherentFicheAnimalSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentFicheAnimalSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentFicheAnimalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
