import { Component, OnInit } from '@angular/core';
import { Domain } from '../../model/domain.entity';
import { DomainAnalysis } from '../../../seo/model/domain-analysis.entity';
import { DomainService } from '../../services/domain.service';
import { DomainAnalysisService } from '../../../seo/services/domain-analysis.service';
import { DomainSummaryComponent } from '../domain-summary/domain-summary.component';

/**
 * Component that lists all domains with their analysis summaries.
 * Fetches domains and analyses, and passes filtered data to DomainSummaryComponent.
 *
 * @author
 */
@Component({
  selector: 'app-domain-list',
  imports: [
    DomainSummaryComponent
  ],
  templateUrl: './domain-list.component.html',
  styleUrl: './domain-list.component.css'
})
export class DomainListComponent implements OnInit {
  protected domains: Domain[] = [];
  protected analyses: DomainAnalysis[] = [];

  constructor(
    private domainService: DomainService,
    private analysisService: DomainAnalysisService
  ) {}

  ngOnInit(): void {
    this.domainService.getAll().subscribe(domains => this.domains = domains);
    this.analysisService.getAll().subscribe(analyses => this.analyses = analyses);
  }

  /**
   * Gets the analyses corresponding to a given domain ID.
   * @param domainId - Domain ID to filter analyses
   * @returns List of DomainAnalysis
   */
  protected analysesFor(domainId: number): DomainAnalysis[] {
    return this.analyses.filter(a => a.domainId === domainId);
  }
}
