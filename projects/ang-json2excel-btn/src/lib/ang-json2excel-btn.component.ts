import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { AngJson2excelBtnService } from './ang-json2excel-btn.service';
@Component({
  selector: 'ang-json2excel-btn',
  template: `
    <button
      (click)="json2ExcelInit()"
      class="ang-json2excel-btn"
    >
      {{ _btnText }}
    </button>
  `,
  // get styles from _btnClass
  styles: [
    `
    `,
  ],
})
export class AngJson2excelBtn {
  _btnText: string = 'Export to Excel';
  _fileName: string = 'export';
  _json: any = null;


  // Getters and Setters
  get btnText(): string {
    return this._btnText;
  }
  @Input()
  set btnText(value: string) {
    this._btnText = value;
  }
  get fileName(): string {
    return this._fileName;
  }
  @Input()
  set fileName(value: string) {
    this._fileName = value;
  }
  get json(): any {
    return this._json;
  }
  @Input()
  set json(value: any) {
    this._json = value;
  }


  constructor(private angJson2excelBtnService: AngJson2excelBtnService) {}

  json2ExcelInit(): void {
    if (this._json.length) {
      this.angJson2excelBtnService.exportToExcel(this._json, this._fileName);
    } else {
      console.error('No data to export');
    }
  }
  ngOnInit(): void {}
}

