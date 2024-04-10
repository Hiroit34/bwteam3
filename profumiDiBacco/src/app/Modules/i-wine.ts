export interface IWine {
  id: number;
  nome: string;
  annata: number;
  provenienza: string;
  tipo: string;
  prezzo: number;
  casa_vinicola: string;
  casa_vinicola_url: string;
  immagine_url?: string;
  descrizione: string;
}
