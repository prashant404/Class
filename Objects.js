//Objects -- collection of key-value pairs , key also known as property.
//key can be any string, number , array , function etc.


const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
    }
};


console.log(person.name);
console.log(person.address.street);
console.log(person.address); // this will print the whole object not just the street property 

// ways to create objects .
//1. literal syntax -- used above
 //2. using new object () -- this is used when we want to create an object from a class
 
const Car = new Object();
Car.make = 'Toyota';
Car.model = 'Camry';
console.log(Car); // this will print the whole object not just the make and model properties
console.log(Car.make);

//3.using classes (es6)

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }}

const user =  new Person("Jajoo", 30);
console.log(user.name);
console.log(user.age);
user.address = 'ghaziabad';
console.log(user.address); // this will print the whole object not just the address property


//access - dot operator , bracket notation
console.log(person["name"]);


//operations
person.country = "india";  //add
delete person.age;   //delete
person.name = "Jajoo"; // update
console.log(person); // this will print the whole object not just the name property

//NESTED objects
const employee = {
    name : "abhay",
    address:{
        street : "123 main st",
        city : "ghaziabad",
    }
};
console.log(employee.address.street); // this will print the street property of the address object


//object methods

const employee1 = {
    name : "abhay",
    hello:function(){
        return ("hello i am " + this.name);
    }
};

console.log(employee1.hello()); // this will print the hello method of the employee object

//this keyword --  refers to object on which the method is called.


//looping through objects
for(let i in person){
    console.log(`${i} : ${JSON.stringify(person[i])}`);
}

//object destructuring
const copy = {...person};
console.log(copy);

