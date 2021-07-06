var menu = document.getElementById("menu");
var closee = document.getElementById("close");
var nav = document.getElementById("nav");
   
function menuOpen(){
   nav.style.right = "0px";
}
function closeMenu(){
    nav.style.right = "-200px";
}
menu.addEventListener("click",menuOpen);
closee.addEventListener("click",closeMenu);