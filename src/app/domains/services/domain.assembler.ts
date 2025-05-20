import { Domain } from '../model/domain.entity';
import { DomainResource, DomainsResponse } from './domains.response';

/**
 * Assembler for converting domain API resources into domain entities.
 * Applies transformation logic to isolate domain logic from transport formats.
 *
 * @author
 */
export class DomainAssembler {
  /**
   * Transforms a single DomainResource into a Domain entity.
   * @param resource - Raw domain object from the API
   * @returns Domain entity
   */
  static toEntityFromResource(resource: DomainResource): Domain {
    return {
      id: resource.id,
      name: resource.name
    };
  }

  /**
   * Transforms a response of DomainResources into an array of Domain entities.
   * @param response - Wrapped response containing an array of domain resources
   * @returns Array of Domain entities
   */
  static toEntitiesFromResponse(response: DomainsResponse): Domain[] {
    return response.domains.map(resource => DomainAssembler.toEntityFromResource(resource));
  }
}
