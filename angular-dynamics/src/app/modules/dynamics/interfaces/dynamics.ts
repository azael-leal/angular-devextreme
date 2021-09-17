import { Employee, Product, User } from "../models";

export interface IDynamicsResolver {
  employees: Employee,
  users: User,
  products: Product
}
