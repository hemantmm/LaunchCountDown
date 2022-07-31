var countDownDate = new Date("Nov 30, 2022 00:00").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
  
  var days = Math.round(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(days<10)
  {
      var days ="0"+ Math.floor(distance / (1000 * 60 * 60 * 24));
  }

  if(hours<10)
  {
    var hours ="0"+ Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  if(minutes<10)
  {
    var minutes ="0"+ Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  }

  if(seconds<10)
  {
  var seconds ="0"+ Math.floor((distance % (1000 * 60)) / 1000);
  }
  
  document.getElementById("demo1").innerHTML = days + " ";

  document.getElementById("demo2").innerHTML =  hours + " ";

  document.getElementById("demo3").innerHTML =  minutes+" " ;

  document.getElementById("demo4").innerHTML =  seconds +" ";

  document.getElementById("demo5").innerHTML =  "days " +"hours "
  + "minutes " + "seconds ";
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);