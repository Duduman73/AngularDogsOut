import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentCompteComponent } from './adherent-compte.component';

describe('AdherentCompteComponent', () => {
  let component: AdherentCompteComponent;
  let fixture: ComponentFixture<AdherentCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
