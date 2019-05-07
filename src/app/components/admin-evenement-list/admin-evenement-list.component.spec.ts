import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvenementListComponent } from './admin-evenement-list.component';

describe('AdminEvenementListComponent', () => {
  let component: AdminEvenementListComponent;
  let fixture: ComponentFixture<AdminEvenementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEvenementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEvenementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
