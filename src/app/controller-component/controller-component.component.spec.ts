import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerComponentComponent } from './controller-component.component';

describe('ControllerComponentComponent', () => {
  let component: ControllerComponentComponent;
  let fixture: ComponentFixture<ControllerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
