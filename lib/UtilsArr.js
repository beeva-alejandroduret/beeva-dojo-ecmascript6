'use strict';
let Utils = require(__dirname+'/Utils');
let arr = [];
class UtilsArr extends Utils{
    constructor(long){
        super(long);
    }
    getRandom(size){
        size = size || this.long;
        if(size !== arr.length){
            arr.splice(0,arr.length);
            for(var i=0;i<size;i++) arr.push(i);
        }
        return this.shuffle(arr);
    };

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    findIndex (where,what){
        for(var i = 0;i<where.length;i++){
            if(where[i] === what) return i;
        }
        return -1;
    };

    find(where,what){
        var index = this.findIndex(where,what);
        return (index !== -1)?where[index]:undefined;
    };

    objectIt(arr) {
        var obj = {
            arr : arr,
            classArray : this.arr, // y si ponemos this.arr ??
            list : function(){
                var res = {};
                for(var i=0, len = this.arr.length;i<len;i++) res['item_'+i]=this.arr[i];
                return res;
            },
            getItem : function(i){
                var it = {
                    value : this.arr[i],
                    index : i
                };
                it['item_'+i]=this.arr[i];
                return it;
            }
        };
        return obj;
    };
};

//UtilsArr.prototype = new Utils();

module.exports = UtilsArr;
