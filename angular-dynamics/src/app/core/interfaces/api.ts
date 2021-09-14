export interface IApi {
  get?(...args: any): any;
  move?(...args: any): any;
  create?(...args: any): any;
  update?(...args: any): any;
  delete?(...args: any): any;
  search?(...args: any): any;
  activate?(...args: any): any;
}
