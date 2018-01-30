var maxTime = 1000;
var eventDoubler = function(v, cb){
    let time = Math.floor((Math.random() * maxTime) + 1);
    setTimeout(function(){
        if ((v % 2) == 0){
            cb(null, v, time)
        }else{
            cb(new Error(v), null, time)
        }
    }, time)
};

var handleResults = function(err, results, time){
    if (err){
        console.log("ERROR: " + err + "\t" + time)
    }else{
        console.log("RESULTS: " + results + "\t" + time)
    }
};

module.exports.eventDoubler = eventDoubler;
module.exports.handleResults = handleResults;
module.exports.maxTime = maxTime;