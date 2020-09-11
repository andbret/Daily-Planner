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
        elements[i].style.backgroundColor = "lightblue"; 
    }
    if (tryy > test){
        elements[i].style.backgroundColor = "blue"; 
    }

    console.log(names);
    console.log(elements[i]);
    console.log(tryy);
}




var formInput = document.querySelector("#test9");
$("#submit").click(function(){
    event.preventDefault();
    console.log("Form was submitted!");
    
    var reminderText = formInput.value;

    console.log(reminderText);
    document.getElementById("test9").placeholder = reminderText;
    localStorage.setItem("toost", reminderText);
    var ihope = localStorage.getItem("toost");
    document.getElementById("test10").placeholder = ihope;
       
      

   
      
  });




