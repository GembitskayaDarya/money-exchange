// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency === 0) {
        return {};
    }
    else if(currency > 10000){
        return {"error: \"You are rich, my friend! We don't have so much coins for exchange\""};
    }
    else{
        let count;
        if(currency/50 !== 0) {
            count.put("\"H\"" + ":" + currency/50);

        }
        currency %= 50;
        if(currency/25 !== 0) {
            count.put(",\"Q\"" + ":" + currency/25);

        }
        currency %= 25;
        if(currency/10 !== 0) {
            count.put("\"D\"" + ":" + currency/10);

        }
        currency %= 10;
        if(currency/5 !== 0) {
            count.put("\"N\"" + ":" + currency/5);

        }
        currency %= 5;
        if(currency !== 0) {
            count.put("\"H\"" + ":" + currencynp);

        }
        return {count};
    }

}
