


var calculate_score = function(){
  total = 0
  for(count = 1; count <= 5; count++){
    count = parseInt(count);
    total += parseInt($("input:radio[name=question" + count +"]:checked").val());
    console.log(total);
  }
  console.log(total);
}
calculate_score();
