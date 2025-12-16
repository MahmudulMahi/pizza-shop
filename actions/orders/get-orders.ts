'use server';

import { fetchApiClient } from '@/lib/oneentry';
import { cookies } from 'next/headers';

export const getOrders = async () => {


    const orders = await apiClient?.Orders.setAccessToken(
      accessToken
    ).getAllOrdersByMarker('orders');

    return orders;
  } catch (error) {
    console.error({ error });
  }
};
