/**
 * Created by kesarwat on 11/01/16.
 */

function validateBraketExpression(exp){
    var len = exp.length;
    var arr = new Array();
    for (var index = 0; index<len; index++){
        var ch = exp.charAt(index);
        //opening braket condition check push
        if(ch=='{'||ch=='['||ch=='('){
            arr.push(ch);
        }else if(ch=='}'||ch==']'||ch==')'){
            // Closing Braket Condition

            var lastBraket = arr.pop();

            if(!((lastBraket == '{' && ch =='}') ||
                (lastBraket == '[' && ch ==']') ||
                (lastBraket == '(' && ch ==')'))){
                return "Invalid Expression";
            }
        }
    }

    if(arr.length == 0){
        return "Valid Expression";
    }
    else{
        return "Invalid Expression";
    }
}

var expression = "5*{(2+3)+[(3+5)/5}]";
var result = validateBraketExpression(expression);
console.log(result);
