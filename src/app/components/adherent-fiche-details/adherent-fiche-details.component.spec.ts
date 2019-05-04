import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentFicheDetailsComponent } from './adherent-fiche-details.component';

describe('AdherentFicheDetailsComponent', () => {
  let component: AdherentFicheDetailsComponent;
  let fixture: ComponentFixture<AdherentFicheDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentFicheDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentFicheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
