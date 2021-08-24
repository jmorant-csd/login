import { HttpClient, HttpClientModule } from '@angular/common/http';
import '@angular/common/locales/global/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export const httpLoaderFactory = (httpClient: HttpClient) =>
  new MultiTranslateHttpLoader(httpClient, [
    { prefix: './assets/i18n/', suffix: '.json' },
    { prefix: './assets/i18n/auth/', suffix: '.json' },
  ]);
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
})
export class CoreModule {}
