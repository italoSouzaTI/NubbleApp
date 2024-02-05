export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}
/**
 * @description Interface que define o formato dado da api
 * @template Data Tipo do dado da pagina
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}
