

/* INITIALIZE VOLUME */
var audio;
var player;

window.onload = function()
{
  var showvidicon = document.getElementById("showvidicon");
  var iconshuffle = document.getElementById("shuffle");
  var iconrepeat = document.getElementById("repeat");
  var main = document.getElementById("dj").id = "introbackground";
  var section = document.getElementById("section");
  var name = document.getElementById("name");
  var nav = document.getElementById("nav");

  showvidicon.style.color = "white";
  iconshuffle.style.color = "white";
  iconrepeat.style.color = "white";

  setTimeout(function()
  {
    player.setVolume(2.5);
    play();
    changeicon();
  }, 2500);

  setTimeout( function() {
    var main = document.getElementById("introbackground").id = "dj";
    section.style.transition = "transition: 1s ease-in-out";
    name.style.display = "none";
    document.getElementById("dj").style.display = "flex";
    //section.style.top = "100vh";
    //section.style.transition = "scale(0)";
    //section.style.opacity = "0";
    section.style.animation = "frombottom 2s forwards";
    nav.style.display = "block";
  }, 3000);

  /* INITIALIZE WITH LOW VOLUME */
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
  player.setVolume(volume);
}


function next()
{
  var icon = document.getElementById("shuffle");
  if(icon.style.color == "white")
  {
    if(tracknumber == 5)
      tracknumber = 1;
    else
      tracknumber++;
  }
  else
    random();
  changeicon();
  play();
}


function random()
{
  var random;
  do
  {
    random = Math.round(Math.random()*4+1);
  } while (tracknumber === random);
  tracknumber = random;
}


function previous()
{
  if(tracknumber == 1)
    tracknumber = 5;
  else
    tracknumber--;
  changeicon();
  play();
}


function shuffle()
{
  var iconshuffle = document.getElementById("shuffle");
  if(iconshuffle.style.color === "white")
    iconshuffle.style.color = "#007fff";
  else
  {
    iconshuffle.style.color = "white";
    tracknumber = safetracknumber;
  }
}


function repeat()
{
  var iconrepeat = document.getElementById("repeat");
  if(iconrepeat.style.color === "white")
    iconrepeat.style.color = "#007fff";
  else
    iconrepeat.style.color = "white";
}
var safetracknumber;
function play()
{
  var musicvideo = document.getElementById("player");
  safetracknumber = tracknumber;
  audio = document.getElementById("audio");
  /*audio.play();*/
  var songname = document.getElementById("songname");
    if(tracknumber === 1)
    {
      songname.textContent = "Luis Fonsi & Daddy Yankee ft. Justin Bieber - Despacito (El Bee X Chunky Dip Remix)";
      player.loadVideoById('kZFHX21QwIw');
    }
    else if(tracknumber === 2)
    {
      songname.textContent = "The Chainsmokers - Don't Say ft. Emily Warren (DEVI Remix)";
      player.loadVideoById('2mjMRLFoUWE');
    }
    else if(tracknumber === 3)
    {
      songname.textContent = "Mike Williams Ft. Brēzy - Don't Hurt (TuneSquad x Adryx - G Bootleg)";
      player.loadVideoById('qlT0huRUrqI');
    }
    else if(tracknumber === 4)
    {
      songname.textContent = "Martin Garrix & Troye Sivan - There For You (Tom Westy Remix)";
      player.loadVideoById('5y2pG-dtVKc');
    }
    else if(tracknumber === 5)
    {
      songname.textContent = "TESTING";
      player.loadVideoById('B7bqAsxee4I');
    }
  audio.addEventListener('ended', NextSong);
}

var test = 0.00;
function changeicon1()
{
  var icon = document.getElementById("playpausebutton");
  if(icon.textContent === "play_arrow")
  {
    icon.textContent ="pause";
    player.seekTo(test);
    player.playVideo();
  }
  else
  {
    icon.textContent = "play_arrow";
    test = player.getCurrentTime();
    player.pauseVideo();
  }
}


function changeicon()
{
  var icon = document.getElementById("playpausebutton");
  if(icon.textContent === "play_arrow")
    icon.textContent ="pause";
}

function NextSong()
{
  var iconshuffle = document.getElementById("shuffle");
  var iconrepeat = document.getElementById("repeat");
  if(iconrepeat.style.color === "white" && iconshuffle.style.color === "white")
  {
    if(tracknumber === 5)
      tracknumber = 1;
    else
      tracknumber++;
  }
  else if(iconrepeat.style.color !== "white")
  {
    playerVars: {
        loop: '1'
      }
  }
  else if(iconshuffle.style.color !== "white")
  {
    random();
  }
  play();
}


function showvid()
{
  var icon = document.getElementById("playpausebutton");
  var showvidicon = document.getElementById("showvidicon");
  var logo = document.getElementById("logo");
  var logo1 = document.getElementById("logo1")
  var clickvideo = document.getElementById("clickvideo");
  if(showvidicon.style.color === "white")
  {
    showvidicon.style.color = "#007fff";
    logo.style.display="none";
    logo1.style.display="none";
    clickvideo.style.transform = "scale(1)";
    if(icon.textContent === "play_arrow")
    {
      player.playVideo(test);
      icon.textContent = "pause";
    }
  }
  else
  {
    showvidicon.style.color = "white";
    clickvideo.style.transform = "scale(0)";
    logo.style.display="block";
    logo.style.animation="none";
    logo1.style.display="block";
  }
}



/* YOUTUBE VIDEO PLAYER */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady()
{
  player = new YT.Player('player', {
    playerVars: {
      'controls': 0,
      'autohide': 1,
      'showinfo' : 0, // <- This part here
      'wmode': 'opaque',
      'rel': 0,
      'fs' : 0,
      'disablekb' : 1,
      'modestbranding' : 1,
      'playsinline' : 1
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  })
}
// autoplay video
/*function onPlayerReady(event) {
    event.target.playVideo();
}*/
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data === 0) {
    done = true;
    NextSong();
  }
}

// when video ends
/*
function onPlayerStateChange(event) {
    if(event.data === 0) {
        alert('done');
    }
}*/
