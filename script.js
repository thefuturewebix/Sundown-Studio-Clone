var fixed = document.querySelector("#fixedimage")
var page3 = document.querySelector("#page3")
var element = document.querySelectorAll(".elme")


page3.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})
page3.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})