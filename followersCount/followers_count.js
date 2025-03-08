let count = 0;

function increaseCount(){
  count++;
  displayCount();
  checkCountValue();
}
function displayCount(){
  document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue(){
  if(count === 10){
  alert("you gained 10 followers! congrats")

}else if (count ===20){
  alert("20 followers keep it up")
}

}