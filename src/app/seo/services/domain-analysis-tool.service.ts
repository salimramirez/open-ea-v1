import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { DomainAnalysisToolsResponse, DomainAnalysisToolResource } from './domain-analysis-tools.response';
import { DomainAnalysisTool } from '../model/domain-analysis-tool.entity';
import { DomainAnalysisToolAssembler } from './domain-analysis-tool.assembler';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

const domainAnalysisToolsResourceEndpointPath = environment.domainAnalysisToolsEndpointPath;

/**
 * Service for retrieving and transforming domain analysis tool data from the API.
 * Extends the generic BaseService and wraps raw responses using DomainAnalysisToolAssembler.
 *
 * @see DomainAnalysisTool
 * @see DomainAnalysisToolAssembler
 * @see BaseService
 *
 * @author
 */
@Injectable({
  providedIn: 'root'
})
export class DomainAnalysisToolService extends BaseService<DomainAnalysisToolResource> {
  constructor() {
    super();
    this.resourceEndpoint = domainAnalysisToolsResourceEndpointPath;
  }

  /**
   * Retrieves all analysis tools and transforms them into entity objects.
   * @returns Observable array of DomainAnalysisTool entities
   */
  override getAll(): Observable<DomainAnalysisTool[]> {
    return super.getAll().pipe(
      map((raw: DomainAnalysisToolResource[]): DomainAnalysisToolsResponse => ({ domainAnalysisTools: raw })),
      map(DomainAnalysisToolAssembler.toEntitiesFromResponse)
    );
  }
}
