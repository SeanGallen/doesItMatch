import { TestBed } from '@angular/core/testing';

import { TextMatchService} from './text-match-service';

describe('TextMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextMatchService = TestBed.get(TextMatchService);
    expect(service).toBeTruthy();
  });
});
