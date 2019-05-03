import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAnimalSummaryComponent } from './fiche-animal-summary.component';

describe('FicheAnimalSummaryComponent', () => {
  let component: FicheAnimalSummaryComponent;
  let fixture: ComponentFixture<FicheAnimalSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAnimalSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAnimalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
