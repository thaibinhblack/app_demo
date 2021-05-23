import { HomePath } from '@/router/paths';

const home = {
  path: HomePath,
  component: () => import('@/views/Home')
};

export default home;
