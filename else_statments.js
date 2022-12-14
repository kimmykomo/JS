
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
//another one

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
    
  }else {

    result = "5 or Smaller";
  }
  return result;
}

testElse(4);

//chained
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
//another example
function testElseIf(val) {
 
if (val >10){
  return "Greater than 10";
}else if (val <5){
  return "Smaller than 5";
}else{
  return "Between 5 and 10";
}

}
testElseIf(7)
