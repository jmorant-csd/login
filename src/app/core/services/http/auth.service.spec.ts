import { TestBed } from '@angular/core/testing';
import { SignInDto } from '../../models/auth';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    spyOn(console, 'log');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show a message in console when signIn method is called', () => {
    const signInDto: SignInDto = {
      email: 'test@test.com',
      password: 'test1',
    };
    service.signIn(signInDto);
    expect(console.log).toHaveBeenCalled();
  });
});
