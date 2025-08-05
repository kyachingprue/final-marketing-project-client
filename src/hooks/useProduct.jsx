import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { users } = useAuth();
  // Tan stack query use in this project
  const { isLoading, data: product = [], refetch } = useQuery({
    queryKey: ['product', users?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${users.email}`)
      return res.data
    }
  })

  return [product, isLoading, refetch]
};

export default useProduct;