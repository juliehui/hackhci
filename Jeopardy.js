var test = (1) 
var jeopardy = (function() {
    var questions = [{'text': ' This restaurant is the best in Evanston', 'answer': 'What is the Chicken Shack', 'pointValue' : 100},
    
    {'text': ' This the best school in the universe', 'answer': 'What is Northwestern', 'pointValue' : 200}                 
                    ]

    var exports = {};
    var score = 0;
    var currentQuestion = 0;
                      
    function displayScore(){
        // displays the score
        $('.score').html('Your score:' + score);
    }
    
    function checkAnswer(){
        // 1. check if something is the correct answer
        if($('.answerBox').val()==questions[currentQuestion]['answer']){
            alert("Correct!")
            // 2. if it is, increment the score and call displayScore
            score+=questions[currentQuestion]['pointValue']
            displayScore(); 
            currentQuestion++
            displayQuestion()
            $('.answerBox').val('');
        }else{
            alert("Incorrect!")
        }
        
        // 3. regardless, move to the next question
    }
                      
    
    function displayQuestion(){
        // displays the current question
        $('.question').html('Question:' + questions[currentQuestion]['text']);
          
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

    exports.setup = setup;
    return exports;
})()