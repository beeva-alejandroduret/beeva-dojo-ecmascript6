'use strict';

var Utils = require(__dirname + '/Utils');

class Arrays extends Utils {
    constructor(size) {
        super(size);
        this.arr = [];
    }
    getRandom(size) {
        size = size || this.long;
        if (size !== this.arr.length) {
            this.arr.splice(0, this.arr.length);
            for (let i = 0; i < size; i++) this.arr.push(i);
        }
        return this.shuffle(this.arr);
    };

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;

            //no funciona en node
            // [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    };

    findIndex(where, what) {
        return where.findIndex(el => el === what);
    };

    find(where, what) {
        return where.find(el => el === what);
    };

    objectIt(arr) {
        var obj = {
            arr,
            classArray: this.arr,
            list: function () {
                let res = {};
                for (let i = 0, len = this.arr.length; i < len; i++)
                    res['item_' + i] = this.arr[i];

                /*for (let i of range(0, arr.length)) {
                    res['item_' + i] = this.arr[i];
                }*/



                return res;
            },
            getItem: function (i) {
                return {
                    value: this.arr[i],
                    index: i,
                    ['item_' + i]: this.arr[i]
                };
            }
        };
        return obj;
    };
};



//UtilsArr.prototype = new Utils();

module.exports = Arrays;
