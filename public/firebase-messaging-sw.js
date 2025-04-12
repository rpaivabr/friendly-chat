importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = { 
  projectId: "friendlychat-62649", 
  appId: "1:197187600417:web:2338796e51848d8798e360", 
  storageBucket: "friendlychat-62649.firebasestorage.app", 
  apiKey: "AIzaSyA8BP8NOR_U6ClBtR30_ZaxUE97XD9qrOs", 
  authDomain: "friendlychat-62649.firebaseapp.com", 
  messagingSenderId: "197187600417" 
};
firebase.initializeApp(firebaseConfig);

if (firebase.messaging.isSupported()) {
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
}