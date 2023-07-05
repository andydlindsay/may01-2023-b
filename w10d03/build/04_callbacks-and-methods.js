"use strict";
const agatha = {
    penName: 'agatha christie',
    realName: 'alice bob',
    writeBook: (title) => {
        return true;
    }
};
const higherOrderFunction = (callback) => {
    const returnVal = callback('carol');
};
higherOrderFunction((x) => { return 'hello'; });
