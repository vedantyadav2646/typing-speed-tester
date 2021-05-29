//how to start the timer//
function startTimer(){
  var counter = 60;
  var interval = setInterval(function() {
      counter--;
      if (counter <= 0) {
           clearInterval(interval);
           document.getElementById("quoteInput").disabled = true;
          $('#timer').html("<h3>Count down complete</h3>");  
          return;
      }else{
        $('#time').text(counter);
        console.log("Timer --> " + counter);
      }
  }, 1000);
}
  function start()
  {
      document.getElementById("time").style="color:floralwhite;";
      startTimer();
  };

//how to read the textarea//

function countWords() {
  var words = document.getElementById("quoteInput").value;
  var Count = 0;

  var split = words.split(' ');
   
  for(var i= 0; i < split.length; i++) {
    if (split[i] != ""){
      Count += 1;
    }
  }
  document.getElementById("show").innerHTML = Count;
  console.log("hello world");
}


