export interface IResolver {
  get?(...args: any): any;
  getResolverData?(...args: any): any;
}
