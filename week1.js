 
 
 function getexpression(){
    var input = $('#expression'); //get the box
    var inputexpression = input.val(); //get value inside the box
    var tokens = gettokens(inputexpression)
 }
 
 function gettokens(inputexpression){
    var pattern = /\d+|\+|\*|\/|\-|\(|\)/g
    var tokens = inputexpression.match(pattern);
    var output = $('#output'); 
    output.text(JSON.stringify(tokens))
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
            throw "missing operand"
        }
    var value=read_operand(tokens)
    while (tokens.length>0)
        {
            var operator=read_operand(tokens)
            if (operator != "+"||"-"||"/"||"*"||"("||")")
                {
                    throw "unrecognized error" 
                }
            if (tokens.length<1)
                {
                    throw "missing operand"
                }
            var temp = read_operand(tokens)
            value=operate(value,operator,tokens)
        }
    return value
    } 

function operate(value,operator,tokens){
    switch(operator){
        case "+":
            return value+tokens
        case "-":
            return value-tokens
        case "*":
            return value*tokens
        case "/":
            return value/tokens
        default:
            throw "not an operator"
    }
}
    
    
//console.log(val.toUpperCase()); //log it