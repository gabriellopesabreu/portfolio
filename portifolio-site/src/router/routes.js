const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/components/PortfolioList.vue'),
      },
      {
        path: 'sobre',
        component: () => import('src/components/AboutComponent.vue'),
      },
    ],
  },
];

export default routes;
