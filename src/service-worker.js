// contents of service-worker.js

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      //unregister service worker for old domain
      registration.unregister()
    }
  }).catch(function (err) {
    console.log('Fail: ', err);
  });
}