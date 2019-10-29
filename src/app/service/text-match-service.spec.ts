import { TestBed } from '@angular/core/testing';

import { TextMatchService} from './text-match-service';

describe('TextMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextMatchService = TestBed.get(TextMatchService);
    expect(service).toBeTruthy();
  });

  it('text array should start empty', () => {
    const service: TextMatchService = TestBed.get(TextMatchService);
    var shouldBeEmpty = service.texts.length;
    expect(shouldBeEmpty).toBe(0);
  });

  it('add will increase text array size', () => {
    const service: TextMatchService = TestBed.get(TextMatchService);
    service.add('first data');
    var willNotBeEmpty = service.texts.length;
    expect(willNotBeEmpty).toBe(1);
  });

});
