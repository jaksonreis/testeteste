import i18next from 'i18next';

import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import pt from './i18n/pt';
import Dashboard from '.';


i18next.addResourceBundle('pt', 'Dashboard', pt);
i18next.addResourceBundle('en', 'Dashboard', en);
i18next.addResourceBundle('tr', 'Dashboard', tr);
i18next.addResourceBundle('ar', 'Dashboard', ar);

const DashboardConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
  ],
};

export default DashboardConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default ExampleConfig;
*/
