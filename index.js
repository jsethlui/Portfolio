

window.addEventListener("load", function(){
    loadBar();
});


function loadBar() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var element = document.getElementById("entire_bar");
      var width = 1;
      var id = setInterval(function() {
          if (width >= 100) {
              clearInterval(id);
              i = 0;
          } else if (width < 30) {
              width += 3;
              element.style.width = width + "%";
          } else {
              width += 2;
              element.style.width = width + "%";
          }

          // if done loading, make progress bar disappear
          if (width > 100) {
              // document.getElementById("entire_bar").style.visibility = "hidden";
              fadeOut();
          }
      }, 10);
      
    } 
} 

function fadeOut() {
    var element = document.getElementById("entire_bar");
    var fadeEffect = setInterval(function() {
        if (!element.style.opacity) {
            element.style.opacity = 1;
        }
        if (element.style.opacity > 0) {
            element.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 25);
}