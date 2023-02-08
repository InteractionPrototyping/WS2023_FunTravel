var $ = Dom7;


var app = new Framework7({
  name: 'FunTravel', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element


  // App store

  // App routes
  routes: routes,
});

var dialog = app.dialog.create;
// Login Screen Demo
$('#my-login-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});