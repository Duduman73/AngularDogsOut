import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentCompteDetailsComponent } from './adherent-compte-details.component';

describe('AdherentCompteDetailsComponent', () => {
  let component: AdherentCompteDetailsComponent;
  let fixture: ComponentFixture<AdherentCompteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentCompteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentCompteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
