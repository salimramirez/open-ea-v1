import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = environment.logoProviderApiBaseUrl;

  constructor() {}

  getUrlToLogoFromUrl(url: string): string {
    return `${this.baseUrl}${new URL(url).hostname}`;
  }

  /**
   * Returns a Clearbit logo URL from a plain domain name (e.g., "openai.com").
   * @param domain - The domain name without scheme
   */
  getUrlToLogoFromDomain(domain: string): string {
    return `${this.baseUrl}${domain}`;
  }

}
