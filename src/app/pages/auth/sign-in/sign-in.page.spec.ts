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
      spyOn(console, 'log');
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

  it('form is valid when email and password fields are filled (and valid)', () => {
    const email = component.signInForm.get('email');
    const validEmail = 'test@test.com';
    const password = component.signInForm.get('password');
    const invalidPassword = 'test';
    const validPassword = 'test1';

    email.setValue(validEmail);
    password.setValue(invalidPassword);
    expect(component.signInForm.valid).toBeFalsy();

    password.setValue(validPassword);
    expect(component.signInForm.valid).toBeTruthy();
  });

  it('isSubmitButtonClicked should be true when onSubmit()', () => {
    component.onSubmit();
    expect(component.isSubmitButtonClicked).toBeTruthy();
  });

  it('console.log should be called when form is valid', () => {
    const email = component.signInForm.get('email');
    const password = component.signInForm.get('password');
    email.setValue('test@test.com');
    password.setValue('test123');

    component.onSubmit();
    expect(console.log).toHaveBeenCalled();
  });
});
