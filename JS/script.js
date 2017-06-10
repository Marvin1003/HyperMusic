
/* YOUTUBE VIDEO PLAYER */
var playlisttrack = 0;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady()
{
  player = new YT.Player('player', {
    playerVars: {
      controls: '0',
      autohide: '1',
      showinfo : '0', // <- This part here
      wmode: 'opaque',
      rel: '0',
      fs: '0',
      disablekb : '1',
      modestbranding : '1',
      playsinline : '1',
      enablejsapi : '1',
      loop: '1',
    },
    events: {
      'onReady' : onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError' : onPlayerError
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
function onPlayerError()
{
  player.nextVideo();
}

function onPlayerReady(event)
{
  event.target.setPlaybackQuality('small');
  event.target.setVolume(2.5);
  event.target.setLoop(true);
  event.target.cuePlaylist(
    {
      listType: 'playlist',
      list: 'PLWaEl4Kd1431oovMu8hTTThjAKnS--QXu',
      index: playlisttrack,
    })
}

function onPlayerStateChange(event) {
  document.getElementById("songname").textContent = player.getVideoData().title;
  var iconrepeat = document.getElementById("repeat");
  var showvidicon = document.getElementById("showvidicon");
  if (event.data === 3 && showvidicon.style.color === "white")
  {
      event.target.setPlaybackQuality('small');
  }
}
function setShuffle(shuffle)
{
    player.setShuffle(shuffle);
}


// when video ends
/*
function onPlayerStateChange(event) {
    if(event.data === 0) {
        alert('done');
    }
}*/
/* INITIALIZE VOLUME */
var audio, showvidicon, iconshuffle, iconrepeat, main, section, nav, iconnav;
window.onload = function()
{
  var name = document.getElementById("name");
  showvidicon = document.getElementById("showvidicon");
  iconshuffle = document.getElementById("shuffle");
  iconrepeat = document.getElementById("repeat");
  main = document.getElementById("dj").id = "introbackground";
  section = document.getElementById("section");
  nav = document.getElementById("nav");
  iconnav = document.getElementById("icons");
  audioplayer = document.getElementById("audioplayer");

  showvidicon.style.color = "white";
  iconshuffle.style.color = "white";
  iconrepeat.style.color = "white";
  setTimeout(function()
  {
    player.setPlaybackQuality('144p');
    player.playVideo();
    changeicon();
  }, 2500);

  setTimeout( function() {
    main = document.getElementById("introbackground").id = "dj";
    section.style.transition = "transition: 1s ease-in-out";
    name.style.display = "none";
    document.getElementById("dj").style.display = "flex";
    //section.style.top = "100vh";
    //section.style.transition = "scale(0)";
    //section.style.opacity = "0";
    section.style.animation = "frombottom 2s forwards";
    iconnav.style.visibility = "visible";
    nav.style.visibility = "visible";
    audioplayer.style.visibility = "visible";
    //nav.style.display = "block";
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


function shownav(value)
{
  if(value === 1)
  {
    iconnav.style.animation = "goUp 1s forwards";
    nav.style.animation = "goDown 1s forwards";
  }
  else
  {
    iconnav.style.animation = "goDown 1s forwards";
    nav.style.animation = "goUp 1s forwards";
  }
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
  changeicon();
  player.nextVideo();
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
  player.previousVideo();
  changeicon();
}

var shuffleon = false;
function shuffle()
{
  var iconshuffle = document.getElementById("shuffle");
  if(iconshuffle.style.color === "white")
  {
    iconshuffle.style.color = "#007fff";
    shuffleon = true;
    setShuffle(shuffleon);
    console.log(shuffleon);
  }
  else
  {
    iconshuffle.style.color = "white";
    shuffleon = false;
    setShuffle(shuffleon);
  }
}


function repeat()
{
  var iconrepeat = document.getElementById("repeat");
  if(iconrepeat.style.color === "white")
  {
    iconrepeat.style.color = "#007fff";
  }
  else
  {
    iconrepeat.style.color = "white";
    }
}
/*
var safetracknumber;
function play()
{
  var musicvideo = document.getElementById("player");
  safetracknumber = tracknumber;
  audio = document.getElementById("audio");
  /*audio.play();
  var songname = document.getElementById("songname");
  /*
    if(tracknumber === 1)
    {
      /*
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
*/

function changeicon1()
{
  var icon = document.getElementById("playpausebutton");
  if(icon.textContent === "play_arrow")
  {
    icon.textContent ="pause";
    player.playVideo();
  }
  else
  {
    icon.textContent = "play_arrow";
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
    player.setPlaybackQuality('default');
    if(icon.textContent === "play_arrow")
    {
      player.playVideo();
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
    player.setPlaybackQuality('small');
  }
}
