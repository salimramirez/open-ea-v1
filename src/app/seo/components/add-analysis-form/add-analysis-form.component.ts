import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DomainAnalysisToolService } from '../../services/domain-analysis-tool.service';
import { DomainService } from '../../../domains/services/domain.service';
import { DomainAnalysisService } from '../../services/domain-analysis.service';
import { DomainResource } from '../../../domains/services/domains.response';
import { DomainAnalysisResource } from '../../services/domain-analyses.response';
import { BaseFormComponent } from '../../../shared/components/base-form.component';
import { firstValueFrom } from 'rxjs';

/**
 * Component providing a form to create a new domain analysis.
 * Handles validation, entity creation, and API integration with feedback.
 *
 * @route /seo/analyses/new
 * @standalone true
 * @author
 */
@Component({
  selector: 'app-add-analysis-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './add-analysis-form.component.html',
  styleUrl: './add-analysis-form.component.css'
})
export class AddAnalysisFormComponent extends BaseFormComponent {
  protected form: FormGroup;
  protected message: string = '';
  protected recentSubmissions = new Map<string, number>();

  private domainService = inject(DomainService);
  private toolService = inject(DomainAnalysisToolService);
  private analysisService = inject(DomainAnalysisService);
  private fb = inject(FormBuilder);

  constructor(private translateService: TranslateService) {
    super();
    this.setTranslateService(translateService);
    this.form = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      domainAuthority: [null, [Validators.required, Validators.min(1), Validators.max(100)]],
      toolCode: ['', Validators.required]
    });
  }

  /**
   * Handles submission of the analysis form.
   * Validates toolCode, domain format, avoids duplicates, and persists entities.
   */
  protected async onSubmit(): Promise<void> {
    this.message = '';

    if (this.form.invalid) {
      this.message = 'analysis.error.invalid-form';
      return;
    }

    const { domain, domainAuthority, toolCode } = this.form.value;
    const key = `${domain}-${toolCode}`;

    // Verificar toolCode válido
    const tools = await firstValueFrom(this.toolService.getAll());
    const toolExists = tools.some(t => t.code === toolCode);
    if (!toolExists) {
      this.message = 'analysis.error.invalid-tool';
      return;
    }

    // Verificar duplicado en últimos 5 segundos
    const now = Date.now();
    const last = this.recentSubmissions.get(key);
    if (last && now - last < 5000) {
      this.message = 'analysis.error.duplicate-recent';
      return;
    }

    // Verificar si dominio ya existe
    const domains = await firstValueFrom(this.domainService.getAll());
    let domainEntity = domains.find(d => d.name === domain);
    if (!domainEntity) {
      const newDomain: DomainResource = { id: 0, name: domain };
      domainEntity = await firstValueFrom(this.domainService.create(newDomain));
    }

    // Crear análisis
    const newAnalysis: DomainAnalysisResource = {
      id: 0,
      domainId: domainEntity.id,
      toolCode,
      domainAuthority,
      analyzedAt: new Date().toISOString()
    };

    await firstValueFrom(this.analysisService.create(newAnalysis));
    this.recentSubmissions.set(key, now);
    this.message = 'analysis.success';
    this.form.reset();
  }
}
