import { TestBed } from '@angular/core/testing';

import { AutomaticFormBuilder } from './ngx-automatic-formbuilder.service';

describe('AutomaticFormBuilder', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutomaticFormBuilder = TestBed.get(AutomaticFormBuilder);
    expect(service).toBeTruthy();
  });
});
