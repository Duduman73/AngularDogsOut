import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAnimalDetailsComponent } from './fiche-animal-details.component';

describe('FicheAnimalDetailsComponent', () => {
  let component: FicheAnimalDetailsComponent;
  let fixture: ComponentFixture<FicheAnimalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAnimalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
