import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';

//Componentes de tela
import Dashboard from '../main/Dashboard';
import Error404Page from '../main/404/Error404Page';

//Arquivos de configuração
import SignUpConfig from '../main/sign-up/SignUpConfig';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import ExampleConfig from '../main/example/ExampleConfig';
import DashboardConfig from '../main/Dashboard/DashboardConfig';

const routeConfigs = [ExampleConfig, DashboardConfig, SignOutConfig, SignInConfig, SignUpConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="/example" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
