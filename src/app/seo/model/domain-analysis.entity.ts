/**
 * Entity representing a domain analysis record, including tool usage and domain authority.
 * Encapsulates information for statistical and display purposes.
 *
 * @example
 * {
 *   id: 1,
 *   domainId: 2,
 *   toolCode: 'moz',
 *   domainAuthority: 85,
 *   analyzedAt: '2025-05-18T08:00:00Z'
 * }
 *
 * @author
 */
export class DomainAnalysis {
  id: number;
  domainId: number;
  toolCode: string;
  domainAuthority: number;
  analyzedAt: string;

  constructor(domainAnalysis: {id?: number, domainId?: number, toolCode?: string,
    domainAuthority?: number, analyzedAt?: string}) {
    this.id = domainAnalysis.id || 0;
    this.domainId = domainAnalysis.domainId || 0;
    this.toolCode = domainAnalysis.toolCode || '';
    this.domainAuthority = domainAnalysis.domainAuthority || 0;
    this.analyzedAt = domainAnalysis.analyzedAt || '';
  }
}
