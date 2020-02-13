//let and const
let s = 10;
//const value once define that never change
const v = 25;
console.log(s,v);

//arrowfunction
//the main advantage of arrow function is to resolve this keyword problem

const printMyName = (name , age) => {
    console.log(name, age);
}

//if there is exactly one arguement so we can write this
const MyName = name => {
    console.log(name);
}

//for returning 1 arguement we can write like this
const mult = (num) => num * 2;

const add = (num1, num2) => {
    return num1+num2;
}
printMyName("harry",33);
MyName("shariq");
console.log(mult(4));
console.log(add(2,3));

//import and export

//classes

//inherit name class with age
class Age{
    
    constructor(){
       
        this.age = 16;
    }
    //method
    printAge(){
        console.log(this.age);
    }
}

class Name extends Age{
    //constructor is a keyword 
    constructor(name){
        //super is used to take parent class parameters;
        super();
        this.name = name;
       // console.log(this.name);
    }
    //method
    printname(){
        console.log(this.name);
    }

}


let p = new Name("harry");
p.printname();
p.printAge();

//ES6 and ES7 syntax for methods or variables within class

class anim {
    name = "lion";

    PrintAnime = () => {
        console.log(this.name);
    }
}

class quan extends anim{
    quantity = 10;

    printAnimeQuantity = () =>{
        console.log(this.quantity);
    }
}

const animal = new quan();
animal.PrintAnime();
animal.printAnimeQuantity();

//spread and rest operator

//spread operator is used to add old array element with new array or object properties
//spread extract all element and store them ina variable

let arr= [1,2,3,4,5];
let arr2 = [...arr,6,7,8,9];

console.log(arr2);

let obj1 = {
    name:"shariq",
    age:14
};

let obj2 = {
    ...obj1,
    gender:"male"
};

console.log(obj2);

//rest is used to take function arguements and convert them into list

const sortArray = (...ele) =>
{
     return ele.sort();
}
console.log(sortArray(4,1,6,8,3,9,1));


//destruncturing is to extract single elemnt

let num = [1,3,4];
[a,b] = num;
//it will skip second elemnt and 4 will be stored in f
[e, ,f] = num;
console.log(a,b);
console.log(e,f);

//referenceing

//Must remember arrays and objects dont copy the value they copy the pointer or address see e.g

let z = {
    name : "harry"
};

let p1 = z;
//if we change p here then p1 will auto change
z.name = "shariq"; 
console.log(p1);

//but if wee want to copy the object we have to create new object using spread operator as wee see above

//refreshing array function

let newArray = [1,2,3,4,5];

//map function takes an array and access every eleemnt of an array and perform some operation then 
//store them in a brand new array
let DoubleNewArray = newArray.map((val) => {
    return val+val;
});

console.log(newArray);
console.log(DoubleNewArray);