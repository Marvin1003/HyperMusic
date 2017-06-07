window.onload = function()
{
  var test = document.getElementById("logo1");
  function changeimage()
  {
    var element = document.getElementById("logo1");
    element.style.opacity = "1";

  }
  setTimeout(changeimage, 3000);
}

/* AUDIO PLAYER */
function play()
{
  var track = new Audio ("music/TheOcean.mp3");
  var icon = document.getElementById("playpause");
  if(icon.textContent = "play_arrow")
    icon.textContent ="pause";
  else
    icon.textContent = "play_arrow";
}
