var enter = document.getElementById("enter");
enter.addEventListener("click",tazCheck());

function tazCheck(){
  var numz = document.getElementById("inputz").nodeValue;
  console.log(numz);
  for (var i = 0; i < numz;i++) {
    var target = document.getElementById("dataz");
    var taz = document.createElement(
      "section");
      var tazNum = document.createElement("div");
      var typez = document.createElement("input");
      var amount = document.createElement("input");
      var qty = document.createElement("input");
  var rate = document.createElement("input");
  var init = document.createElement("input");
  var outit = document.createElement("input");
  var totalz = document.createElement("div");
  var production = document.createElement("div");
 var attraction = document.createElement("div");
 tazNum.textContent = i;
 
   }}