//Modal function so they open when the appropriate button is clicked upon and close when clciked away from or close button is clicked

var modals = document.getElementsByClassName("modal");

var btns = document.getElementsByClassName("menu")

let spans = document.getElementsByClassName("close");

//Loop the buttons to determine which one is clicked and display it's modal 
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    modals[i].style.display = "block";
  }
}
//Loop the close 'x' so that whichever is open will then close it's modal when clicked
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    modals[i].style.display = "none";
  }
} 
