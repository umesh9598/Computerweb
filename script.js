
let headings = ["Get Free Courses Online...", "Course Videos and lots of tutorial online...", "Join Now...!"];
let i = 0;

let intervalId = setInterval(function () {
    document.querySelector(".change").innerHTML = headings[i];
    document.querySelector(".change").style.fontFamily = 'Baloo Bhai 2', 'cursive';
    if(i ==(headings.length - 1)){
        i =0;
    }else{
        i++;
    }
   
},4000)

burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
logo = document.querySelector(".logo");

burger.addEventListener("click", ()=>{
    navlist.classList.toggle("v-class")
    logo.classList.toggle("v-class")
    navbar.classList.toggle("h-nav")
})




