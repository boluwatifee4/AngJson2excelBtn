import { TestBed } from '@angular/core/testing';

import { AngJson2excelBtnService } from './ang-json2excel-btn.service';

describe('AngJson2excelBtnService', () => {
  let service: AngJson2excelBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngJson2excelBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
