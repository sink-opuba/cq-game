

(function () {

    //Question function constructor
    function Question(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
    //Method displays questions and options to the console

    Question.prototype.seeQuiz = function () {
        console.log(this.question);
        for (let i = 0; i < this.options.length; i++) {
            const el = this.options[i];
            console.log(i + ': ' + el);
        }
    }

    //Method checks if answer is correct
    Question.prototype.correctAnswer = function (ans, callback) {
        var sc
        if (ans === this.answer) {
            console.log('correct answer!');
            sc = callback(true);

        } else {
            console.log('wrong answer! try again :)');
            sc = callback(false);

        }
        this.displayScore(sc);
    }
    //This method displays current score to the console
    Question.prototype.displayScore = function (score) {
        console.log('Your current score is ' + score);
        console.log('------------------------------')
    }

    var q1 = new Question('Is Javascript the coolest programming language in the world?', ['yes', 'no'], 0);
    var q2 = new Question('Who wrote this cool console game?', ['Ken', 'Sink-opuba', 'Kay'], 1);
    var q3 = new Question('What do you think about programming?', ['Hard', 'Boring', 'Fun'], 2);

    const QuizQuestions = [q1, q2, q3];

    //calculates current scores using closure

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++
            }
            return sc;
        }
    }

    var keepScore = score();


    function nextQuestion() {

        const quizNum = Math.floor(Math.random() * QuizQuestions.length);

        QuizQuestions[quizNum].seeQuiz();

        var promptval = prompt("Please answer with numbers only (or type 'exit' to end the game)");

        if (promptval !== 'exit') {
            QuizQuestions[quizNum].correctAnswer(parseInt(promptval), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();
