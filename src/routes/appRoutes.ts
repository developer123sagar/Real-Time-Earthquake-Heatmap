import PublicPage from '@Views/PublicPage';
import { IRoute } from './types';
import MapSection from '@Components/PublicPage/MapSection';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Public Page',
    component: MapSection,
    authenticated: false,
  },
];

export default appRoutes;
