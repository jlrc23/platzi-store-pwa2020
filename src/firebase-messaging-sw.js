importScripts('https://www.gstatic.com/firebasejs/6.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.5.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAkUFj3bx-_H4tCu65QpGxLVzt2lAEfuYY",
    authDomain: "angular-pwa-platzi-12da0.firebaseapp.com",
    projectId: "angular-pwa-platzi-12da0",
    storageBucket: "angular-pwa-platzi-12da0.appspot.com",
    messagingSenderId: "46838844689",
    appId: "1:46838844689:web:3bdfa05fbbb4c785b6d0b0",
    measurementId: "G-PC82K6Y6PY"
  });
const messaging = firebase.messaging();

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
/*
messaging.getToken({vapidKey: '46838844689'}).then((currentToken) => {
    if (currentToken) {
      sendTokenToServer(currentToken);
      updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log('No registration token available. Request permission to generate one.');
      // Show permission UI.
      updateUIForPushPermissionRequired();
      setTokenSentToServer(false);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving registration token. ', err);
    setTokenSentToServer(false);
  });*/