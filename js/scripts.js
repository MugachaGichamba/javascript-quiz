$(document).ready(function(){
  $("button#submit").click(function(){
      total = 0
      for(count = 1; count <= 5; count++){
        count = parseInt(count);
        total += parseInt($("input:radio[name=question" + count +"]:checked").val());
      }
  $("h1").after("<h2>Your score is: " +total + "/10<h2> ");
  $("h1").after("<h2>" + calculatePercentage(total) + "<h2>");

  $("html, body").animate({ scrollTop: 0 }, "slow");
  $('h2').addClass("score");
  });
});

function calculatePercentage(total){
  var percentageScore =  (total /10) * 100;
  percentString = percentageScore.toString() + "% means: ";
  if (percentageScore > 80){
    return percentString + "You have excellently passed";
  } else if (percentageScore >= 50 && percentageScore < 80){
      return percentString+  "You have fairly passed";
  }
  else {
    return percentString +  "You need to retake the test";
  }
}
