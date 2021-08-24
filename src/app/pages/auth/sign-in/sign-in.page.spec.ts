import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SignInPage } from './sign-in.page';

describe('SignInPage', () => {
  let component: SignInPage;
  let fixture: ComponentFixture<SignInPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignInPage],
        imports: [IonicModule.forRoot(), TranslateModule.forRoot()],
        providers: [{ provide: FormBuilder }],
      }).compileComponents();

      fixture = TestBed.createComponent(SignInPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reminder toggle default value is false', () => {
    expect(component.isRemindEnabled).toBeFalsy();
  });

  it('form invalid when empty', () => {
    expect(component.signInForm.invalid).toBeTruthy();
  });

  it('email field validation', () => {
    const email = component.signInForm.get('email');
    expect(email.valid).toBeFalsy();

    let errors = email.errors || {};
    expect(errors.required).toBeTruthy();

    email.setValue('test');
    errors = email.errors || {};
    expect(errors.email).toBeTruthy();

    email.setValue('test@test');
    errors = email.errors || {};
    expect(errors.email).toBeTruthy();

    email.setValue('test@test.com');
    errors = email.errors || {};
    expect(errors.email).toBeFalsy();
  });

  it('password field validation', () => {
    const password = component.signInForm.get('password');
    expect(password.valid).toBeFalsy();

    let errors = password.errors || {};
    expect(errors.required).toBeTruthy();

    password.setValue('test');
    errors = password.errors || {};
    expect(errors.minlength).toBeTruthy();

    password.setValue('test1');
    errors = password.errors || {};
    expect(errors.minlength).toBeFalsy();

    password.setValue('test123');
    errors = password.errors || {};
    expect(errors.minlength).toBeFalsy();
  });
});
