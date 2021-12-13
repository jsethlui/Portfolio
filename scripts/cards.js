
var card = document.getElementById("cards");
cards.onclick = function() {
    alert("clicked")
    let pos = 0
    const elem = document.getElementById("cards_view");   
    let id = setInterval(frame, 5)
    function frame() {
        if (pos == 350) {
            clearInterval(id)
        } else {
            pos--;
            elem.top = pos + "px"
        }
    }
}