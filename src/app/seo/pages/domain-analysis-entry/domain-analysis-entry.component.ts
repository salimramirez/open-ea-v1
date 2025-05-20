import { Component } from '@angular/core';
import { AddAnalysisFormComponent } from '../../components/add-analysis-form/add-analysis-form.component';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Page for entering new domain analyses.
 * Hosts the form to add a new domain authority analysis.
 *
 * @route /seo/analyses/new
 * @access Public (user must navigate to this view)
 * @author
 */
@Component({
  selector: 'app-domain-analysis-entry',
  imports: [
    AddAnalysisFormComponent,
    TranslatePipe
  ],
  templateUrl: './domain-analysis-entry.component.html',
  styleUrl: './domain-analysis-entry.component.css'
})
export class DomainAnalysisEntryComponent {

}
