import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class AngJson2excelBtnService {

  constructor() {
    
   }

   public exportToExcel(element: any, fileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);
    // generate workbook and add the worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
    // save to file
    XLSX.writeFile(workbook, `${fileName}${EXCEL_EXTENSION}`);

  }
}
