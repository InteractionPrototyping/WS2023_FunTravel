var app = new Framework7(

    {
        el:'#app',
        name: 'My App',
        id: 'com.myapp.test',
        panel: {
            swipe: true,

        },
routes: [
    {
        path: '/about',
        url: 'about.html',
    }
]
    }


);
var mainView = app.views.create('.view-main');
