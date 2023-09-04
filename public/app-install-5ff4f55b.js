// contents of service-worker.js

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then(function (registrations) {
      let unregisterPromises = [] // array to store all the unregister promises

      for (let registration of registrations) {
        //unregister service worker for old domain
        let unregisterPromise = registration.unregister()
        unregisterPromises.push(unregisterPromise)
      }

      // Wait for all the unregister promises to complete
      return Promise.all(unregisterPromises)
    })
    .then(function () {
      // Reload the page once all service workers have been unregistered
      window.location.reload()
    })
    .catch(function (err) {
      console.log('Fail: ', err)
    })
}
