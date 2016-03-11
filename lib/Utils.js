'use strict';
let Q, Request, weather, arrays;
class utils {
    constructor(long){
        if(!long){long=10000;}
        this.long = long;
    }
    
    includes(where,find,start){
        return (where.substr(start).indexOf(find)!==-1);
    }

    startsWith(where,find,start){
        return (where.substr(start,where.length) === where);
    }

    static q(){
        if(!Q) Q = require('q-');
        return Q;
    }
    static request(){
        if(!Request) Request=require('request');
        return Request;
    };
    static Weather(){
        if(!weather) weather=require(__dirname+'/UtilsWeather');
        return weather;
    };
    static Arrays(){
        if(!arrays) arrays=require(__dirname+'/UtilsArr');
        return arrays;
    };
};

module.exports = utils;
