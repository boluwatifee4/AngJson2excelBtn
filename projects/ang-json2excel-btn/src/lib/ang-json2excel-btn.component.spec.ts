import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngJson2excelBtnComponent } from './ang-json2excel-btn.component';

describe('AngJson2excelBtnComponent', () => {
  let component: AngJson2excelBtnComponent;
  let fixture: ComponentFixture<AngJson2excelBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngJson2excelBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngJson2excelBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
