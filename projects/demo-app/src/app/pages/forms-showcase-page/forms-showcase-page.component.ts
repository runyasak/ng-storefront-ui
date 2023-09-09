import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfInputComponent, SfTextareaComponent } from 'projects/ng-storefront-ui';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ExampleWrapperComponent,
    SfInputComponent,
    SfTextareaComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './forms-showcase-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsShowcasePageComponent {
  inputControl = new FormControl('This input is required', { validators: Validators.required });

  textareaControl = new FormControl('', { validators: Validators.required });
}
