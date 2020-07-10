import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProfileComponent } from './reactive-profile.component';

describe('ReactiveProfileComponent', () => {
  let component: ReactiveProfileComponent;
  let fixture: ComponentFixture<ReactiveProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
