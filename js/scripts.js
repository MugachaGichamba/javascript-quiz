$(document).ready(function(){
  $("button#submit").click(function(){
      total = 0
      for(count = 1; count <= 5; count++){
        count = parseInt(count);
        total += parseInt($("input:radio[name=question" + count +"]:checked").val());
      }
  $("h1").before("<h2>Your score is: " +total + "<h2> ");
  console.log(calculatePercentage(total));
  });
});

function calculatePercentage(total){
  var percentageScore =  (total /10) * 100;
  console.log(percentageScore);
  if (percentageScore > 80){
    return "You have excellently passed";
} else if (percentageScore >= 50 && percentageScore > 80){
return "You have fairly passed";
}
else {
  return "You need to retake the test";
}
}
