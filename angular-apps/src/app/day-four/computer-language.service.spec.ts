import { TestBed, inject } from '@angular/core/testing';

import { ComputerLanguageService } from './computer-language.service';

describe('ComputerLanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputerLanguageService]
    });
  });

  it('should be created', inject([ComputerLanguageService], (service: ComputerLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
