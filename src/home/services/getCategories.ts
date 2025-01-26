import { clientAxios } from "../../common/config/clientAxios";

export interface ICategory {
  id: number, 
  name: string, 
  icon: string
}

export const getCategories = () => clientAxios.get<{data: ICategory[]}>("/api/categories")