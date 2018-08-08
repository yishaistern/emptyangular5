import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PryDetailsComponent } from './pry-details.component';

describe('PryDetailsComponent', () => {
  let component: PryDetailsComponent;
  let fixture: ComponentFixture<PryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
