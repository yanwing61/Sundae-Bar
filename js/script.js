var start = document.getElementById("start");
var reset = document.getElementById("reset");
var cone = document.getElementById("cone");
var congratsCir = document.getElementById("congrat-cir");
var congratsText = document.getElementById("congrat-text");
var instruc = document.getElementById("instruction");

var isStarted = false;

start.addEventListener("click", moveCone);

function moveCone(){
  if (!isStarted) {
    isStarted = true;
    cone.classList.add("movecone");
    start.classList.remove("hintStart");
  }

  var flavors = [
    document.getElementById("orange"),
    document.getElementById("mango"),
    document.getElementById("strawberry"),
    document.getElementById("blueberry"),
    document.getElementById("cookies"),
    document.getElementById("mint")
  ];

  var isFlavorSelected = false;

  flavors.forEach(function(flavor) {
    flavor.addEventListener("click", function() {
      if (!isFlavorSelected) {
        flavor.classList.add("flavourselected");
        isFlavorSelected = true; 
      }
    });
  });
    
  var toppings =[
    document.getElementById("cherry"),
    document.getElementById("chocolate"),
    document.getElementById("cream")
  ]
  
  var isToppingSelected = false;

  toppings.forEach(function(topping){
    topping.addEventListener("click", function(){
      if (!isToppingSelected){
        topping.classList.add("toppingselected");
        isToppingSelected = true;
        start.innerHTML = "Done";
        start.classList.add("hintStart");
      }
    });
  });

 

  start.addEventListener('click', function() {
    start.classList.remove("hintStart");
    congratsCir.classList.add("congratscir");
    congratsText.classList.add("congratstext");
    instruc.style.display = "none";
    flavors.forEach(function(flavor) {
      if (!flavor.classList.contains("flavourselected")) {
        flavor.style.display = "none";
      }
    });
    toppings.forEach(function(topping) {
      if (!topping.classList.contains("toppingselected")) {
        topping.style.display = "none";
      }
    });
  });


  reset.addEventListener('click', function() {
    location.reload(); 
  });

};
