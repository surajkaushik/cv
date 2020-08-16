import { TestBed } from '@angular/core/testing';

import { AddEducationService } from './add-education.service';

describe('AddEducationService', () => {
  let service: AddEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
