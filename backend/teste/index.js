var mathFun = require('./mathFun');

for(let i = 0; i <= 10; i++){
    mathFun.eventDoubler(i, mathFun.handleResults);
}

console.log("--------" + mathFun.maxTime);

