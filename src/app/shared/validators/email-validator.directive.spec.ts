import { FormControl } from '@angular/forms';
import { emailValidator } from './email-validator.directive';

describe('EmailValidatorDirective', () => {
  const validator = emailValidator();

  it('should create an instance', () => {
    expect(validator).toBeTruthy();
  });

  it('should return { email: true } if format does not looks like username@mail-server.domain', () => {
    const invalidFormat = new FormControl('username');
    expect(validator(invalidFormat)).toEqual({ email: true });

    invalidFormat.setValue('username@mail-server');
    expect(validator(invalidFormat)).toEqual({ email: true });

    invalidFormat.setValue('username@mail-server.');
    expect(validator(invalidFormat)).toEqual({ email: true });
  });

  it('should return null if format looks like username@mail-server.domain', () => {
    const validFormat = new FormControl('username@mail-server.com');
    expect(validator(validFormat)).toBeNull();
  });
});
