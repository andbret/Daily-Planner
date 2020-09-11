
window.onload = document.getElementById("test9").innerHTML = localStorage.getItem("a");
window.onload = document.getElementById("test10").innerHTML = localStorage.getItem("b");
window.onload = document.getElementById("test11").innerHTML = localStorage.getItem("c");
window.onload = document.getElementById("test12").innerHTML = localStorage.getItem("d");
window.onload = document.getElementById("test13").innerHTML = localStorage.getItem("e");
window.onload = document.getElementById("test14").innerHTML = localStorage.getItem("f");
window.onload = document.getElementById("test15").innerHTML = localStorage.getItem("g");
window.onload = document.getElementById("test16").innerHTML = localStorage.getItem("h");
window.onload = document.getElementById("test17").innerHTML = localStorage.getItem("j");

  

console.log(moment())
function update() {
    // $('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
    document.getElementById("currentDay").innerHTML = moment().format('D. MMMM YYYY H:mm:ss');
    // console.log(moment().format('H'));

  }
  
  setInterval(update, 1000);
  var test = parseInt(moment().format('HH'));
console.log(test);
// document.getElementById("currentDay").innerHTML = moment().format('D. MMMM YYYY H:mm:ss'));

var elements = document.getElementsByClassName("form-control");
var names = '';
for(var i=0; i<elements.length; i++) {
    names = elements[i].name;
    var tryy = parseInt(names);

    if (tryy === test){
        elements[i].style.backgroundColor = "red";
        elements[i].style.color = "white"; 
    }
    else{
        elements[i].style.backgroundColor = "lightgrey";
    }
    if (tryy > test){
        elements[i].style.backgroundColor = "lightgreen"; 
    }



    console.log(names);
    console.log(elements[i]);
    console.log(tryy);
}





$("#submit9").click(function(){
    var formInput = document.querySelector("#test9");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("a", reminderText);
   
    document.getElementById("test9").innerHTML = localStorage.getItem("a");
    localStorage.setItem("a", reminderText);
    console.log(localStorage.getItem("a"));
});
$("#submit10").click(function(){
    var formInput = document.querySelector("#test10");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("b", reminderText);
   
    document.getElementById("test10").innerHTML = localStorage.getItem("b");
    localStorage.setItem("b", reminderText);
    console.log(localStorage.getItem("b"));
});
$("#submit11").click(function(){
    var formInput = document.querySelector("#test11");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("c", reminderText);
   
    document.getElementById("test11").innerHTML = localStorage.getItem("c");
    localStorage.setItem("c", reminderText);
    console.log(localStorage.getItem("c"));
});
$("#submit12").click(function(){
    var formInput = document.querySelector("#test12");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("d", reminderText);
   
    document.getElementById("test12").innerHTML = localStorage.getItem("d");
    localStorage.setItem("d", reminderText);
    console.log(localStorage.getItem("d"));
});
$("#submit13").click(function(){
    var formInput = document.querySelector("#test13");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("e", reminderText);
   
    document.getElementById("test13").innerHTML = localStorage.getItem("e");
    localStorage.setItem("e", reminderText);
    console.log(localStorage.getItem("e"));
});
$("#submit14").click(function(){
    var formInput = document.querySelector("#test14");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("f", reminderText);
   
    document.getElementById("test14").innerHTML = localStorage.getItem("f");
    localStorage.setItem("f", reminderText);
    console.log(localStorage.getItem("f"));
});
$("#submit15").click(function(){
    var formInput = document.querySelector("#test15");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("g", reminderText);
   
    document.getElementById("test15").innerHTML = localStorage.getItem("g");
    localStorage.setItem("g", reminderText);
    console.log(localStorage.getItem("g"));
});
$("#submit16").click(function(){
    var formInput = document.querySelector("#test16");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("h", reminderText);
   
    document.getElementById("test16").innerHTML = localStorage.getItem("h");
    localStorage.setItem("h", reminderText);
    console.log(localStorage.getItem("h"));
});
$("#submit17").click(function(){
    var formInput = document.querySelector("#test17");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("j", reminderText);
   
    document.getElementById("test17").innerHTML = localStorage.getItem("j");
    localStorage.setItem("j", reminderText);
    console.log(localStorage.getItem("j"));
});





