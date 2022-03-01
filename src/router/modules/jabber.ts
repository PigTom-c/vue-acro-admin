export default {
  path: 'jabber',
  name: 'jabber',
  component: () => import('@/views/jabber/index.vue'),
  meta: {
    locale: 'menu.jabber',
    icon: 'icon-face-smile-fill',
    requiresAuth: true,
  },
  children: [
    {
      path: 'today',
      name: 'today',
      component: () => import('@/views/jabber/today/index.vue'),
      meta: {
        locale: 'menu.jabber.today',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};
