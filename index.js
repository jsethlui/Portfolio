

window.addEventListener("load", function(){
    loadBar();
});


function loadBar() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var element = document.getElementById("spine");
      var height = 1;
      var id = setInterval(function() {
          if (height >= 100) {
              clearInterval(id);
              i = 0;
          } else if (height < 55) {
              height += 4;
              element.style.height = height + "%";
          } else {
              height += 4;
              element.style.height = height + "%";
          }

          // if done loading, make progress bar disappear
          if (height > 100) {
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