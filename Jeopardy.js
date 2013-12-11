//var test = 1
var jeopardy = (function() {        //what is this again?
    var questions = [{'text': ' This restaurant is the best in Evanston', 'answer': 'What is the Chicken Shack', 'pointValue' : 100},
    
    {'text': ' This the best school in the universe', 'answer': 'What is Northwestern', 'pointValue' : 200}                 
                    ]

    var exports = {};
    var score = 0;
    var currentQuestion = 0;
    
    function checkAnswer(){
        // 1. check if something is the correct answer
        if($('.answerBox').val()==questions[currentQuestion]['answer']){
            alert("Correct!")
            // 2. if it is, increment the score and call displayScore
            score+=questions[currentQuestion]['pointValue']
            displayScore(); 
            currentQuestion++
            displayQuestion()
        }else{
            alert("Incorrect!")
        }
        $('.answerBox').val('');  // 3. regardless, move to the next question  
    }

    function displayQuestion(){
        // displays the current question
        $('.question').html('Question:' + questions[currentQuestion]['text']);
          
    }

    function displayScore(){
        // displays the score
        $('.score').html('Your score:' + score);
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

    function checkHTML(){
        function supports_html5_storage() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
        return false;
        }
        }
    }

$(document).ready(function(){
    //jeopardy.checkHTML();
    jeopardy.setup();
});

    exports.setup = setup;          //what is this?
    return exports;
})()