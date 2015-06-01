javascript:(function() {
  var answerList = document.getElementsByClassName('quiz_result'),
      questionList;

  if (!answerList.length) {
    questionList = document.getElementsByClassName('quiz_question');
  }

  [].forEach.call(answerList, function(v,i,a){v.style.display = 'block'});
});

// javascript:(function()%7Bjavascript:(function()%7B(function()%7Bvar found,loc%3Dwindow.location,protocol%3Dloc.protocol,host%3Dloc.host,pathname%3Dloc.pathname,search%3Dloc.search,paramsArray%3D%5B%5D,temp%3D%5B%5D,q%3D%27%27,x%3BparamsArray%3Dsearch.split(%27%26%27)%3Bsearch%3D%5B%5D%3Bif(!paramsArray%5B0%5D)%7Bq%3D%27%3F%27%3B%7Dwhile(x%3DparamsArray.shift())%7Btemp%3Dx.split(%27%3D%27)%3Bif(temp%5B0%5D%3D%3D%27uh%27 %7C%7C temp%5B0%5D%3D%3D%27%3Fuh%27)%7Btemp%5B1%5D%3D%27f%27%7C%7Ctemp%5B1%5D%3Bfound%3Dtrue%3B%7Dsearch.push(temp.join(%27%3D%27))%3B%7Dif(!found)%7Bsearch.push(%27uh%3Df%27)%3B%7Dwindow.location.href%3Dprotocol %2B %27//%27 %2B host %2B pathname %2B q %2B search.join(%27%26%27)%3B%7D())%3B%7D)()%3B%7D())%3B