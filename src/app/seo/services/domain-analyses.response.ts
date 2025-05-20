/**
 * Artificial response wrapper for domain analyses to maintain consistency with design patterns.
 */
export interface DomainAnalysesResponse {
  domainAnalyses: DomainAnalysisResource[];
}

/**
 * Resource format for a single domain analysis as returned by the API.
 */
export interface DomainAnalysisResource {
  id: number;
  domainId: number;
  toolCode: string;
  domainAuthority: number;
  analyzedAt: string;
}
