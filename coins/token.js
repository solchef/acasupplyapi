/**
 * @title ACA Token
 * @symbol ACA
 * @implementation Dynamic
 * @cmcId aca-token
 */

module.exports = (callback, request) => {
    request('https://api.etherscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x9A3bBC0ee2D6300BcA88c4ff820e2987d62b4f63&apikey=ES851E1QZIN1ERWHIGINIEJXP3PZ8Q2ZDM', (error, response, body) => {
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
