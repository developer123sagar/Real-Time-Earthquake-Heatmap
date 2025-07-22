import axios from 'axios';
import { IServicesData, IAwardsData } from '@Api/dashboard/types';

import { api } from '.';

export const getServices = () => api.get<IServicesData[]>('/services');

export const getAwards = () => api.get<IAwardsData[]>('/awards');

export const createPost = payload =>
  axios.post('https://jsonplaceholder.typicode.com/posts', payload);
