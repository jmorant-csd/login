import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/http/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignInPage } from './sign-in.page';

describe('SignInPage', () => {
  let component: SignInPage;
  let fixture: ComponentFixture<SignInPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(
    waitForAsync(() => {
      const mockAuthService = jasmine.createSpyObj('AuthService', ['signIn']);

      TestBed.configureTestingModule({
        declarations: [SignInPage],
        imports: [
          IonicModule.forRoot(),
          TranslateModule.forRoot(),
          FormsModule,
          ReactiveFormsModule,
          SharedModule,
        ],
        providers: [
          { provide: FormBuilder },
          {
            provide: AuthService,
            useValue: mockAuthService,
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SignInPage);
      component = fixture.componentInstance;
      authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
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

  it('should show field error message when form is invalid', () => {
    component.onSubmit();
    fixture.detectChanges();

    const elementClass = '.invalid-input';
    const elementNode = fixture.debugElement.query(By.css(elementClass));

    expect(elementNode).not.toBeNull();
  });

  it('should call signIn method from AuthService on form submit (if form is valid)', () => {
    const email = component.signInForm.get('email');
    const password = component.signInForm.get('password');
    const validEmail = 'test@test.com';
    const validPassword = 'test1';

    email.setValue(validEmail);
    password.setValue(validPassword);

    component.onSubmit();
    expect(authServiceSpy.signIn).toHaveBeenCalledWith({
      email: validEmail,
      password: validPassword,
    });
  });
});
