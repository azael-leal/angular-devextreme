import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models - Services
import { Product } from '../models';
import { ExcelService } from '../../../core/services';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private readonly excelService: ExcelService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({products}) => this.products = products);
  }

  onExporting(e: any): void {
    this.excelService.onExporting(e, 'exampleExcel');
  }

}
