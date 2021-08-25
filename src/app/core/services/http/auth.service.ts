import { Injectable } from '@angular/core';
import { SignInDto } from '../../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signIn(signInDto: SignInDto) {
    console.log('🚀 ~ AuthService ~ signIn ~ OK');
    // TODO: http call
  }
}
