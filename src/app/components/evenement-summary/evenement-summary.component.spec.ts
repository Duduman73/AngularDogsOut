import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementSummaryComponent } from './evenement-summary.component';

describe('EvenementSummaryComponent', () => {
  let component: EvenementSummaryComponent;
  let fixture: ComponentFixture<EvenementSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
