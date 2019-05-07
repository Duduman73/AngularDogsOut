import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFicheListComponent } from './admin-fiche-list.component';

describe('AdminFicheListComponent', () => {
  let component: AdminFicheListComponent;
  let fixture: ComponentFixture<AdminFicheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFicheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFicheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
