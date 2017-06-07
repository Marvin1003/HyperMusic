

/* INITIALIZE VOLUME */
window.onload = function()
{
  var audio = document.getElementById("audio");
  audio.volume = 0.1;
  {
    setTimeout(
      function()
      {
      var element = document.getElementById("logo1");
      element.style.opacity = "1";
    }, 3000);
  }
}

function playpause()
{
  var icon = document.getElementById("playpausebutton");
  var audio = document.getElementById("audio");
  if(icon.textContent === "play_arrow")
  {
    icon.textContent ="pause";
    audio.play();
  }
  else
  {
    icon.textContent = "play_arrow";
    audio.pause();
  }
}
/* AUDIO PLAYER */
/* GLOBAL OBJECTS*/
var button, slider;
var clickcount = 0;

window.onclick = function(mouse)
{
  button = document.getElementById("volumebutton");
  slider = document.getElementById("volumeslider");
  if(clickcount === 2 && (slider.style.display === "block") && (button.style.display === "none")  && (mouse.target.id !== "volumeslider"))
  {
    button.style.display = "";
    slider.style.display = "none";
  }
  clickcount = 1;
  clickcount++;
}
function showvolumeslider()
{
  clickcount = 0;
  button = document.getElementById("volumebutton");
  slider = document.getElementById("volumeslider");
  if(button.style.display === "")
  {
    button.style.display = "none";
    slider.style.display = "block";
    clickcount++;
  }
}

function setvolume(volume)
{
  var audio = document.getElementById("audio");
  audio.volume = volume/100;
}
