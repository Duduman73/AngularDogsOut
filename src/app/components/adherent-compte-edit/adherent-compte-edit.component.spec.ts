import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentCompteEditComponent } from './adherent-compte-edit.component';

describe('AdherentCompteEditComponent', () => {
  let component: AdherentCompteEditComponent;
  let fixture: ComponentFixture<AdherentCompteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentCompteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentCompteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
