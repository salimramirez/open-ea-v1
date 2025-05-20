import { TestBed } from '@angular/core/testing';

import { DomainAnalysisService } from './domain-analysis.service';

describe('DomainAnalysisService', () => {
  let service: DomainAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
