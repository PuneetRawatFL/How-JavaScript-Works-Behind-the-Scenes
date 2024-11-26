console.log("How JavaScript Works Behind the Scenes");

//5 - Write a function that calls another function, which in turn calls another function. Log the call stack at each step to see how it grows and shrinks.

//creating main function
function callStack() {
    console.log("Q5");
    //function calling another function
    function one() {
        console.log("one");
        two();
        console.trace(); //log call stack
    }
    //function calling another function
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
callStack(); //calling main function

//7 - Write a function that uses both `var` and `let`/`const` and demonstrates hoisting. Log the variables before and after their declaration to observe hoisting and the TDZ in action.

//creating function hoisting
function hoisting() {
    console.log("Q7");
    //before
    console.log("Before declaration");

    //calling var before declaration
    console.log(varVar); //undefined as hoisted

    //calling let before declaration
    try {
        console.log(letVar); // reference error as it is in TDZ
    } catch (error) {
        console.log(error);
    }

    //calling const before declaration
    try {
        console.log(constVar); // reference error as it is in TDZ
    } catch (error) {
        console.log(error);
    }

    //declaring var, let and const
    var varVar = "var Variable";
    let letVar = "let variable";
    const constVar = "const variable";

    //after
    console.log("After declaration");
    //calling var after declaration
    console.log(varVar);
    //calling let after declaration
    console.log(letVar);
    //calling const after declaration
    console.log(constVar);
}
// hoisting(); //calling function hoisting

//9 - Create a JavaScript script where you intentionally try to use a variable in the TDZ and log the error message.

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

//10 - Refactor the script to avoid hoisting-related issues and ensure variables are only used after they are declared.

function redec() {
    console.log("Q10");
    //declaring let and const
    const a = 10;
    let b = 20;
    //using after declaration
    console.log(a);
    console.log(b);
}
// redec();

//11 - Write three functions: one in the global context, one as a method of an object, and one inside another function. Log `this` in each function to observe its behavior.

//global context function
function glb() {
    console.log(this); //points to global object
    car.start(); //calling method of an object
    first(); //calling function containing function
}

//method of an object
var car = {
    name: "Ford",
    start() {
        console.log(this); //points to car object
    },
};
//function inside another function
function first() {
    function second() {
        console.log(this); // points to global object
    }
    second();
}
// glb();

//12 - Create an object with a method that refers to `this`. Call the method and explain the value of `this`.

var person = {
    name: "John",
    greet() {
        console.log(this.name); //here `this` refers to the object person as it is defined inside the object and can use the properties of the object
    },
};
// person.greet();

//13 - Write a method inside an object that uses both a regular function and an arrow function. Log `this` inside both functions to see how it differs.

var thisKey = {
    name: "John",
    one() {
        console.log(this); //refers to `thisKey` object
    },

    //Arrow functions do not have their own this context and instead inherit this from the surrounding (lexical) context.
    two: () => {
        console.log(this); //refers to global/window object
    },
};
// thisKey.one();
// thisKey.two();

//14 - Refactor a piece of code using a regular function to use an arrow function instead, and observe any differences in behavior.

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

//15 - Create variables that hold primitive values and objects. Modify these variables and observe the differences in behavior when passing them to functions.

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
function modify(st, nm, bl, un, nl, pr, ar) {
    st = "hi";
    nm = 20;
    bl = false;
    un = 1;
    nl = 1;
    pr.name = "Rawat";
    ar.push(6);
    console.log("Inside fn: ");
    //logging values
    console.log("Primitives: ", st, nm, bl, un, nl); //modifies the copies
    console.log("Objects: ", pr, ar); //modifies with reference
}
// calling modifying function
// modify(str, num, bool, undf, nul, person, arr);
// logging values
// console.log("Outside fn: ");
// console.log("Primitives: ", str, num, bool, undf, nul);
// console.log("Objects: ", person1, arr);

//16 - Write a function that mutates an object and another function that attempts to mutate a primitive, explaining why the primitive is unaffected.

//declaring primitve
let a = 10;
//declaring object
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

//17 - Write a script that creates a copy of a primitive and an object. Modify both the original and the copy, and observe how changes to the original affect the copy.

//delaring primitve
let a1 = 10;
//declaring object
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
    //calling modifying functions
    modObj(obj1);
    modPrim(a1);
    //logging values before modifying original
    console.log("before");
    console.log(obj1, a1);

    //after
    //modifying original values
    obj1.name = "modified";
    a1 = 20;
    //calling modifying functions
    modObj(obj1);
    modPrim(a1);
    //logging values after modifying original
    console.log("origional modified");
    console.log(obj1, a1);
}
// modify1();

//18 - Experiment with deep cloning an object using methods like `JSON.parse(JSON.stringify())` and explain the limitations of this approach.

//creating symbol property
const uniqueSymbol = Symbol("unique");
//creating original object with multiple properties
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
    [uniqueSymbol]: "Symbol property",
};

//cloning original object using parse and stringify
const clonedObj = JSON.parse(JSON.stringify(originalObj));
//logging original and cloned object
console.log(originalObj);
console.log(clonedObj);

//limitations of parse and stringify
//1. Functions are not copied
originalObj.greet();
// clonedObj.greet(); //throws error

//2. date is converted into string
console.log(originalObj.date);
console.log(clonedObj.date);

//3. Undefined values are not included
console.log(originalObj.undef);
console.log(clonedObj.undef);

//4. Symbols are ignored: Symbol properties are not copied.
console.log(originalObj[uniqueSymbol]);
console.log(clonedObj[uniqueSymbol]);
