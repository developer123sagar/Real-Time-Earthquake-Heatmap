import type { AxiosResponse } from 'axios';
import type {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

// Generic type for query options
export type TQueryOptions<
  TData,
  TError = Error,
  TQueryKey extends QueryKey = QueryKey,
> = UseQueryOptions<TData, TError, TData, TQueryKey>;

// Generic type for mutation options
export type TMutationOptions<TData, TVariables, TError = Error> = Omit<
  UseMutationOptions<AxiosResponse<TData>, TError, TVariables>,
  'mutationFn'
>;
