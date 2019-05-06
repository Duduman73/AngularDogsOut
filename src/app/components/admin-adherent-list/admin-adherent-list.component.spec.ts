import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdherentListComponent } from './admin-adherent-list.component';

describe('AdminAdherentListComponent', () => {
  let component: AdminAdherentListComponent;
  let fixture: ComponentFixture<AdminAdherentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdherentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdherentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
