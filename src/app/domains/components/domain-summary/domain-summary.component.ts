import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Domain } from '../../model/domain.entity';
import { DomainAnalysis } from '../../../seo/model/domain-analysis.entity';
import { LogoApiService } from '../../../shared/services/logo-api.service';
import { TranslatePipe } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

/**
 * Component for displaying a domain summary card.
 * Shows average authority, number of analyses and last analysis date.
 *
 * @author
 */
@Component({
  selector: 'app-domain-summary',
  imports: [
    MatCardModule,
    TranslatePipe,
    DatePipe
  ],
  templateUrl: './domain-summary.component.html',
  styleUrl: './domain-summary.component.css'
})
export class DomainSummaryComponent {
  /** The domain being displayed */
  @Input() domain!: Domain;

  /** All available analyses (must be filtered externally by domain) */
  @Input() analyses: DomainAnalysis[] = [];

  constructor(protected logoApi: LogoApiService) {}

  /**
   * Returns the average domain authority, rounded to nearest integer.
   */
  get averageAuthority(): string {
    if (!this.analyses.length) return 'No analyses';
    const sum = this.analyses.reduce((acc, a) => acc + a.domainAuthority, 0);
    return Math.round(sum / this.analyses.length).toString();
  }

  /**
   * Returns the date of the most recent analysis (ISO format).
   */
  get lastAnalysisDate(): string | null {
    if (!this.analyses.length) return null;
    const sorted = [...this.analyses].sort((a, b) => b.analyzedAt.localeCompare(a.analyzedAt));
    return sorted[0].analyzedAt;
  }

  /**
   * Returns the number of analyses for this domain.
   */
  get analysisCount(): number {
    return this.analyses.length;
  }

  /**
   * Generates the logo URL using the domain name.
   */
  get logoUrl(): string {
    return this.logoApi.getUrlToLogoFromDomain(this.domain.name);
  }
}
