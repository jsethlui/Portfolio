
var techSkillsSelected = false;
function slideIn() {
    const programmingContent = document.getElementById("programming1");
    width = 0;
    var performAction = setInterval(function() {
        if (width < 30) {
            width += 1;
            programmingContent.style.opacity = "1";
            programmingContent.style.left = width + "%";
        }
    }, 10);
}