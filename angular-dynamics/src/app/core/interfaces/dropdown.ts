export interface IDropdown {
  id: number | null;
  name: string;
  dependsId?: number;
  listDependsId?: number[];
  disabled?: boolean;
}

export interface IDropdownCatalog {
  catalogueName: string;
  item: IDropdown[];
}
