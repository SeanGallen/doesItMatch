import { TestBed } from '@angular/core/testing';

import { TextMatchServiceService } from './text-match-service.service';

describe('TextMatchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextMatchServiceService = TestBed.get(TextMatchServiceService);
    expect(service).toBeTruthy();
  });
});
