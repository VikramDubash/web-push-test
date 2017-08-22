const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey: "BAv79JOLjehxD8L44y557X6XKXoWAF5caxnxw9xDyBE9NLQzO5E6Rs-2ANwAYjIMhYHj6sraCpKxOa5SJiZZHmQ",
    privateKey: "JAJle7oGi51J0ybjkl0wvEzUYB9NfaRBLGXs5jA_uLw"
}

//webpush.generateVAPIDKeys();

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription1 = {
    endpoint: "https://fcm.googleapis.com/fcm/send/d79Dw2h_2L0:APA91bFyds_rrK82MQoRstDBPjE11rP8vpGSLShwh-K5TeBDVwDvo2ZN3wg-ycjD3pl_UXcs-myL4leLWUxctTxPb2-q0RFqWrIHqSThr6e05zxcj4a7hWuQnhWDwKvNbSE0rh94RTZ9",
    keys: {
        auth: "XBrF9Lh7ApNjSH6IVp6WfA==",
        p256dh: "BB_LpvZGc9NcLaBpdIqSDOAbbPjSj7PBuptQSIvz33FAnGXJS93GG7NmQ7K7cSb2TIrpU9KPaYXOIVPLImLws2Q="
    }
};

const pushSubscription = {
    endpoint: "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABZm5UHNdIppYEyzK8UfQz2fAIfbzgyU6BV0Z70LbWW_bMnnfag7fquAMr6qz9HpwusVe5axh4LMxegF_O7HGrda_ss1LlUJO6SsCtb1cbs4i6lwNscbtdOw76Ztx2WhgfTdDjdGMTEXE2M_YsadG9ulV9j91Y_cEpaqovVc2OKznvISoE",
    keys: {
        auth: "tR5ydH_Y6L35MZB5-GtQtg",
        p256dh: "BKB2xWzyqV_N9RfpwSl82mgstkPojszPl-CBb2rchHkXLkdZpYq9UzCb1l78NHhKcjBKwIuRJrcHnEjllfQGn6U"
    }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text')
webpush.sendNotification(pushSubscription1, 'Your Push Payload Text')
    // .then((res) => {
    //     console.log(res)
    // });