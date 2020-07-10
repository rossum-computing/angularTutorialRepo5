import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProfileComponent } from './template-profile.component';

describe('TemplateProfileComponent', () => {
  let component: TemplateProfileComponent;
  let fixture: ComponentFixture<TemplateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
