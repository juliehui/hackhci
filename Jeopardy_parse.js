//var test = 1
var jeopardy = (function() {        
    var questions = [{'text': ' This restaurant is the best in Evanston', 'answer': 'Chicken Shack', 'pointValue' : 100},
    {'text': ' This the best school in the universe', 'answer': 'Northwestern', 'pointValue' : 200}]
    var exports = {};
    //var score = 0;
    //var currentQuestion = 0;

    Parse.initialize("llTYdw6GsH3XBTpdWpzm0x1f2RIfmpxOWkOfNDPk", "J6k5OpFQ6SU1GAjPla7siBshA3FM3Qp3rupHq2My");
    var PlayerInfo = Parse.Object.extend("PlayerInfo");
    var playerInfo = new PlayerInfo();
    playerInfo.save({score: 0, currentQuestion: 0}, {
        success: function(object) {
            alert("yay! it worked");
        }
    });

    function checkAnswer(){
        // 1. check if something is the correct answer
        var currentQuestion=parseInt(localStorage['currentQuestion'])
        var score=parseInt(localStorage['score'])
        if($('.answerBox').val()==questions[currentQuestion]['answer']){
            alert("Correct!")
            // 2. if it is, increment the score and call displayScore
            localStorage['score']+=questions[currentQuestion]['pointValue']
            displayScore(); 
            localStorage['currentQuestion']=currentQuestion+1
            displayQuestion()
        } else{
            alert("Incorrect!")
        }
        $('.answerBox').val('');  // 3. regardless, move to the next question  
    }

    function displayQuestion(){
        // displays the current question
        var currentQuestion=parseInt(localStorage['currentQuestion'])
        $('.question').html('Question:' + questions[currentQuestion]['text']);    
    }

    function displayScore(){
        // displays the score
        var score=parseInt(localStorage['score'])
        $('.score').html('Your score: ' + score);
    }

    function setup(){
        // show the first question
        displayQuestion();
        displayScore();

        // attach checkAnswer to the button
        $('#answerButton').click(function(){
            checkAnswer();
        });
        
    }

$(document).ready(function(){
    jeopardy.setup();
});

    exports.setup = setup;          //what is this?
    return exports;
})()