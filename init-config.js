const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: '.env'}); ;

const envFile = `export const environment = {
  firebase: { 
    projectId: "${process.env.FIREBASE_PROJECT_ID}", 
    appId: "${process.env.FIREBASE_APP_ID}", 
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}", 
    apiKey: "${process.env.FIREBASE_API_KEY}", 
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}", 
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}" 
  }
};`;
const envTargetPath = path.join(__dirname, './src/environments/environment.ts');
fs.writeFile(envTargetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log(successColor, `${checkSign} Successfully generated src/environments/environment.ts`);
    }
});

// const swFile = `importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// const firebaseConfig =  { 
//   projectId: "${process.env.FIREBASE_PROJECT_ID}", 
//   appId: "${process.env.FIREBASE_APP_ID}", 
//   storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}", 
//   apiKey: "${process.env.FIREBASE_API_KEY}", 
//   authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}", 
//   messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}" 
// };
// firebase.initializeApp(firebaseConfig);

// if (firebase.messaging.isSupported()) {
//   const messaging = firebase.messaging();
  
//   messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//       body: payload.notification.body,
//       icon: payload.notification.image,
//     };
  
//     self.registration.showNotification(notificationTitle, notificationOptions);
//   });
// }`;
// const swTargetPath = path.join(__dirname, './public/firebase-messaging-sw.js');
// fs.writeFile(swTargetPath, swFile, (err) => {
//     if (err) {
//         console.error(err);
//         throw err;
//     } else {
//         console.log(successColor, `${checkSign} Successfully generated public/firebase-messaging-sw.js`);
//     }
// });

