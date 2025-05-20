/**
 * Artificial wrapper for tool resources to maintain response consistency.
 */
export interface DomainAnalysisToolsResponse {
  domainAnalysisTools: DomainAnalysisToolResource[];
}

/**
 * Resource format for a single domain analysis tool as returned by the API.
 */
export interface DomainAnalysisToolResource {
  code: string;
  name: string;
}
