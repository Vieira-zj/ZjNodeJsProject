/**
 * Created by zhengjin on 2016/11/14.
 */

// demo 01, promise
//function test(resolve, reject) {
//    var timeOut = Math.random() * 2;
//    console.log('set timeout to: ' + timeOut + ' seconds.');
//
//    setTimeout(function () {
//        if (timeOut < 1) {
//            console.log('call resolve()...');
//            resolve('200 OK');
//        } else {
//            console.log('call reject()...');
//            reject('timeout in ' + timeOut + ' seconds.');
//        }
//    }, timeOut * 1000);
//}
//
//// then == resolve, catch == reject
//new Promise(test).then(function (result) {
//    console.log('pass：' + result);
//}).catch(function (reason) {
//    console.log('failed: ' + reason);
//});


// demo 02, promise, multiple then
//function multiply(input) {
//    return new Promise(function (resolve, reject) {
//        console.log('calculating ' + input + ' * ' + input + '...');
//        setTimeout(resolve, 500, input * input);
//    })
//}
//
//function add(input) {
//    return new Promise(function (resolve, reject) {
//        console.log('calculating ' + input + ' + ' + input + '...');
//        setTimeout(resolve, 500, input + input);
//    });
//}
//
//var p = new Promise(function (resolve, reject) {
//    console.log('start new Promise...');
//    resolve(2);
//});
//
//p.then(multiply).then(add).then(multiply).then(add).then(function (result) {
//   console.log('Got value: ' + result);
//});


// demo 03, promise
//var p1 = new Promise(function (resolve, reject) {
//    setTimeout(resolve, 700, 'P1');
//});
//
//var p2 = new Promise(function (resolve, reject) {
//    setTimeout(resolve, 500, 'P2');
//});
//
//// run p1 and p2, and exec then after both p1 and p2 done
//Promise.all([p1, p2]).then(function (results) {
//    console.log(results);
//});
//
//// run p1 and p2, and exec then when p1 or p2 done
//Promise.race([p1, p2]).then(function (results) {
//    console.log(results);
//});


// demo 04, generator
//function* Add(x) {
//    yield x + 1;
//    yield(null);
//    var y = 6;
//    return x + y;
//}
//
//function* Add(x) {
//    yield x + 1;
//    var y = yield null;
//    return x + y;
//}
//
//var gen = Add(5);
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next(6).value);


// demo 05, utilities
//var util = require('util');
//
//var fnHello = function (name, times) {
//    console.log(util.format('Hello, %s; invoked at times %d.', name, times));
//};
//fnHello('ZhengJin', 5);


// demo 06, setTimeOut
// ex1
//setTimeout(function fnHello() {
//    console.log('hello');
//}, 2000);

// ex2
//var fnHello = function () {
//    console.log('hello');
//};
//setTimeout(function () {
//    fnHello();
//}, 2000);

// ex3
//var fnHello = function () {
//    console.log('hello');
//};
//setTimeout(fnHello, 2000);

// ex4
// pass argument
//var fnHello = function (message) {
//    console.log('hello' + message);
//};
//setTimeout(fnHello, 2000, 'ZhengJin');


// demo 07, generator
//function* test(p) {
//    console.log(p);
//    var a = yield p + 1;
//    console.log(a);  // 3
//}
//
//var g = test(1);
//var ret;
//ret = g.next();
//console.log(ret);
//ret = g.next(ret.value + 1);
//console.log(ret);


// demo 08, search path
//console.log(module.paths);


// demo 09, fn list
//var fn1 = function (message) {
//    console.log('fn1: ' + message);
//};
//var fn2 = function (message) {
//    console.log('fn2: ' + message);
//};
//var fnList = [fn1, fn2];

//var fnList = [
//    function (message) {
//        console.log('fn1: ' + message);
//    },
//    function (message) {
//        console.log('fn2: ' + message);
//    }];
//
//for (var i = 0, length = fnList.length; i < length; i++) {
//    fnList[i](i);
//}


// demo 10, generator
//function* fn() {
//    // yield fn instead of expression
//    yield function (callback) {
//        console.log(callback.toString());
//    }
//}
//
//var result = fn();
//var step = result.next();  // return fn
//console.log(step);
//console.log(step.value);
//step.value(function () {  // 1. set callback in fn; 2. run fn
//    console.log('generator with fn');
//});


// demo 11, generator
// method 1: callback
//function timeDelay(waitTime, callback) {
//    setTimeout(function () {
//        callback("Pause for " + waitTime);
//    }, waitTime);
//}
//
//timeDelay(3000, function (message) {
//    console.log(message);
//    timeDelay(1000, function (message) {
//        console.log(message);
//        timeDelay(500, function (message) {
//            console.log(message)
//        })
//    })
//});


// method 2: promise
//function timeDelay(waitTime) {
//    return new Promise(function (resolve) {
//        setTimeout(function () {
//            resolve("Pause for " + waitTime);
//        }, waitTime);
//    });
//}
//
//timeDelay(3000)
//    .then(function (resolve) {
//        console.log('step1');
//        console.log(resolve);
//        return timeDelay(1000);
//    })
//    .then(function (resolve) {
//        console.log('step2');
//        console.log(resolve);
//        return timeDelay(500);
//    })
//    .then(function (resolve) {
//        console.log('step3');
//        console.log(resolve);
//    })
//    .catch(function (reason) {
//        console.log((reason));
//    });


// method 3: generate
// refer to 'co' example from NodeJsLesson08 -> app_co.js
//function timeDelay(waitTime) {
//    return function (callback) {
//        setTimeout(function () {
//            callback("Pause for " + waitTime);
//        }, waitTime);
//    };
//}
//
//function* async() {
//    var ret1 = yield timeDelay(3000);
//    console.log(ret1);
//    var ret2 = yield timeDelay(1000);
//    console.log(ret2);
//    var ret3 = yield timeDelay(500);
//    console.log(ret3);
//}
//
//var result = async();
//var step = result.next();
//step.value(function (res) {  // set callback
//    var step1 = result.next(res);  // 1. return value to ret1; 2. run to next yield
//    step1.value(function (res) {
//        var step2 = result.next(res);
//        step2.value(function (res) {
//            result.next(res);
//        })
//    })
//});


console.log(__filename, 'DONE.');