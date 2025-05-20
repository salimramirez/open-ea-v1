import { TestBed } from '@angular/core/testing';

import { DomainAnalysisToolService } from './domain-analysis-tool.service';

describe('DomainAnalysisToolService', () => {
  let service: DomainAnalysisToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainAnalysisToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
