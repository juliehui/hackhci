 function calculate(){
    var tokens=gettokens()
    
    
    var answer = evaluate(tokens)
    var output = $('#output'); 
    output.text(answer)
 }
 
 function gettokens(){
    var input = $('#expression'); //get the box
    var inputexpression = input.val(); //get value inside the box
    var pattern = /\d+|\+|\*|\/|\-|\(|\)/g
    var tokens = inputexpression.match(pattern);
    return tokens
 }
 
 function read_operand(tokens){
    var num = tokens[0]
    tokens=tokens.shift()
    num=parseInt(num,10)
    if (isNaN(num))
        {
            throw "number expected"      
            
        }
    else
        {
            return num  
        }
    }
        
        
function evaluate(tokens){
    if (tokens.length<1)
        {
            throw "empty array"     
        }
    var value=read_operand(tokens)      //value is num from read_operand
    while (tokens.length>0)
         {
            var operator=tokens.shift()
            if ((operator != "+") && (operator != "-") && (operator != "/") && (operator != "*") && (operator != "(") && (operator != ")"))
                {
                    throw "not an operator" 
                }
            if (tokens.length<1)
                {
                    throw "missing operand"
                }
            var temp = read_operand(tokens)
            value=operate(value,operator,temp)
         }
    return value
    } 

function operate(value,operator,temp){
    switch(operator){
        case "+":
            return parseFloat(value)+parseFloat(temp)        
        case "-":
            return value-temp
        case "*":
            return value*temp
        case "/":
            return value/temp
        default:
            throw "not an operator"
    }
    }
    
    
//console.log(val.toUpperCase()); //log it