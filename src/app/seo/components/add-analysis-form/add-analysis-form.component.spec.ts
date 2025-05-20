import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnalysisFormComponent } from './add-analysis-form.component';

describe('AddAnalysisFormComponent', () => {
  let component: AddAnalysisFormComponent;
  let fixture: ComponentFixture<AddAnalysisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnalysisFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnalysisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
