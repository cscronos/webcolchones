// Get the button:
let elNavbar = document.getElementById("myFun");
let elMain1 = document.getElementById('myFun1');
let elMain2 = document.getElementById('myFun2');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    elNavbar.style.position = "fixed";
    elMain1.style.marginTop = "49px";
    elMain2.style.marginTop = "49px";
  } else {
    elNavbar.style.position = "relative";
    elMain1.style.marginTop = "0px";
    elMain2.style.marginTop = "0px";
  }
}