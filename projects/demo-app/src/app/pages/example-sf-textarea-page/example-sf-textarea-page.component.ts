import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfTextareaComponent } from 'projects/ng-storefront-ui/src/lib/sf-textarea/sf-textarea.component';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';

@Component({
  standalone: true,
  imports: [CommonModule, ExampleWrapperComponent, SfTextareaComponent],
  templateUrl: './example-sf-textarea-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleSfTextareaPageComponent {}
