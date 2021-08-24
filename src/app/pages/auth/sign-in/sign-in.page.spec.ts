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
});
