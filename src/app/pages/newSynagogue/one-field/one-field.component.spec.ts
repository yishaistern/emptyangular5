import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFieldComponent } from './one-field.component';

describe('OneFieldComponent', () => {
  let component: OneFieldComponent;
  let fixture: ComponentFixture<OneFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
