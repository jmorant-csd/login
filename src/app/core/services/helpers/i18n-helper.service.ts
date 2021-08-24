import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class I18nHelper {
  constructor(
    @Inject(LOCALE_ID) private readonly defaultLocale: string,
    private readonly translateService: TranslateService
  ) {
    this.translateService.addLangs([this.defaultLocale]);
  }

  setDefaultLocale() {
    const availableLocales = this.translateService.getLangs();
    const browserLocale = this.translateService.getBrowserCultureLang();

    if (availableLocales.indexOf(browserLocale) > -1) {
      this.translateService.use(browserLocale);
    } else {
      this.translateService.setDefaultLang(this.defaultLocale);
    }
  }
}
