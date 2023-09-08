import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfTextareaComponent } from 'projects/ng-storefront-ui';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, SfTextareaComponent, ReactiveFormsModule],
  templateUrl: './forms-showcase-page.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsShowcasePageComponent {
  textareaControl = new FormControl('', { validators: Validators.required });
}
