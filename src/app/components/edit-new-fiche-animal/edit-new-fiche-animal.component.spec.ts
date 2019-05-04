import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewFicheAnimalComponent } from './edit-new-fiche-animal.component';

describe('EditNewFicheAnimalComponent', () => {
  let component: EditNewFicheAnimalComponent;
  let fixture: ComponentFixture<EditNewFicheAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewFicheAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewFicheAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
