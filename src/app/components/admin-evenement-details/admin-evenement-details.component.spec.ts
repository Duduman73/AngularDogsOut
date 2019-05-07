import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvenementDetailsComponent } from './admin-evenement-details.component';

describe('AdminEvenementDetailsComponent', () => {
  let component: AdminEvenementDetailsComponent;
  let fixture: ComponentFixture<AdminEvenementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEvenementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEvenementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
