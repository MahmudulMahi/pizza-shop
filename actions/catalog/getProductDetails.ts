'use server';
import { fetchApiClient } from '@/lib/oneentry';

export const getProductDetails = async (productId: number) => {
  const apiClient = await fetchApiClient();

  if (!productId) {
    throw new Error('Product ID is required.');
  }


};
