'use server';
import { fetchApiClient } from '@/lib/oneentry';

export const getProductDetails = async (productId: number) => {
  const apiClient = await fetchApiClient();



  try {
    const product = await apiClient?.Products.getProductById(
      productId,
      'en_US'
    );
    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw new Error('Failed to fetch product.');
  }
};
