/**
 * Created by kesarwat on 04/01/16.
 */
// Creation of Object

var obj1 = {};
console.log(obj1);

var obj2 = new Object();
console.log(obj2);

var obj3 = Object.create(person);
console.log(obj3);

function person(name){
    this.name = name;
}

var obj4 = new person("vatu");
console.log(obj4);

var obj5 = new function (){
    this.value = 5;
}

console.log(obj5);
