import { Routes } from '@angular/router';
import { HomeComponent } from "./public/pages/home/home.component";
import { DomainAnalysisEntryComponent } from './seo/pages/domain-analysis-entry/domain-analysis-entry.component';
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'seo/analyses/new', component: DomainAnalysisEntryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
