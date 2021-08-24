import { AbstractControl, ValidatorFn } from '@angular/forms';

export const emailValidator = (): ValidatorFn =>
  (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const emailRegExp = new RegExp(
      // eslint-disable-next-line max-len
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const isValid = emailRegExp.test(control.value);
    return isValid ? null : { email: true };
};
