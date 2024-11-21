console.log("How JavaScript Works Behind the Scenes");

//5
function callStack() {
    console.log("Q5");
    function one() {
        console.log("one");
        two();
        console.trace(); //log call stack
    }
    function two() {
        console.log("two");
        three();
        console.trace(); //log call stack
    }
    function three() {
        console.log("three");
        console.trace(); //log call stack
    }
    one();
    console.trace(); //log call stack
}
// callStack();

//7
function hoisting() {
    console.log("Q7");
    //before
    console.log("Before declaration");
    console.log(varVar); //undefined as hoisted
    try {
        console.log(letVar); // reference error as it is in TDZ
    } catch (error) {
        console.log(error);
    }
    try {
        console.log(constVar); // reference error as it is in TDZ
    } catch (error) {
        console.log(error);
    }
    //declaration
    var varVar = "var Variable";
    let letVar = "let variable";
    const constVar = "const variable";

    //after
    console.log("After declaration");
    console.log(varVar);
    console.log(letVar);
    console.log(constVar);
}
// hoisting();

//9
function tdz() {
    console.log("Q9");
    //accesing let variable
    try {
        console.log(a);
    } catch (error) {
        console.log(error);
    }

    //declaring let variable
    let a = 10;
}
// tdz();

//10
function redec() {
    console.log("Q10");
    const a = 10;
    let b = 20;
    //variables used after declaration
    console.log(a);
    console.log(b);
}
// redec();

//11
function glb() {
    console.log(this); //points to global object
    car.start();
    first();
}
var car = {
    name: "Ford",
    start() {
        console.log(this); //points to car object
    },
};
function first() {
    var a;
    function second() {
        console.log(this); // points to global object
    }
    second();
}
// glb();

//12
var person = {
    name: "John",
    greet() {
        console.log(this.name); //here `this` refers to the object person as it is defined inside the object and can use the properties of the object
    },
};
// person.greet();

//13
var thisKey = {
    name: "John",
    one() {
        console.log(this); //refers to `thisKey` object
    },
    two: () => {
        console.log(this); //refers to global/window object
    },
};
// thisKey.one();
// thisKey.two();

//14
var thisKey1 = {
    name: "John",
    one() {
        console.log(this); //refers to `thisKey` object
        const two = () => {
            console.log(this); //refers to `thisKey` object
        };
        two();
    },
};
// thisKey1.one();

//15
//primitive values
var str = "Hello";
var num = 10;
var bool = true;
var undf = undefined;
var nul = null;

//objects
var person1 = {
    name: "Puneet",
    greet() {
        console.log("Hello");
    },
};
var arr = [1, 2, 3, 4, 5];

//modifying function
function modify(s, n, b, u, nl, p, a) {
    s = "hi";
    n = 20;
    b = false;
    u = 1;
    nl = 1;
    p.name = "Rawat";
    a.push(6);
    console.log("Inside fn: ");
    console.log("Primitives: ", s, n, b, u, nl); //modifies the copies
    console.log("Objects: ", p, a); //modifies with reference
}
// modify(str, num, bool, undf, nul, person, arr);
// console.log("Outside fn: ");
// console.log("Primitives: ", str, num, bool, undf, nul);
// console.log("Objects: ", person1, arr);

//16
let a = 10;
var obj = {
    name: "Robert",
};
//function to modify object
function modObj(o) {
    o.name = "Anuj";
}

//function to modify primitive
function modPrim(pr) {
    pr = 5;
}
//calling function
function abc() {
    modObj(obj);
    modPrim(a);

    //printing values
    console.log(obj); //obj is modified even outside funtion because it was passed using reference and the original value is changed

    console.log(a); //primitive is not modified as a new copy of the value was passed rather than the reference
}
// abc();

//17
let a1 = 10;
var obj1 = {
    name: "Robert",
};
//function to modify object
function modObj(o) {
    o.name = "Anuj";
    console.log(o.name);
}

//function to modify primitive
function modPrim(pr) {
    pr = 5;
    console.log(pr);
}
function modify1() {
    //before
    console.log("copies modified");
    modObj(obj1);
    modPrim(a1);
    console.log("before");
    console.log(obj1, a1);

    //after
    obj1.name = "modified";
    a1 = 20;
    modObj(obj1);
    modPrim(a1);
    console.log("origional modified");
    console.log(obj1, a1);
}
// modify1();

//18
const originalObj = {
    name: "Puneet",
    age: 23,
    address: { city: "Jaipur", zip: "302020" },
    hobbies: ["reading", "travelling"],
    greet: function () {
        console.log("Hello");
    },
    date: new Date(),
    undef: undefined,
};
const clonedObj = JSON.parse(JSON.stringify(originalObj));

console.log(originalObj);
console.log(clonedObj);

//limitations
//1. Functions are not copied
originalObj.greet();
// clonedObj.greet(); //throws error

//2. date is converted into string
console.log(originalObj.date);
console.log(clonedObj.date);

//Undefined values are not included
console.log(originalObj.undef);
console.log(clonedObj.undef);

//Symbols are ignored: Symbol properties are not copied.
//Circular references cause errors: Objects with circular references cannot be cloned this way.
