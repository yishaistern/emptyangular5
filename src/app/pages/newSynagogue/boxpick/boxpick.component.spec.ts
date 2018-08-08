import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxpickComponent } from './boxpick.component';

describe('BoxpickComponent', () => {
  let component: BoxpickComponent;
  let fixture: ComponentFixture<BoxpickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxpickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
