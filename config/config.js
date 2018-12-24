export default {
  singular: false,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true
      }
    ]
  ],
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: 'Helloworld'
        },
        {
          path: '/helloworld',
          component: 'Helloworld'
        },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
          ]
        },
        { path: '/puzzlecards', component: 'Puzzlecards' },
        {
          path: '/feedback',
          routes: [{ path: '/feedback', component: 'Feedback/Home' }]
        },
        {
          path: '/list',
          routes: [{ path: '/list', component: 'List/card' }]
        }
      ]
    }
  ],
  proxy: {
    '/test': {
      target: 'http://114.116.89.193:8999',
      changeOrigin: true
    }
  }
}
