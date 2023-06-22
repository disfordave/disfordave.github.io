
function ClickMore() {
    document.getElementById("more-button").style.display = "none";
    document.getElementById("less-button").style.display = "inline";
    document.getElementById("hidden").style.display = "inline";
    document.getElementById("hidden-2").style.display = "inline";
    document.getElementById("hidden-3").style.display = "none";
};

function ClickLess() {
    document.getElementById("less-button").style.display = "none";
    document.getElementById("more-button").style.display = "inline";
    document.getElementById("hidden").style.display = "none";
    document.getElementById("hidden-2").style.display = "none";
    document.getElementById("hidden-3").style.display = "inline";
}