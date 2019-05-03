import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAnimalListComponent } from './fiche-animal-list.component';

describe('FicheAnimalListComponent', () => {
  let component: FicheAnimalListComponent;
  let fixture: ComponentFixture<FicheAnimalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAnimalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
