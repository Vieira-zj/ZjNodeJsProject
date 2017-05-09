/**
 * Created by Vieira on 2016/10/19.
 */
//'use strict';

// demo 01, closure
var isDemo01Run = false;
if (isDemo01Run) {
    function count() {
        var c = 0;

        function add() {
            return ++c;
        }

        return add;
    }

    var ct = count();
    console.log(ct());  // 1
    console.log(ct());  // 2
}


// demo 02, 'this' and bind
var isDemo0201Run = false;
if (isDemo0201Run) {
    var segmentFault01 = {
        name: "In ZJ",
        getNameFunc: function () {
            var that = this;
            return function () {
                return that.name;
            };
        }
    };
    console.log(segmentFault01.getNameFunc()());
}

var isDemo0202Run = false;
if (isDemo0202Run) {
    var segmentFault02 = {
        name: "In ZJ",
        getNameFunc: function () {
            return function () {
                return this.name;
            }.bind(this);
        }
    };
    console.log(segmentFault02.getNameFunc()());
}


// demo 03, 'this' and bind
var isDemo0301Run = false;
if (isDemo0301Run) {
    var jane01 = {
        name: 'Jane',
        friends: ['Tr', 'Chee'],

        logHiToFriends: function () {
            var that = this;
            this.friends.forEach(function (friend) {
                console.log(that.name + 'say hi to ' + friend);
            });
        }
    };
    jane01.logHiToFriends();
}

var isDemo0302Run = false;
if (isDemo0302Run) {
    var jane = {
        name: 'Jane',
        friends: ['Tr', 'Chee'],

        logHiToFriends: function () {
            this.friends.forEach(function (friend) {
                console.log(this.name + 'say hi to ' + friend);
            }.bind(this));
        }
    };
    jane.logHiToFriends();
}


// demo 04, functional
var isDemo04Run = false;
if (isDemo04Run) {
    // join()
    var testArr = ['hello', 'zheng', 'jin!'];
    console.log(testArr.join(' '));

    // map()
    var nameArr = ['henry', 'price', 'vieira'];
    var sayHello = function (str) {
        return 'hello ' + str;
    };
    console.log(nameArr.map(sayHello));

    // reduce()
    var intArr = [1, 2, 3, 4];

    var add = function (x, y) {
        return x + y;
    };
    var multiple = function (x, y) {
        return x * y;
    };

    console.log(intArr.reduce(add));
    console.log(intArr.reduce(multiple));
}


// demo 05, use method
var isDemo05Run = false;
if (isDemo05Run) {
    function getText(someText) {
        console.log(capWords(someText).join(' '));
    }

    function capWords(input) {
        var inputArr = input.split(' ');
        var transformed = '';
        var result = [];

        for (var counter = 0, length = inputArr.length; counter < length; counter++) {
            transformed = [
                inputArr[counter].charAt(0).toUpperCase(),
                inputArr[counter].substring(1)
            ].join('');
            result.push(transformed);
        }

        return result;
    }

    getText('hello, vieira');
}


// demo 06, use object
var isDemo06Run = false;
if (isDemo06Run) {
    var SomeText = function (text) {
        this.text = text;
    };

    SomeText.prototype.capify = function (str) {
        var firstLetter = str.charAt(0);
        var remainder = str.substring(1);
        return [firstLetter.toUpperCase(), remainder].join('');
    };

    SomeText.prototype.capifyWords = function () {
        var result = [];
        var textArr = this.text.split(' ');
        for (var counter = 0; counter < textArr.length; counter++) {
            result.push(this.capify(textArr[counter]));
        }
        return result.join(' ');
    };

    var newText = new SomeText('hello, vieira');
    console.log(newText.capifyWords());
}


// demo 07, use map()
var isDemo07Run = false;
if (isDemo07Run) {
    var capify = function (str) {
        return [str.charAt(0).toUpperCase(), str.substring(1)].join('');
    };

    var processWords = function (fn, str) {
        return str.split(' ').map(fn).join(' ');
    };

    console.log(processWords(capify, 'hello, vieira'));
}


// demo 08, hasOwnProperty()
var isDemo08Run = false;
if (isDemo08Run) {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.getInfo = function () {
        console.log(this.name + " is " + this.age + " years old.");
    };

    var will = new Person('Will', 28);
    will.getInfo();

    console.log('Will properties: ');
    for (var attr in will) {
        if (will.hasOwnProperty(attr)) {
            console.log(attr);
        }
    }

    console.log('Object will: ');
    console.dir(will);
}


// demo 09, closure
var isDemo09Run = false;
if (isDemo09Run) {
    (function demo09() {
        for (var i = 0; i < 5; i++) {
            setTimeout(function () {
                console.log(i);
            }, 2000)
        }

        for (var m = 0; m < 5; m++) {
            (function (idx) {
                setTimeout(function () {
                    console.log(idx);
                }, 3000);
            })(m);
        }
    })();
}


// demo 10, bind object
var isDemo10Run = false;
if (isDemo10Run) {
    (function demo10() {
        var myObject = {value: 100};
        var foo = function () {
            console.log(this);
        };

        foo();  // undefined
        foo.apply(myObject);  // { value: 100 }
        foo.call(myObject);  // { value: 100 }

        var newFoo = foo.bind(myObject);
        newFoo();  // { value: 100 }

    })();
}


// demo 11, function area, and there is no code block area in JS
var isDemo11Run = false;
if (isDemo11Run) {
    (function demo11() {
        function foo() {
            for (var i = 0; i < 3; i++) {
                var value = 'hello world';
            }
            console.log(i);
            console.log(value);
        }

        foo();
        console.log(i);
    })();
}


// demo 12, self run function
var isDemo12Run = false;
if (isDemo12Run) {
    var tmpStr = ' add ';
    (function (input) {
        'use strict';
        var x = 10,
            y = 100;
        console.log(x + input + y);
    }(tmpStr));

    (function (input) {
        var x = 10,
            y = 100;
        console.log(x + input + y);
    })(tmpStr);
}


// demo 13
// #1, json object to string, JSON.stringify()
var isDemo1301Run = false;
if (isDemo1301Run) {
    var jsonObj01 = {
        'title': 'title test',
        'content': 'content test'
    };

    console.log(jsonObj01.title);
    console.log(jsonObj01['title']);

    console.log(JSON.stringify(jsonObj01));
    console.log(JSON.stringify(jsonObj01, null, '  '));
    console.log(JSON.stringify(jsonObj01, convert, '  '));

    function convert(key, value) {
        if (typeof value === 'string') {
            return value.toUpperCase();
        }
        return value;
    }
}


// #2, json string to object
var isDemo1302Run = false;
if (isDemo1302Run) {
    var str = '{ "name": "Violet", "occupation": "character" }';
    var jsonObj = JSON.parse(str);

    console.log(jsonObj.name);
    console.log(jsonObj['occupation']);
}


// demo 14, self run function
var isDemo14Run = false;
if (isDemo14Run) {
    (function () {
        var tmpArr = ['a', 'b', 'c'];
        tmpArr.name = 'my temp array';
        for (var ele in tmpArr) {  // iterator on index
            if (tmpArr.hasOwnProperty(ele)) {
                console.log(ele + ' -> ' + tmpArr[ele]);
            }
        }
    })();

    (function () {
        var tmpArr = ['a', 'b', 'c'];
        tmpArr.forEach(function (element, index) {
            console.log(index + ' -> ' + element);
        });
    })();
}


// demo 15, lambda
var isDemo15Run = false;
if (isDemo15Run) {
    (function demo15() {
        var tmpArr = [1, 2, 3, 4];
        console.log(tmpArr.map(x => x + x));

        console.log(tmpArr.reduce((x, y) => x + y));
        console.log(tmpArr.reduce((x, y) => {
            return x + y
        }));

        var helloMeg = (message) => {
            console.log('Hello,', message);
        };
        helloMeg('ZhengJin');
    })();
}


// demo 16, set default value
var isDemo16Run = false;
if (isDemo16Run) {
    (function (passed, first, second) {
        var fName = first || 'null',
            sName = second || 'null',  // if not exist, set default
            result = passed && true;  // if exist, set default
        console.log('Your first name: ' + fName + ', and second name: ' + sName + ', pass: ' + result);
    })('pass', 'zheng');
}


// demo 17, print format
var isDemo17Run = false;
if (isDemo17Run) {
    (function demo1701() {
        var name = 'ZHENG JIN';
        console.log('Hello, %s', name);

        var x = 3,
            y = 5;
        console.log('%d + %d = %d', x, y, (x + y));
    })();

    (function demo1702() {
        let firstName = 'ZHENG';
        let lastName = 'JIN';
        console.log('Hello, ${firstName} ${lastName}');
    })();

    (function demo1703() {
        var util = require('util');

        var name = 'ZHENG JIN';
        console.log(util.format('Hello, %s', name));

        var x = 3,
            y = 5;
        console.log(util.format('%d + %d = %d', x, y, (x + y)));
    })();
}


// demo 18, fn var
var isDemo18Run = false;
if (isDemo18Run) {
    (function demo18() {
        var add = function (x, y) {
            return x + y;
        };
        console.log(add(1, 2));

        function multiple(a, b) {
            return a * b;
        }

        var multiple02 = multiple;
        console.log(multiple02(2, 2));
    })();
}


// demo 19, let
var isDemo19Run = false;
if (isDemo19Run) {
    (function demo1901() {
        var fnArr = [];
        for (var idx = 0; idx < 10; idx++) {
            fnArr[idx] = function () {
                console.log(idx);
            }
        }

        console.log(idx);
        fnArr[8]();
    })();

    (function demo1902() {
        var fnArr = [];
        for (let idx = 0; idx < 10; idx++) {
            fnArr[idx] = function () {
                console.log(idx);
            }
        }
        fnArr[8]();
    })();
}


// demo 20, length
var isDemo20Run = false;
if (isDemo20Run) {
    (function demo20() {
        var tmpStr01 = 'hello world';
        console.log(tmpStr01.length);

        var tmpArr02 = ['beijing', 'shanghai'];
        console.log(tmpArr02.length);
    })();
}


// demo 21, escape(), cn words to unicode
var isDemo21Run = false;
if (isDemo21Run) {
    var cnStr = '中国';
    console.log(escape(cnStr));
}


// demo 22, access invalid array element
var isDemo22Run = false;
if (isDemo22Run) {
    (function demo22() {
        var tmpArr = [];
        console.log(tmpArr[1]);  // do not throw exception
        console.log(tmpArr[-1]);
    })();
}


console.log(__filename, 'DONE.');
