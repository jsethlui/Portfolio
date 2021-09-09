
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
});

function toggleMenuBar() {
    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    var mobilePageContainer = document.getElementById("menu")

    if (mobilePageContainer.style.display === "block") {
        mobilePageContainer.style.display = "none"
    } else {    // if menu bar selected
        mobilePageContainer.style.display = "block"
    }
}