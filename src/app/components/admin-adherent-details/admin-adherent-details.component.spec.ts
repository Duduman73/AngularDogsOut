import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdherentDetailsComponent } from './admin-adherent-details.component';

describe('AdminAdherentDetailsComponent', () => {
  let component: AdminAdherentDetailsComponent;
  let fixture: ComponentFixture<AdminAdherentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdherentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdherentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
