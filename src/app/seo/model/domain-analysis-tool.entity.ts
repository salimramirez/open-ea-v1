/**
 * Entity representing a domain analysis tool used in SEO evaluations.
 * Encapsulates tool identification and display name.
 *
 * @example
 * { code: 'moz', name: 'Moz Analysis Tool' }
 *
 * @author
 */
export class DomainAnalysisTool {
  code: string;
  name: string;

  constructor(domainAnalysisTool: {code?: string; name?: string}) {
    this.code = domainAnalysisTool.code || '';
    this.name = domainAnalysisTool.name || '';
  }
}
