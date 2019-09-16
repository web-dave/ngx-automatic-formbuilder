import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicFormbuilderComponent } from './ngx-dynamic-formbuilder.component';

describe('NgxDynamicFormbuilderComponent', () => {
  let component: NgxDynamicFormbuilderComponent;
  let fixture: ComponentFixture<NgxDynamicFormbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDynamicFormbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
