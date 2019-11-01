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
    service.add('first data', 'second data');
    var willNotBeEmpty = service.texts.length;
    expect(willNotBeEmpty).toBe(2);
  });

  it('add numbers line to texts', () => {
    const service: TextMatchService = TestBed.get(TextMatchService);
    service.add('first data','second data');
    var firstLine = service.texts[0];
    service.numberAddition(1);
    var secondLineWithNumbers = service.texts[1];
    expect(firstLine[0]).toBe('f');
    expect(secondLineWithNumbers[0]).toBe('1');
  });

  it('add numbers for several lines to texts', () => {
    const service: TextMatchService = TestBed.get(TextMatchService);
    service.add('first data\n second line', 'second data\n second line');
    var firstLine = service.texts[0];
    service.numberAddition(1);
    var secondLineWithNumbers = service.texts[1];
    expect(firstLine[12]).toBe('s');
    expect(secondLineWithNumbers[15]).toBe('2');
  });

});
