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

  it('initial state', () => {
    expect(component.isRemindEnabled).toBeFalsy();
    expect(component.isSubmitButtonClicked).toBeFalsy();
    expect(component.signInForm).toBeDefined();
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

  it('form valid when fields filled (and valid)', () => {
    const email = component.signInForm.get('email');
    const password = component.signInForm.get('password');
    email.setValue('test@test.com');
    password.setValue('test123');

    expect(component.signInForm.valid).toBeTruthy();
  });
});
