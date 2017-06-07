

/* INITIALIZE VOLUME */
var audio;
window.onload = function()
{
  audio = document.getElementById("audio");
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
var tracknumber = 1;
function playpause()
{
  changeicon1();
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
  audio = document.getElementById("audio");
  audio.volume = volume/100;
}
function next()
{
  tracknumber++;
  if(tracknumber == 5)
    tracknumber = 1;
  changeicon();
  play();
  audio.play();
}
function previous()
{
  tracknumber--;
  if(tracknumber == 0)
    tracknumber = 4;
  changeicon();
  play();
}
function shuffle()
{
  var random;
  do {
    random = Math.round(Math.random()*3+1);
  } while (tracknumber === random);
  tracknumber = random;
  play();
}
function play()
{
  audio = document.getElementById("audio");
  var trackname = 'music/' + tracknumber + ".mp3";
  audio.src = trackname;
  audio.play();
  var songname = document.getElementById("songname");
  if(tracknumber === 1)
    songname.textContent = "Mike Perry - The Ocean (DiCaprio Remix)";
  else if(tracknumber === 2)
    songname.textContent = "Luis Fonsi & Daddy Yankee ft. Justin Bieber - Despacito (El Bee X Chunky Dip Remix)";
  else if(tracknumber === 3)
    songname.textContent = "Galantis - No Money (Andrew Belize Remix)";
  else if(tracknumber === 4)
    songname.textContent = "The Chainsmokers - Don't Say ft. Emily Warren (DEVI Remix)";

    audio.addEventListener('ended', function()
    {
      tracknumber++;
      if(tracknumber == 5)
        tracknumber = 1;
      play();
    });

}
function changeicon1()
{
  var icon = document.getElementById("playpausebutton");
  if(icon.textContent === "play_arrow")
  {
    icon.textContent ="pause";
    play();
  }
  else
  {
    icon.textContent = "play_arrow";
    audio.pause();
  }
}
function changeicon()
{
  var icon = document.getElementById("playpausebutton");
  if(icon.textContent === "play_arrow")
    icon.textContent ="pause";
}
