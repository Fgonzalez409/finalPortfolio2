const handleClick = () => {
    let mainBody = document.getElementById("main-body");

    if(mainBody.style.display === "none") {
        mainBody.style.display ="block"
    }

    else{
        mainBody.style.display = "none"
    }
}