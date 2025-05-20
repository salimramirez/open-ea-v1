import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Domain } from '../model/domain.entity';
import { DomainAssembler } from './domain.assembler';
import { DomainResource, DomainsResponse } from './domains.response';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

const domainsResourceEndpointPath = environment.domainsEndpointPath;

/**
 * Service for interacting with the /domains endpoint.
 * Extends BaseService and transforms raw resources into Domain entities using the DomainAssembler.
 *
 * @author
 */
@Injectable({
  providedIn: 'root'
})
export class DomainService extends BaseService<DomainResource> {
  constructor() {
    super();
    this.resourceEndpoint = domainsResourceEndpointPath;
  }

  /**
   * Retrieves all domains from the backend and transforms them into Domain entities.
   * Wraps the raw array manually to conform to the DomainsResponse interface.
   *
   * @returns Observable containing an array of Domain entities
   */
  override getAll(): Observable<Domain[]> {
    return super.getAll().pipe(
      map((raw: DomainResource[]): DomainsResponse => ({ domains: raw })),
      map(DomainAssembler.toEntitiesFromResponse)
    );
  }
}
