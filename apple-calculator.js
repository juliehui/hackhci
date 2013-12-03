 function calculate(){
    var tokens=gettokens()
    var answer = evaluate(tokens)
    var box = $('#box');   //. instead of # for class 
    box.text(answer)    //how to keep adding to box and not rewrite?
 }
 
 function gettokens(){
    var input = $('#box'); //get the box
    var inputexpression = input.text(); //get value inside the box
    var pattern = /\d+|\+|\*|\/|\-|\(|\)/g
    var tokens = inputexpression.match(pattern);
    return tokens
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
 
 function read_operand(tokens){
    var num=tokens.shift()      //move cursor up 1 step
    if (num=="-") {             //turn number into negative and return
        num = tokens.shift()    //num = number after negative
        num=parseInt(num,10)    //turn number after negative into an int
        num=num*-1              //multiply number by -1
        return num              
        }
    else if (isNaN(num)) {    //change to else if later
        throw "number expected"      
        }
    else {
        num=parseInt(num,10)        //turn num into an int
        return num  
        }
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
    
function button2box(button){        //when button is clicked, put button value in box
    if ($(button).text()=="="){     //if this was taking from an input box, it would be .val()
        calculate()
    } else if ($(button).text()=="C"){
        $('#box').empty()
    } else{
        var buttonval=$(button).text()
        $('#box').append(buttonval);
    }
    

    }
    
    
//console.log(val.toUpperCase()); //log it