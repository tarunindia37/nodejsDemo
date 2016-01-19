/**
 * Created by kesarwat on 07/01/16.
 */

function add (a,b){
    console.log("Adding operation");
    for(var i = 0; i<b; i++){
        a = incrementByOne(a);
    }
    return a;
}

function sub (a,b){
    console.log("Sub operation");
    for(var i = 0; i<b; i++){
        a = decrementByOne(a);
    }
    return a;
}

function incrementByOne(a){
    console.log("increment by one");
    a++;
    return a;
}

function decrementByOne(a){
    console.log("decrement by one");
    a--;
    return a;
}

module.exports = {
    addition : add,
    subtraction : sub
}
