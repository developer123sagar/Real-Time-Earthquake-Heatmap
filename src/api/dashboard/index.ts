import { useMutation, useQuery } from '@tanstack/react-query';
import { createPost, getAwards, getServices } from '@Services/dashboard';
import { TQueryOptions, TMutationOptions } from '@Types/index';

import { IAwardsData, IPostsPayload } from './types';

export const useGetServicesQuery = () => {
  return useQuery({
    queryKey: ['get-services'],
    queryFn: async () => {
      const response = await getServices();
      return response.data;
    },
  });
};

export const useGetAwardsQuery = (
  queryOptions?: TQueryOptions<IAwardsData[]>,
) => {
  return useQuery({
    queryKey: ['get-awards'],
    queryFn: async () => {
      const response = await getAwards();
      return response.data;
    },
    ...queryOptions,
  });
};

export const useCreatePostMutation = (
  mutationOptions?: TMutationOptions<Record<string, any>, IPostsPayload>,
) => {
  return useMutation({
    mutationFn: createPost,
    ...mutationOptions,
  });
};
