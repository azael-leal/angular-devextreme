import { Component, OnInit } from '@angular/core';

// Models - Services
import { DynamicsService } from '../services';
import { Employees, Products, User } from '../models';

// Libraries
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

// DevExtreme
import { DataGridCell, exportDataGrid } from 'devextreme/excel_exporter';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  users: User[] = [];
  products: Products[] = [];
  employees: Employees[] = [];

  constructor(
    private readonly dynamicsService: DynamicsService
  ) {}

  ngOnInit(): void {
    this.employees = this.dynamicsService.getEmployees();
    this.dynamicsService.getUsers().subscribe((users: User[]) => this.users = users);
    this.products = this.dynamicsService.getProducts();
  }

  // onExportingBase64Default(e: any): void {
  //   const workbook: ExcelJS.Workbook = new ExcelJS.Workbook();
  //   const worksheet: ExcelJS.Worksheet = workbook.addWorksheet('Main sheet');

  //   exportDataGrid({
  //     component: e.component,
  //     worksheet: worksheet,
  //     topLeftCell: { row: 2, column: 2 },
  //     autoFilterEnabled: true,
  //     customizeCell: async ({ gridCell, excelCell }) => {
  //       const gridCellCopy: DataGridCell | undefined = gridCell;

  //       if(gridCellCopy?.rowType === "data") {
  //         if(gridCellCopy?.column?.dataField === "Picture") {
  //           excelCell.value = undefined;

  //           const image = workbook.addImage({
  //             base64: gridCellCopy?.value,
  //             extension: 'png',
  //           });

  //           worksheet.getRow(excelCell.row).height = 90;
  //           worksheet.addImage(image, {
  //             tl: { col: excelCell.col - 1, row: excelCell.row - 1 } as ExcelJS.Anchor,
  //             br: { col: excelCell.col, row: excelCell.row } as ExcelJS.Anchor,
  //           });
  //         }
  //       }
  //     }
  //   }).then(() => {
  //     workbook.xlsx.writeBuffer().then((buffer) => {
  //       saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");
  //     });
  //   });
  //   e.cancel = true;
  // }

  onExporting(e: any): void {
    const workbook: ExcelJS.Workbook = new ExcelJS.Workbook();
    const worksheet: ExcelJS.Worksheet = workbook.addWorksheet('Main sheet');

    const imgPromises: any[] = [];

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
      customizeCell: ({ excelCell, gridCell }) => {
        if(gridCell?.rowType === "data") {
          if(gridCell?.column?.dataField === "img") {
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
          saveAs(new Blob([buffer], { type: "application/octet-stream" }), "ExcelJSFormat.xlsx");
        });
      });
    });
    e.cancel = true;
  }

  // onExporting(e: any): void {
  //   const workbook: ExcelJS.Workbook = new ExcelJS.Workbook();
  //   const worksheet: ExcelJS.Worksheet = workbook.addWorksheet('Main sheet');

  //   const imgPromises: any[] = [];

  //   exportDataGrid({
  //     component: e.component,
  //     worksheet: worksheet,
  //     autoFilterEnabled: true,
  //     customizeCell: ({ excelCell, gridCell }) => {
  //       if(gridCell?.rowType === "data") {
  //         if(gridCell?.column?.dataField === "avatar") {
  //           excelCell.value = undefined;
  //           imgPromises.push(
  //             new Promise((resolve, reject) => {
  //               this.addImage(gridCell?.value, workbook, worksheet, excelCell, resolve);
  //             })
  //           );
  //         }
  //       }
  //     }
  //   }).then(() => {
  //     Promise.all(imgPromises).then(() => {
  //       workbook.xlsx.writeBuffer().then((buffer) => {
  //         saveAs(new Blob([buffer], { type: "application/octet-stream" }), "ExcelJSFormat.xlsx");
  //       });
  //     });
  //   });
  //   e.cancel = true;
  // }

  addImage(url: string, workbook: any, worksheet: any, excelCell: any, resolve: any): void {
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
