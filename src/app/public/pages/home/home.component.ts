import { Component } from '@angular/core';
import { DomainListComponent } from '../../../domains/components/domain-list/domain-list.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    DomainListComponent,
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
