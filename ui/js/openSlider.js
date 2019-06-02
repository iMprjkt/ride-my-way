var input = document.getElementById("locationInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        location.href = "rides.html";
    }
});