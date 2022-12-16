/*
Convert the switch statement into an object called lookup. 
Use it to look up val and assign the associated string to the result variable.
*/
// Setup
function phoneticLookup1(val) {
  let result = "";
  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  // Only change code above this line
  return result;
}

phoneticLookup1("charlie");


//results
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
 const lookup={
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
 }
 
 
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("charlie"));

