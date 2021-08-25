import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInDto } from 'src/app/core/models/auth';
import { AuthService } from 'src/app/core/services/http/auth.service';
import { emailValidator } from 'src/app/shared/validators/email-validator.directive';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  signInForm: FormGroup;
  isRemindEnabled = false;
  isSubmitButtonClicked = false;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required, emailValidator()]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  async onSubmit() {
    if (this.signInForm.invalid) {
      this.isSubmitButtonClicked = true;
      return;
    }

    const signInDto: SignInDto = this.signInForm.value;
    this.authService.signIn(signInDto);
  }
}
