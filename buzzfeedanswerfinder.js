(function() {
  var answerList = document.getElementsByClassName('quiz_result'),
      questionList;

  if (!answerList.length) {
    questionList = document.getElementsByClassName('quiz_question');
    // TODO: Implement case when answer is not revealed
  }

  [].forEach.call(answerList, function(v,i,a){v.style.display = 'block'});
})();
