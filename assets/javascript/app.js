//start button
//game timer - game over if timer ends 
//multiple choice questions 
//*******game summery after timer 







// QUESTION OBJECTS
//*********************************** 

let question1 = {
    question: "What continent is also a country?",
    choices: [
        "a: Antarctica",
        "b: Austrailia",
        "c: The Moon",
        "d: USA"],
    answer: "b: Austrailia",
    condition: [false, true, false, false]
}

let question2 = {
    question: "MMA is what type of sport?",
    choices: [
        "a: cooking",
        "b: running",
        "c: fighting",
        "d: racing"],
    answer: "c: fighting",
    condition: [false, false, true, false]
}

let question3 = {
    question: "Tempering does what to steel?",
    choices: [
        "a: soften",
        "b: harden",
        "c: melt",
        "d: evaporate"],
    answer: "a: soften",
    condition: [true, false, false, false]
}

let question4 = {
    question: "What was Captain Jean Luc Picard's favorite tea?",
    choices: [
        "a: english breakfast",
        "b: green tea",
        "c: earl grey",
        "d: lipton"],
    answer: "c: earl grey",
    condition: [false, false, true, false]
}

let question5 = {
    question: "What alloy is made of copper and zinc?",
    choices: [
        "a: brass",
        "b: steel",
        "c: aluminum",
        "d: titaium"],
    answer: "a: brass",
    condition: [true, false, false, false]
}


let score = 0;
let questionsArray = [question1, question2, question3, question4, question5];
let rightAnswer = 0;
let wrongAnswer = 0;
let questionIndex = 0;
let userAnswer;




// DISPLAYING QUESTIONS TO DOM 
//***********************************

$(document).ready(function () {
    $('embed').hide();

    function showQuestions(questionSelect) {
        timer.reset();
        $(".question").html(questionsArray[questionSelect].question);
        //choices 
        $("#a").text(questionsArray[questionSelect].choices[0]).show();
        $("#b").text(questionsArray[questionSelect].choices[1]).show();
        $("#c").text(questionsArray[questionSelect].choices[2]).show();
        $("#d").text(questionsArray[questionSelect].choices[3]).show();
    }

    // start button
    function start() {
        // $('.startBtn').append('<button class="start">Start</button>');
        // $('.start').on('click', function(){
        //     $(this).hide();
        timer.start();
        // })
        showQuestions(questionIndex);
    }

    //answers to the array 
    function right() {
        rightAnswer++;
        //alert('Correct');
        $('.timer').html('<h3>' +questionsArray[questionIndex].answer + '<h3>');
        console.log('change');
    };

    function wrong() {
        wrongAnswer++;
       alert('Wrong');
       $('.timer').html('<h3>' +questionsArray[questionIndex].answer + '<h3>');
    };

    function score() {
        $('.question').empty();
        $('.question').append('<p>' + rightAnswer + ' correct</p>');
        $('.question').append('<p>' + wrongAnswer + ' wrong</p>');
        timer.stop();
        $('.timer').emtpy();
    };

    let timer = {
        time:5,
        reset: function(){
            this.time = 11;
            $('.timer').html('<div>' + this.time + ' seconds remaining</div>');
        },
        start: function() {
            counter = setInterval(timer.count,1000);
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function(){
            timer.time--;
            if(timer.time >= 0){
                $('.timer').html("<div class='rounded p-2'>" + timer.time + ' seconds remaining</div>');
            } else if (timer.time <= 0) {
                questionIndex++;
                wrong();
                timer.reset();
                if (questionIndex < questionsArray.length) {
                    showQuestions(questionIndex);
                } else {
                    $('.choice').hide();
                    score();
                    
                }
            }
        }
    }

    start();
    $('.choice').on('click', function () {


        if (this.id === 'a') {
            userAnswer = 'a';
        } else if (this.id === 'b') {
            userAnswer = 'b';
        } else if (this.id === 'c') {
            userAnswer = 'c';
        } else if (this.id === 'd') {
            userAnswer = 'd';
        }

        if ((userAnswer === 'a') && questionsArray[questionIndex].condition[0] === true) {
            right();
        } else if (userAnswer === 'a') {
            wrong();
        } else if ((userAnswer === 'b') && questionsArray[questionIndex].condition[1] === true) {
            right();
        } else if (userAnswer === 'b') {
            wrong();
        } else if ((userAnswer === 'c') && questionsArray[questionIndex].condition[2] === true) {
            right();
        } else if (userAnswer === 'c') {
            wrong();
        } else if ((userAnswer === 'd') && questionsArray[questionIndex].condition[3] === true) {
            right();
        } else if (userAnswer === 'd') {
            wrong();
        }
        setTimeout(function(){ $('.question').text('');
        $('#a').text('');
        $('#b').text('');
        $('#c').text('');
        $('#d').text('');
        }, 3000);
        
        questionIndex++;
        if (questionIndex < questionsArray.length) {
            setTimeout(function(){
                showQuestions(questionIndex);
            },3000);
        } else {
            $('.choice').hide();
            score();
        }

    })

});//doc.ready





//indicastes which answer choice clicked
// $('.choice').on('click', function(){
//     if(this.id === 'btn0')
// })





// for(let i = 0; i < questionsArray.length; i++) {
//     $(".question").append(questionsArray[i]).hide();

// };
// $(".startBtn").on("click", function () {
//     $("button").remove(".startBtn");
//     $(".question").show();
// })
















