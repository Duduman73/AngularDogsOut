import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFicheDetailsComponent } from './admin-fiche-details.component';

describe('AdminFicheDetailsComponent', () => {
  let component: AdminFicheDetailsComponent;
  let fixture: ComponentFixture<AdminFicheDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFicheDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFicheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
