function applyOperation(op1,op2,operator){
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    if(operator === "+") return op1+op2;
    if(operator === "-") return op1-op2;
    if(operator === "*") return op1*op2;
    if(operator === "/") return op1/op2;

    return NaN;
}

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");

const answer = document.getElementById("answer");

document.getElementById("plusOperator").addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,"+")});
document.getElementById("minusOperator").addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,"-")});
document.getElementById("timesOperator").addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,"*")});
document.getElementById("divideOperator").addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,"/")});