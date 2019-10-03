if(window.location.href != "file:///C:/Users/denib/Desktop/Website%202/m.html#" || window.location.href != "xxilativxx.github.io/m") {
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/WebOs/i)) { // detect mobile browser
        window.location.replace("file:///C:/Users/denib/Desktop/Website%202/m.html#"); // redirect if mobile browser detected
    }
}

document.addEventListener("DOMContentLoaded", function(){

    //When scrolling execute PersistentBar
    window.onscroll = function() {persistentBar()};

    //get header
    var header = document.getElementById("myHeader");

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