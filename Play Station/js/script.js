var menu = document.getElementById("menu");
var menuList = document.getElementById("menu-list");
menuList.style.maxHeight = "0px";
function togglemenu(){
     if(menuList.style.maxHeight =="0px"){
         menuList.style.maxHeight = "130px"
     }
     else{
         menuList.style.maxHeight = "0px";

     }

}
menu.addEventListener("click",togglemenu);