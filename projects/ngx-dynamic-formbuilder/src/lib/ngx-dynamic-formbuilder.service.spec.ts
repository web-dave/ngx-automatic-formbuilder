import { TestBed } from '@angular/core/testing';

import { NgxDynamicFormbuilderService } from './ngx-dynamic-formbuilder.service';

describe('NgxDynamicFormbuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDynamicFormbuilderService = TestBed.get(NgxDynamicFormbuilderService);
    expect(service).toBeTruthy();
  });
});
