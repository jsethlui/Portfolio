
var techSkillsSelected = false;
function slideIn() {
    const programmingContent = document.getElementById("tech");
    var width = 0;
    var opacity = 0;
    var performAction = setInterval(function() {
        if (width < 10) {
            width += 1;
            opacity += 0.1;
            programmingContent.style.opacity = opacity;
            programmingContent.style.left = width + "%";
        }
    }, 10);
}