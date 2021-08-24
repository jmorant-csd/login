import { Component } from '@angular/core';
import { I18nHelper } from './core/services/helpers/i18n-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private readonly i18nHelper: I18nHelper) {
    this.initializeApp();
  }

  private initializeApp() {
    this.i18nHelper.setDefaultLocale();
  }

}
