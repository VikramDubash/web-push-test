

let reg = navigator.serviceWorker.register('sw.js');

const applicationServerPublicKey = 'BAv79JOLjehxD8L44y557X6XKXoWAF5caxnxw9xDyBE9NLQzO5E6Rs-2ANwAYjIMhYHj6sraCpKxOa5SJiZZHmQ';


function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

reg.then(function (swReg) {

    swReg.pushManager.getSubscription()
        .then(function (subscription) {

            isSubscribed = !(subscription === null);

            if (isSubscribed) {
                console.log('User IS subscribed.');
            } else {
                console.log('User is NOT subscribed.');
            }

            if (!isSubscribed) {
                const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
                swReg.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: applicationServerKey
                })
                    .then(function (subscription) {
                        console.log('User is subscribed.');
                        console.log(subscription.toJSON())
                    });
            }
        })
});

