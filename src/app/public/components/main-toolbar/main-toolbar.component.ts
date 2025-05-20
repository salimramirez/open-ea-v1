import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { LogoApiService } from '../../../shared/services/logo-api.service';

/**
 * Main navigation toolbar of the application.
 * Displays navigation links and a language switcher.
 *
 * @author
 */
@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    LanguageSwitcherComponent
  ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.css'
})
export class MainToolbarComponent {
  /** Navigation options shown in the toolbar */
  options = [
    { link: '/home', label: 'toolbar.home' },
    { link: '/seo/analyses/new', label: 'toolbar.analysis' }
  ];

  /** URL for the WebFX logo */
  logoUrl: string;

  constructor(private logoApi: LogoApiService) {
    this.logoUrl = this.logoApi.getUrlToLogoFromDomain('webfx.com');
  }
}
