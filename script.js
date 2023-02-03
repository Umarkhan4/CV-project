function onclickMenu(){
    document.getElementById("menu").classList.toggle("icon")

    document.getElementById("nav").classList.toggle("change")
}
// num generation 
let valueDisply = document.querySelectorAll(".num");
let interval = 4000;
valueDisply.forEach((valueDisply) => {
let startValue = 0;
let endValue = parseInt(valueDisply.getAttribute
   ("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function(){
   startValue += 1;
   valueDisply.textContent = startValue;
   if (startValue == endValue){
       clearInterval(counter)
   }
},
duration);
} );