if(window.location.href != "https://xxilativxx.github.io/m") {
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/WebOs/i)) { // detect mobile browser
        window.location.replace("m"); // redirect if mobile browser detected
    }
}


document.addEventListener("DOMContentLoaded", function(){

    //When scrolling execute PersistentBar
    window.onscroll = function() {persistentBar()};

    var body = document.getElementById("body");
    
    var header = document.getElementById("myHeader");

    var overlay = document.getElementById("overlay");

    var open_menu = document.getElementById("open-menu");

    open_menu.onclick = function() {
        if (header.classList.contains("light")){
            overlay.style.visibility = "visible";
            header.classList.remove("light");
            header.classList.add("dark");
            body.classList.add("stop-scroll")
        }
        else {
            overlay.style.visibility = "hidden";
            header.classList.remove("dark");
            header.classList.add("light");
            body.classList.remove("stop-scroll")
        }
    }
    

    //get offset position of navbar
    var sticky = header.offsetTop;

    //remove or add class sticky depending on position
    function persistentBar() {
        if(window.pageYOffset > sticky) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    }
    
})