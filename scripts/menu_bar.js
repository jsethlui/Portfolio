
var hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active")
})

function toggleMenuBar() {
    var mobilePageContainer = document.querySelector(".menu")
    mobilePageContainer.classList.toggle("menu_visible")
    if (mobilePageContainer.style.display === "block") {
        // do nothing
    } else {    // if menu bar selected
        mobilePageContainer.style.display = "block"
    }
}