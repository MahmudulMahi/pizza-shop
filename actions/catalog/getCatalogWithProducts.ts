'use server';
import { IPagesEntity } from 'oneentry/dist/pages/pagesInterfaces';
import { fetchApiClient } from '@/lib/oneentry';
import { getCatalogs } from './getCatalog';

export const getCatalogWithProducts = async () => {
  const apiClient = await fetchApiClient();
  const catalogs: IPagesEntity[] = await getCatalogs();

  const catalogWithProducts = [];

    return catalogWithProducts;
  }
};
