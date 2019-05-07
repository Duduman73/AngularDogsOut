import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentFormMessageComponent } from './adherent-form-message.component';

describe('AdherentFormMessageComponent', () => {
  let component: AdherentFormMessageComponent;
  let fixture: ComponentFixture<AdherentFormMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentFormMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentFormMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
