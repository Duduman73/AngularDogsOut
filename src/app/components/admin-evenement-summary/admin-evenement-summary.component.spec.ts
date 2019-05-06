import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvenementSummaryComponent } from './admin-evenement-summary.component';

describe('AdminEvenementSummaryComponent', () => {
  let component: AdminEvenementSummaryComponent;
  let fixture: ComponentFixture<AdminEvenementSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEvenementSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEvenementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
