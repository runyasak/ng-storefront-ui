import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SfButtonComponent,
  SfCheckboxComponent,
  SfIconEmailComponent,
  SfInputComponent,
  SfRadioComponent,
  SfTextareaComponent,
} from 'projects/ng-storefront-ui';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExampleWrapperComponent } from '../../components/example-wrapper/example-wrapper.component';
import { SfSelectComponent } from 'projects/ng-storefront-ui/src/lib/sf-select/sf-select.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ExampleWrapperComponent,
    SfButtonComponent,
    SfCheckboxComponent,
    SfIconEmailComponent,
    SfInputComponent,
    SfRadioComponent,
    SfSelectComponent,
    SfTextareaComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './forms-showcase-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsShowcasePageComponent {
  submitForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl(''),
    country: new FormControl(''),
    description: new FormControl(''),
    acceptMe: new FormControl(null),
    notification: new FormControl(''),
  });

  countryOptions = [
    {
      label: 'Afghanistan',
      value: 'afghanistan',
    },
    {
      label: 'Albania',
      value: 'albania',
    },
    {
      label: 'Angola',
      value: 'angola',
    },
    {
      label: 'Bahamas',
      value: 'bahamas',
    },
    {
      label: 'Bangladesh',
      value: 'bangladesh',
    },
    {
      label: 'Canada',
      value: 'canada',
    },
    {
      label: 'Chile',
      value: 'chile',
    },
    {
      label: 'Czech Republic',
      value: 'czech Republic',
    },
    {
      label: 'Colombia',
      value: 'colombia',
    },
    {
      label: 'Congo',
      value: 'congo',
    },
    {
      label: 'Croatia',
      value: 'croatia',
    },
    {
      label: 'Cuba',
      value: 'cuba',
    },
    {
      label: 'Denmark',
      value: 'denmark',
    },
    {
      label: 'Dominica',
      value: 'dominica',
    },
    {
      label: 'Egypt',
      value: 'egypt',
    },
    {
      label: 'Ethiopia',
      value: 'ethiopia',
    },
    {
      label: 'Estonia',
      value: 'estonia',
    },
    {
      label: 'Thailand',
      value: 'thailand',
    },
  ];

  inputControl = new FormControl('This input is required', { validators: Validators.required });

  textareaControl = new FormControl('', { validators: Validators.required });

  selectControl = new FormControl('', { validators: Validators.required });

  constructor() {
    console.log(this.submitForm.controls['email'].hasError(''));
  }

  hasError(formControl: FormControl) {
    return formControl.touched && formControl.errors;
  }
}
