//start button
//game timer - game over if timer ends 
//multiple choice questions 
//*******game summery after timer 







// QUESTION OBJECTS
//*********************************** 

let question1 = {
    question: "What continent is also a country?",
    choices: [
        "a: USA",
        "b: Austrailia",
        "c: The Moon",
        "d: Antarctica"],
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

let time = 120;
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

        // })
        showQuestions(questionIndex);
    }

    //answers to the array 
    function right() {
        rightAnswer++;
        alert('Correct');
    };

    function wrong() {
        wrongAnswer++;
        alert('Wrong');
    };

    function score() {
        $('.question').empty();
        $('.question').append('<p>' + rightAnswer + ' correct</p>');
        $('.question').append('<p>' + wrongAnswer + ' wrong</p>');
    };

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

        $('.question').text('');
        $('#a').text('');
        $('#b').text('');
        $('#c').text('');
        $('#d').text('');
        questionIndex++;

        if (questionIndex < questionsArray.length) {
            showQuestions(questionIndex);
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
















