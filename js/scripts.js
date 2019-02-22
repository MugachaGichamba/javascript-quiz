$(document).ready(function(){
  $("button#submit").click(function(){
      total = 0
      for(count = 1; count <= 5; count++){
        count = parseInt(count);
        total += parseInt($("input:radio[name=question" + count +"]:checked").val());
      }
  $("h1").before("<h2>Your score is: " +total + "<h2> ");
  });
});
