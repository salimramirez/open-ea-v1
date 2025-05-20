import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { DomainAnalysesResponse, DomainAnalysisResource } from './domain-analyses.response';
import { DomainAnalysis } from '../model/domain-analysis.entity';
import { DomainAnalysisAssembler } from './domain-analysis.assembler';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

const domainAnalysesResourceEndpointPath = environment.domainAnalysesEndpointPath;

/**
 * Service for accessing and managing domain analysis records.
 * Provides logic to retrieve and convert raw data into DomainAnalysis entities.
 *
 * @see BaseService
 * @see DomainAnalysisAssembler
 *
 * @author
 */
@Injectable({
  providedIn: 'root'
})
export class DomainAnalysisService extends BaseService<DomainAnalysisResource> {
  constructor() {
    super();
    this.resourceEndpoint = domainAnalysesResourceEndpointPath;
  }

  /**
   * Retrieves all domain analysis records and maps them to DomainAnalysis entities.
   * @returns Observable array of DomainAnalysis entities
   */
  override getAll(): Observable<DomainAnalysis[]> {
    return super.getAll().pipe(
      map((raw: DomainAnalysisResource[]): DomainAnalysesResponse => ({ domainAnalyses: raw })),
      map(DomainAnalysisAssembler.toEntitiesFromResponse)
    );
  }
}
