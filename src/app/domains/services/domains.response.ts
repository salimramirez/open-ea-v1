/**
 * Artificial wrapper for consistent response typing, matching domain-driven design conventions.
 */
export interface DomainsResponse {
  domains: DomainResource[];
}

/**
 * Resource format of a single domain as returned by the API.
 */
export interface DomainResource {
  id: number;
  name: string;
}
