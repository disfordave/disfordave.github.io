
document.getElementById("more-button").addEventListener("click", function() {
    document.getElementById("more-button").style.display = "none";
    document.getElementById("less-button").style.display = "inline";
    document.getElementById("hidden").style.display = "inline";
    document.getElementById("hidden-2").style.display = "inline";
    document.getElementById("hidden-dots").style.display = "none";
});

document.getElementById("less-button").addEventListener("click", function() {
    document.getElementById("less-button").style.display = "none";
    document.getElementById("more-button").style.display = "inline";
    document.getElementById("hidden").style.display = "none";
    document.getElementById("hidden-2").style.display = "none";
    document.getElementById("hidden-dots").style.display = "inline";
});