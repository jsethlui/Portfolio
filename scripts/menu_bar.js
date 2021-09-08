
function toggleMenuBar() {
    var mobilePageContainer = document.getElementById("hamburger_menu")
    if (mobilePageContainer.style.display === "block") {
        mobilePageContainer.style.display = "none"
    } else {    // if menu bar selected
        mobilePageContainer.style.display = "block"
    }
}