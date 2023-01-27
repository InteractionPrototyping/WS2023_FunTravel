
var routes = [
  {
    path: '/',
    url: './index.html',
  },

  {
    path: '/test/',
    componentUrl: './pages/jonas_test.html',
  },
  {
    path: '/lisbon/',
    componentUrl: './pages/lisbon.html',
  },{
    path: '/wishes/',
    componentUrl: './pages/wishes.html',
  },
  {
    path: '/pastel/',
    componentUrl: './pages/pastel_de_nata.html',
  },
  {
    path: '/secret/',
    componentUrl: './pages/secret.html',
  },
  {
    path: '/fun/',
    componentUrl: './pages/options_fun.html',
  },
  {
    path: '/sweets/',
    componentUrl: './pages/options_sweets.html',
  },
  {
    path: '/onboarding2/',
    componentUrl: './pages/onboarding2.html',
  },

  {
    path: '/profile/',
    componentUrl: './pages/create_profile.html',
  },
  {
    path: '/introduction/',
    componentUrl: './pages/introduction.html',
  },
  {
    path: '/location/',
    componentUrl: './pages/location_selection.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
