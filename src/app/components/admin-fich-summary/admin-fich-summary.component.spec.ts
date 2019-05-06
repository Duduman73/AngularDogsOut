import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFichSummaryComponent } from './admin-fich-summary.component';

describe('AdminFichSummaryComponent', () => {
  let component: AdminFichSummaryComponent;
  let fixture: ComponentFixture<AdminFichSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFichSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFichSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
