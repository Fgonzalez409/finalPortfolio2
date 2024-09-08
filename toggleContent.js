function toggleContent() {
    var content = document.getElementById("additional-content");
    var button = document.getElementById("learn-more-button");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerHTML = '<i class="fa-solid fa-hand-point-right pulsating-icon"></i> See less';
    } else {
        content.style.display = "none";
        button.innerHTML = '<i class="fa-solid fa-hand-point-right pulsating-icon"></i> Click here to learn more';
    }
}