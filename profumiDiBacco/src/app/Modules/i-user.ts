import { IWine } from './i-wine';

export interface IUser {
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  password?: string;
  vendorOrNot: boolean;
  listaVini:[];
  pIva?: number
  nomeAzienda?: string
  sedeLegale?: string
  addedWine?: IWine[]
  favoriteWine?: IWine[]
}
