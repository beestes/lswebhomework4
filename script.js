document.body.style.backgroundColor = "#ffe6e6";

document.querySelector("h1").style.backgroundColor = "#e6f2ff";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML = "Blake";
document.getElementById("favorites").innerHTML = "Typography, Design, Photography, Creating, Music";
document.getElementById("hometown").innerHTML = "Saint Louis";

//document.querySelector("li").className = "listitem";
document.querySelector("ul").style.backgroundColor = "#ffb3b3";

var me = document.createElement('img');
me.src = "pictures/me.jpg";

document.body.appendChild(me);