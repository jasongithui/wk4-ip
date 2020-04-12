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

