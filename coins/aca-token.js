/**
 * @title Bitcoin
 * @symbol BTC
 * @implementation Dynamic
 * @cmcId bitcoin
 */

module.exports = (callback, request) => {
    request('https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x9EB6935AEa6aFb5Bc6d1A74bE0C2F78280ab6448&apikey=ES851E1QZIN1ERWHIGINIEJXP3PZ8Q2ZDM', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            body = Number(body) / 100000000;
            var res = response.body;
            res = JSON.parse(res);
            console.log(res)

            // Coins burnt
            body -= 3100;
            callback({
                c: res.result / 1000000000,
                t: 100000000,
                m: 100000000
            });
        } else {
            callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
        }
    });
};