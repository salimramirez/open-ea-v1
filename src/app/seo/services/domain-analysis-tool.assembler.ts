import { DomainAnalysisTool } from '../model/domain-analysis-tool.entity';
import { DomainAnalysisToolsResponse, DomainAnalysisToolResource } from './domain-analysis-tools.response';

/**
 * Assembler responsible for transforming domain analysis tool resources into entities.
 * Isolates conversion logic from service and component layers.
 *
 * @author
 */
export class DomainAnalysisToolAssembler {
  /**
   * Converts a single resource into a DomainAnalysisTool entity.
   * @param resource - Raw tool object from API
   * @returns A DomainAnalysisTool entity
   */
  static toEntityFromResource(resource: DomainAnalysisToolResource): DomainAnalysisTool {
    return {
      code: resource.code,
      name: resource.name
    };
  }

  /**
   * Converts a full response into an array of DomainAnalysisTool entities.
   * @param response - Response containing a list of resources
   * @returns Array of DomainAnalysisTool entities
   */
  static toEntitiesFromResponse(response: DomainAnalysisToolsResponse): DomainAnalysisTool[] {
    return response.domainAnalysisTools.map(resource => DomainAnalysisToolAssembler.toEntityFromResource(resource));
  }
}
