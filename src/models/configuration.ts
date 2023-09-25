// eslint-disable-next-line import/named
import { LoadableComponent } from '@loadable/component';

export type RouteConfig = {
  path: string;
  component: LoadableComponent<unknown>;
  auth?: boolean;
  withoutLayout?: boolean;
};
