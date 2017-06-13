
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

function onPlayerError()
{
  playlisttrack++;
  player.nextVideo();
}

function onPlayerReady(event)
{
  event.target.setPlaybackQuality('tiny');
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
}
function setShuffle(shuffle)
{
    player.setShuffle(shuffle);
}

/* INITIALIZE VOLUME */
var audio, showvidicon, iconshuffle, iconrepeat, main, section, nav, iconnav, name;
window.onload = function()
{
  name = document.getElementById("name");
  showvidicon = document.getElementById("showvidicon");
  iconshuffle = document.getElementById("shuffle");
  iconrepeat = document.getElementById("repeat");
  main = document.getElementById("dj");
  section = document.getElementById("section");
  nav = document.getElementById("nav");
  iconnav = document.getElementById("icons");
  audioplayer = document.getElementById("audioplayer");

  showvidicon.style.color = "white";
  iconshuffle.style.color = "white";
  iconrepeat.style.color = "white";
  setTimeout(function()
  {
    player.playVideo();
    changeicon();
  }, 1000);
  setTimeout(function()
  {
    document.getElementById("intro").remove();
  },2500)
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
  if(button.style.opacity === "0" && clickcount === 2 && (mouse.target.id !== "volumeslider"))
  {
    button.style.opacity ="1";
    slider.style.opacity ="0";
  }
  clickcount = 1;
  clickcount++;
}

var counter = 0;
function shownav()
{
  counter++;
  var expand = document.getElementById("expand");
  if(counter%2 !== 0)
  {
    iconnav.style.animation = "goDown 1s forwards";
    expand.style.transform= "rotate(180deg)";
  }
  else
  {
    iconnav.style.animation = "goUp 1s forwards";
    expand.style.transform= "rotate(360deg)";
  }
}

function showvolumeslider(value)
{
  clickcount = 0;
  button = document.getElementById("volumebutton");
  slider = document.getElementById("volumeslider");
  button.style.opacity ="0";
  slider.style.opacity ="1";
  clickcount++;
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
  player.setPlaybackQuality('small');
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
  var clickvideo = document.getElementById("clickvideo");

  logo.style.animation = "none";
  if(showvidicon.style.color === "white")
  {
    showvidicon.style.color = "#007fff";
    logo.style.display = "none";
    clickvideo.style.opacity="1";
    clickvideo.style.zIndex = "1";
     var playbackQuality = player.getPlaybackQuality();
     var suggestedQuality = 'hd1080';
     if( playbackQuality !== 'hd1080')
     {
       console.log("Setting quality to " + suggestedQuality );
       player.setPlaybackQuality( suggestedQuality );
     }
  }
  else
  {
    var playbackQuality = player.getPlaybackQuality();
    var suggestedQuality = 'tiny';
    if( playbackQuality !== 'tiny') {
      console.log("Setting quality to " + suggestedQuality );
      player.setPlaybackQuality( suggestedQuality );
      clickvideo.style.zIndex = "-99";
    }
    showvidicon.style.color = "white";
    clickvideo.style.opacity = "0";
    player.setPlaybackQuality('small');
    logo.style.display = "block";
  }
}
var clicker = 0;
function cloudrap()
{
  clicker++;
  var cloud = document.getElementById("cloud");
  if(clicker%2 == 1)
  {
    cloud.style.color = "#007fff";
    playlisttrack = 2;
    player.loadPlaylist(
      {
        list : 'PLT4oRPVflrCdGoo_k-qZBfx3McKFgBzpg',
        index : playlisttrack,
      })
  }
  else
  {
    cloud.style.color = "white";
    player.loadPlaylist(
      {
        listType: 'playlist',
        list: 'PLWaEl4Kd1431oovMu8hTTThjAKnS--QXu',
      })
  }
}
