const delayms = 1;

function getCurrentCity(callback) {
  setTimeout(function () {

    const city = "New York, NY";
      callback(null, city);

  }, delayms)
}

function getWeather(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get weather"));
      return;
    }

    const weather = {
      temp: 50
    };

    callback(null, weather)

  }, delayms)
}


function getForecast(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get forecast"));
      return;
    }

    const fiveDay = {
      fiveDay: [60, 70, 80, 45, 50]
    };

    callback(null, fiveDay)

  }, delayms)
}
suite.only("fetchCurrentCity");




test("fetchCurrentCity", (done) => {

    function fetchCurrentCity(errorCB, successCB) {

        getCurrentCity(function (error, result) {
            if (error) {
                errorCB(error);
                return;
            }
            successCB(result);
        })
}

    fetchCurrentCity(
        error => done(error),
        results => done());
})


test.only("fetchCurrentCity with multiple cb later on", (done) => {
    function fetchCurrentCity() {
        const operation = [];

        getCurrentCity(function (error, result) {
            if (error) {
                for (let i = 0; i< operation.length; i++){
                    operation[i].onError(error);
                }
                return;
            }
            for (let i = 0; i< operation.length; i++){
                operation[i].onSuccess(result);
            }
            done();
        })

        operation.addCallback = function(onError, onSuccess){
            operation.push({onError, onSuccess})
        }
        return operation;

    }

    //initiate operation
    let f = fetchCurrentCity();
    //set callbacks
    f.addCallback(error => done(error), results => console.log("AEEEEE"));
    f.addCallback(error => done(error + "2"), results => console.log("AEEEEE2"));
})