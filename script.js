window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
     document.getElementById("nav-bar-2").style.top = "0";
     document.getElementById("nav-bar-2").style.left = "0";
     document.getElementById("nav-bar-2").style.position = "fixed";
     document.getElementById("nav-bar-2").style.width = "100%";
     document.getElementById("nav-bar-2").style.height = "100px";
     document.getElementById("nav-bar-2").style.background = "black";

     document.getElementById("btp").style.opacity = "1";
 } else {
     document.getElementById("nav-bar-2").style.top = "-200px";

     document.getElementById("btp").style.opacity = "0";
 }
}


function openSide() {
    document.getElementById('nav-bar').style.right = '0';
    document.getElementById('fa-bars').style.display = 'none';
    document.getElementById('side2').style.display = 'block';
}

function closeSide() {
    document.getElementById('nav-bar').style.right = '-100%';
    document.getElementById('fa-bars').style.display = 'block';
    document.getElementById('side2').style.display = 'none';
}



