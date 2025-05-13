import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noSpoilersValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const haveSpoiler = control.value.includes('spoiler');
    return haveSpoiler ? { spoiler: true } : null;
  };
}
