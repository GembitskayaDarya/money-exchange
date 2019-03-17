// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let num = {
        H: null,
        Q: null,
        D: null,
        N: null,
        P: null
    };
    if(currency === 0) {
        return {};
    }
    else if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else{
        let count;
        if(currency >= 50) {
           num.H = parseInt(currency/50, 10);
           currency %= 50;
        }

        if(currency >= 25) {
            num.Q = parseInt(currency/25, 10);

        }
        currency %= 25;
        if(currency/10 !== 0) {
            num.D = parseInt(currency/10, 10);

        }
        currency %= 10;
        if(currency/5 !== 0) {
            num.N = parseInt(currency/5, 10);

        }
        currency %= 5;
        if(currency !== 0) {
            num.P = parseInt(currency, 10);

        }
        if(num.H === null || num.H === 0){
            delete num.H;
        }
        if(num.Q === null || num.Q === 0){
            delete num.Q;
        }
        if(num.D === null || num.D === 0){
            delete num.D;
        }
        if(num.N === null || num.N === 0){
            delete num.N;
        }
        if(num.P === null || num.P === 0){
            delete num.P;
        }
        return num;
    }



}
