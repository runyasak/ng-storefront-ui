import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfInputComponent, SfTextareaComponent } from 'projects/ng-storefront-ui';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { SfSelectComponent } from 'projects/ng-storefront-ui/src/lib/sf-select/sf-select.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ExampleWrapperComponent,
    SfInputComponent,
    SfSelectComponent,
    SfTextareaComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './forms-showcase-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsShowcasePageComponent {
  inputControl = new FormControl('This input is required', { validators: Validators.required });

  textareaControl = new FormControl('', { validators: Validators.required });

  selectControl = new FormControl('', { validators: Validators.required });
}
