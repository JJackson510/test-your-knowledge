var timer;
var timeRemaining = 60;
var currentQuestion = {
  item: questions[0],
  index: 0,
};

questionArea.hidden = true;
answer_1.hidden = true;
answer_2.hidden = true;
answer_3.hidden = true;
answer_1_label.hidden = true;
answer_2_label.hidden = true;
answer_3_label.hidden = true;

submitButton.hidden = true;

setQuestionAndAnswers(currentQuestion);

startButton.addEventListener("click", function () {
  startTimer();
});

submitButton.addEventListener("click", function () {
  const selectedAnswer = document.querySelector(
    'input[name="answer_btn"]:checked'
  );
  const rightAnswer = isRightAnswer(selectedAnswer.value);

  if (rightAnswer) {
      // give a point for the right answer to
      // show a correct msg
      nextQuestion();
  } else {
      // display they got it wrong
      timeRemaining = timeRemaining - 20;
  }
});

function isRightAnswer(selectedAnswer) {
  const item = currentQuestion.item;
  if (item.choices[item.answer] === selectedAnswer) {
    return true;
  }
  return false;
}

function setQuestionAndAnswers(question) {
  const item = question.item;
  questionArea.innerHTML = item.question;

  for (let index = 0; index < 3; index++) {
    const btnIndex = index + 1;
    const choice = item.choices[index];
    const answerBtn = document.querySelector(`#answer_${btnIndex}`);
    const answerBtnLabel = document.querySelector(`#answer_${btnIndex}_label`);
    answerBtn.value = choice;
    answerBtnLabel.innerHTML = choice;
  }
}

function nextQuestion() {
  const nextQuestionIndex = currentQuestion.index + 1;

  if (questions[nextQuestionIndex]) {
    // set the question dom
    // set the buttons texts for the answers
    setQuestionAndAnswers(questions[nextQuestionIndex]);
  }
}

function onQuestionAnswer(answer) {
  if (currentQuestion.item.answer === answer) {
    console.log("right");
  } else {
    console.log("wrong");
    /// other things
  }
}

function startTimer() {
  questionArea.hidden = false;
  answer_1.hidden = false;
  answer_2.hidden = false;
  answer_3.hidden = false;
  answer_1_label.hidden = false;
  answer_2_label.hidden = false;
  answer_3_label.hidden = false;
  startButton.hidden = true;
  submitButton.hidden = false;
  var timer = setInterval(function () {
    console.log(timeRemaining);

    timeRemaining--;
    timerElm.innerHTML = timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timer);
      startButton.hidden = false;
      submitButton.hidden = true;
      questionArea.hidden = true;
      answer_1.hidden = true;
      answer_2.hidden = true;
      answer_3.hidden = true;
      answer_1_label.hidden = true;
      answer_2_label.hidden = true;
      answer_3_label.hidden = true;
    }
  }, 1000);
}
