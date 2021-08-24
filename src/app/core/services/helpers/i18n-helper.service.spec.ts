import { TestBed } from '@angular/core/testing';

import { I18nHelper } from './i18n-helper.service';

describe('I18nHelperService', () => {
  let service: I18nHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
