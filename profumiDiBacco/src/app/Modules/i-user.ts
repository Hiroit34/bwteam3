import { IWine } from './i-wine';

export interface IUser {
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  password?: string;
  vendorOrNot: boolean;
  favoriteWine: IWine[];
}
