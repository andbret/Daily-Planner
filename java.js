
// makes sure that anything in local storage gets displayed
window.onload = document.getElementById("ele9").innerHTML = localStorage.getItem("a");
window.onload = document.getElementById("ele10").innerHTML = localStorage.getItem("b");
window.onload = document.getElementById("ele11").innerHTML = localStorage.getItem("c");
window.onload = document.getElementById("ele12").innerHTML = localStorage.getItem("d");
window.onload = document.getElementById("ele13").innerHTML = localStorage.getItem("e");
window.onload = document.getElementById("ele14").innerHTML = localStorage.getItem("f");
window.onload = document.getElementById("ele15").innerHTML = localStorage.getItem("g");
window.onload = document.getElementById("ele16").innerHTML = localStorage.getItem("h");
window.onload = document.getElementById("ele17").innerHTML = localStorage.getItem("j");

  
// displays the date and time
console.log(moment())
function update() {
    document.getElementById("currentDay").innerHTML = moment().format('D. MMMM YYYY H:mm:ss');

  }
//   updates the time every second
  setInterval(update, 1000);
//   gets the currect hour of the day
  var time = parseInt(moment().format('HH'));
// console.log(time);
// checks every form
var elements = document.getElementsByClassName("form-control");
var names = '';
for(var i=0; i<elements.length; i++) {
    names = elements[i].name;
    var tryy = parseInt(names);
// if the form coincides with the current time
    if (tryy === time){
        elements[i].style.backgroundColor = "red";
        elements[i].style.color = "white"; 
    }
    // fills in all previous forms
    else{
        elements[i].style.backgroundColor = "lightgrey";
    }
    // fills in all future forms
    if (tryy > time){
        elements[i].style.backgroundColor = "lightgreen"; 
    }



    // console.log(names);
    // console.log(elements[i]);
    // console.log(tryy);
}




// sets the click function for each submit button
$("#submit9").click(function(){
    var formInput = document.querySelector("#ele9");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("a", reminderText);
   
    document.getElementById("ele9").innerHTML = localStorage.getItem("a");
    localStorage.setItem("a", reminderText);
    console.log(localStorage.getItem("a"));
});
$("#submit10").click(function(){
    var formInput = document.querySelector("#ele10");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("b", reminderText);
   
    document.getElementById("ele10").innerHTML = localStorage.getItem("b");
    localStorage.setItem("b", reminderText);
    console.log(localStorage.getItem("b"));
});
$("#submit11").click(function(){
    var formInput = document.querySelector("#ele11");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("c", reminderText);
   
    document.getElementById("ele11").innerHTML = localStorage.getItem("c");
    localStorage.setItem("c", reminderText);
    console.log(localStorage.getItem("c"));
});
$("#submit12").click(function(){
    var formInput = document.querySelector("#ele12");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("d", reminderText);
   
    document.getElementById("ele12").innerHTML = localStorage.getItem("d");
    localStorage.setItem("d", reminderText);
    console.log(localStorage.getItem("d"));
});
$("#submit13").click(function(){
    var formInput = document.querySelector("#ele13");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("e", reminderText);
   
    document.getElementById("ele13").innerHTML = localStorage.getItem("e");
    localStorage.setItem("e", reminderText);
    console.log(localStorage.getItem("e"));
});
$("#submit14").click(function(){
    var formInput = document.querySelector("#ele14");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("f", reminderText);
   
    document.getElementById("ele14").innerHTML = localStorage.getItem("f");
    localStorage.setItem("f", reminderText);
    console.log(localStorage.getItem("f"));
});
$("#submit15").click(function(){
    var formInput = document.querySelector("#ele15");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("g", reminderText);
   
    document.getElementById("ele15").innerHTML = localStorage.getItem("g");
    localStorage.setItem("g", reminderText);
    console.log(localStorage.getItem("g"));
});
$("#submit16").click(function(){
    var formInput = document.querySelector("#ele16");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("h", reminderText);
   
    document.getElementById("ele16").innerHTML = localStorage.getItem("h");
    localStorage.setItem("h", reminderText);
    console.log(localStorage.getItem("h"));
});
$("#submit17").click(function(){
    var formInput = document.querySelector("#ele17");
    event.preventDefault();
    console.log("Form was submitted!");
      var reminderText = formInput.value;

    console.log(reminderText);
    localStorage.setItem("j", reminderText);
   
    document.getElementById("ele17").innerHTML = localStorage.getItem("j");
    localStorage.setItem("j", reminderText);
    console.log(localStorage.getItem("j"));
});





