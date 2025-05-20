import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainAnalysisEntryComponent } from './domain-analysis-entry.component';

describe('DomainAnalysisEntryComponent', () => {
  let component: DomainAnalysisEntryComponent;
  let fixture: ComponentFixture<DomainAnalysisEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainAnalysisEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainAnalysisEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
