import { DomainAnalysis } from '../model/domain-analysis.entity';
import { DomainAnalysesResponse, DomainAnalysisResource  } from './domain-analyses.response';

/**
 * Assembler for converting raw domain analysis resources into entities.
 * Supports transformation of individual records or full API responses.
 *
 * @author
 */
export class DomainAnalysisAssembler {
  /**
   * Transforms a single resource into a DomainAnalysis entity.
   * @param resource - Raw resource from API
   * @returns DomainAnalysis entity
   */
  static toEntityFromResource(resource: DomainAnalysisResource): DomainAnalysis {
    return {
      id: resource.id,
      domainId: resource.domainId,
      toolCode: resource.toolCode,
      domainAuthority: resource.domainAuthority,
      analyzedAt: resource.analyzedAt
    };
  }

  /**
   * Transforms a full response object into an array of DomainAnalysis entities.
   * @param response - API response containing array of resources
   * @returns Array of DomainAnalysis entities
   */
  static toEntitiesFromResponse(response: DomainAnalysesResponse): DomainAnalysis[] {
    return response.domainAnalyses.map(resource => DomainAnalysisAssembler.toEntityFromResource(resource));
  }
}
