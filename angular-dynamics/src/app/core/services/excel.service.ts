import { Injectable } from '@angular/core';

// Libraries
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

// DevExtreme
import { DataGridCell, exportDataGrid } from 'devextreme/excel_exporter';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  onExporting(e: any, fileName: string, imgPropName: string = 'img'): void {
    const workbook: ExcelJS.Workbook = new ExcelJS.Workbook();
    const worksheet: ExcelJS.Worksheet = workbook.addWorksheet('Main sheet');

    const imgPromises: any[] = [];

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
      customizeCell: ({ excelCell, gridCell }) => {
        if(gridCell?.rowType === "data") {
          if(gridCell?.column?.dataField === imgPropName) {
            excelCell.value = undefined;
            imgPromises.push(
              new Promise((resolve, reject) => {
                this.addImage(gridCell?.value, workbook, worksheet, excelCell, resolve);
              })
            );
          }
        }
      }
    }).then(() => {
      Promise.all(imgPromises).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${fileName}.xlsx`);
        });
      });
    });
    e.cancel = true;
  }

  private addImage(url: string, workbook: any, worksheet: any, excelCell: any, resolve: any): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      const reader = new FileReader();
      reader.readAsDataURL(xhr.response);
      reader.onloadend = () => {
        const base64data = reader.result;
        const image = workbook.addImage({
          base64: base64data,
          extension: 'png',
        })
        worksheet.getRow(excelCell.row).height = 75;
        worksheet.addImage(image, {
          tl: { col: excelCell.col - 1, row: excelCell.row - 1 },
          br: { col: excelCell.col, row: excelCell.row }
        });
        resolve();
      }
    }
    xhr.onerror = () => {
      console.error('could not add image to excel cell');
    };
    xhr.send();
  }

}
