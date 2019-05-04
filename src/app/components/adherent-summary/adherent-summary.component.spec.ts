import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentSummaryComponent } from './adherent-summary.component';

describe('AdherentSummaryComponent', () => {
  let component: AdherentSummaryComponent;
  let fixture: ComponentFixture<AdherentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
