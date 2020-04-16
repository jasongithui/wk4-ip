// Switch icon Animation
function switchPizza (){
    let pizz = document.getElementById("pizz");
    pizz.innerHTML = "&#xf589;";

    setTimeout(function(){
        pizz.innerHTML = "&#xf818;";
    }, 1000);
}
 // call Animation
switchPizza ();
 
// Animate Every 2 seconds
setInterval(switchPizza, 2000);

//Order section//
var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}