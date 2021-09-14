import { EventEmitter } from "@angular/core";
import { FormGroup } from '@angular/forms';

export interface IComponent {
  generalFilter?: string;
  searchForm?: FormGroup;
  onMoveEmitter?: EventEmitter<any>;
  onClickEmitter?: EventEmitter<any>;
  onDetailEmitter?: EventEmitter<any>;
  onSearchEmitter?: EventEmitter<any>;
  onAdd?(...args: any): void;
  onEdit?(...args: any): void;
  onSave?(...args: any): void;
  onMove?(...args: any): void;
  onClick?(...args: any): void;
  onSearch?(...args: any): void;
  onCancel?(...args: any): void;
  onCreate?(...args: any): void;
  onDetail?(...args: any): void;
  onDelete?(...args: any): void;
  onUpdate?(...args: any): void;
  initData?(...args: any): void;
  onConfirm?(...args: any): void;
  initForm?(...args: any): void;
  onGoToList?(...args: any): void;
  initObservers?(...args: any): void;
  initValidations?(...args: any): void;
  onGeneralFilter?(...args: any): void;
  getDataFromRoute?(...args: any): void;
  zoneValidations?(...args: any): void;
  plazaValidations?(...args: any): void;
  regionValidations?(...args: any): void;
  organizationValidations?(...args: any): void;
}
