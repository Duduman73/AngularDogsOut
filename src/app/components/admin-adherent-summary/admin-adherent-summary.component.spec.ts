import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdherentSummaryComponent } from './admin-adherent-summary.component';

describe('AdminAdherentSummaryComponent', () => {
  let component: AdminAdherentSummaryComponent;
  let fixture: ComponentFixture<AdminAdherentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdherentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdherentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
