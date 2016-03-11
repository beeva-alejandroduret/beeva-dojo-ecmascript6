'use strict';
var Utils = require(__dirname+'/Utils');
class UtilsWeather {
    //var $this = this;
    constructor(){}
    
    get(city,cb){
        //var q = this.q();
        return new Promise( (resolve,reject) =>{
            if(city){
                var req = this.request();
                req.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},es&lang=sp&units=metric&appid=91ace8606d31eb909caff50f9cd5bffa`,(err,res,body)=>{
                    if (!err && res.statusCode === 200) {
                        body=JSON.parse(body);
                        if(cb) cb(null,body);
                        return resolve(body);
                    }else{
                        if(cb) cb(err);
                        return reject();
                    }
                });
            }else{
                var err = "Ha de introducir una ciudad";
                if(cb) cb(err);
                return reject(err);
            }
        });
    };

    write(city,w){
        console.log(`El tiempo en la ciudad de ${city} es: ${w.weather[0].description} y ${w.main.temp}º`);
    };

    print(city){
        this.get(city).then(
            (w)=> {this.write(city,w);},
            ()=>console.log('Ha de indicar una ciudad')
        );
    };
};

//UtilsWeather.prototype = new Utils();

module.exports = UtilsWeather;
