/*PURE JAVASCRIPT NO JQUERY */

/* YOUTUBE VIDEO PLAYER */
var playlisttrack = 0;
var tag = document.createElement('script');

/* YOUTUBE PLAYER API */
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
      showinfo : '0',
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
var event;
function onPlayerReady(event)
{
  event.target.setPlaybackQuality('highres');
  event.target.setVolume(2.5);
  event.target.setLoop(true);
  event.target.loadPlaylist(
    {
      listType: 'playlist',
      list: 'PLWaEl4Kd1431oovMu8hTTThjAKnS--QXu',
      index: playlisttrack,
    })
}
var check = false;
function onPlayerStateChange(event) {
  document.getElementById("songname").textContent = player.getVideoData().title;
  event.target.setPlaybackQuality('highres');
  var iconrepeat = document.getElementById("repeat");
  var showvidicon = document.getElementById("showvidicon");
  var icon = document.getElementById("playpausebutton");
  if(event.data === 0)
  {
    sheet.removeRule(keyframe);
    indicator.style.animation = "none";
  }
  if(event.data === 1)
  {
    icon.textContent ="pause";
    progressIndicator();
    startListener();
  }
  if(event.data === 1 && !check)
  {
    document.getElementById("intro").style.animation = "getOut 1s ease-in-out";
    setTimeout(function()
    {
      document.getElementById("intro").remove();
    }, 1000);
    document.getElementById("spinner").style.animation = "fadein .5s reverse ease-in-out forwards";
    check = true;
  }
}
function setShuffle(shuffle)
{
    player.setShuffle(shuffle);
}
function playlistpicker()
{
  var playlist = document.getElementById("playlists");
  var playlisticon = document.getElementById("playlist");
  if(playlisticon.style.color != "#007fff")
  {
    playlisticon.style.color = "#007fff";
    playlist.style.animation = "goUp2 1s forwards";
  }
  else
  {
    playlisticon.style.color = "white";
    playlist.style.animation = "goDown2 1s forwards";

  }
}

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
}
var tracknumber = 1;

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
    slider.style.display ="none";
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
  slider.style.display ="block";
  clickcount++;
}

function setvolume(volume)
{
  player.setVolume(volume);
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

function next()
{
  player.nextVideo();
  sheet.removeRule(keyframe);
  indicator.style.animation = "none";
}

function previous()
{
  player.previousVideo();
  sheet.removeRule(keyframe);
  indicator.style.animation = "none";
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

function changeicon()
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
    calc();
    indicator.style.left = calculate + "px";
    sheet.removeRule(keyframe);

  }
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
     /*var playbackQuality = player.getPlaybackQuality();
     var suggestedQuality = 'hd1080';
     if( playbackQuality !== 'hd1080')
     {
       console.log("Setting quality to " + suggestedQuality );
       player.setPlaybackQuality( suggestedQuality );
     }*/
  }
  else
  {
    /*var playbackQuality = player.getPlaybackQuality();
    if( playbackQuality !== 'tiny') {
      console.log("Setting quality to " + suggestedQuality );
      //player.setPlaybackQuality( suggestedQuality );
      clickvideo.style.zIndex = "-99";
    }*/
    clickvideo.style.zIndex = "-1";
    showvidicon.style.color = "white";
    clickvideo.style.opacity = "0";
    logo.style.display = "block";
  }
}
var currentTime, animationduration, calculate, nkeyframe, sheet, indicator, distance, distanceX, distanceOutside, positionX, barW, algo, duration;
var boolean = false;
function startListener()
{
  indicator = document.getElementById("progressIndicator");
  indicator.addEventListener('mousedown', slideStart);
}

function slideStart(event)
{
  player.pauseVideo();
  indicator = document.getElementById("progressIndicator");
  sheet.removeRule(keyframe);
  indicator.style.animation = "none";
  document.addEventListener('mousemove', moveIndicator);
}
function moveIndicator(event)
{
  document.addEventListener('mouseup', slideStop);
  calculateDistance(event);
  player.seekTo(time);
}
function slideStop(event)
{
  document.removeEventListener('mousemove', moveIndicator);
  player.playVideo();
}

function progressIndicator()
{
  calc();
  sheet = document.styleSheets[2];
  keyframe ="@keyframes progress {from{left:" + calculate + "px} to{left:" + barW + "px}}";
  sheet.insertRule(keyframe, 0);
  indicator.style.animation = "progress " + animationduration + "s linear";

}
function calc()
{
  indicator = document.getElementById("progressIndicator");
  currentTime = player.getCurrentTime();
  duration = player.getDuration();
  barW = document.getElementById("progressBar").clientWidth;
  calculate = (barW/duration) * currentTime;
  animationduration = duration - currentTime;
}
function calculateDistance(distance)
{
  distanceOutside = document.getElementById("progressBar").offsetLeft;
  barW = document.getElementById("progressBar").clientWidth;
  positionX = distance.clientX;
  duration = player.getDuration();
  indicator = document.getElementById("progressIndicator");
  distanceX = positionX - distanceOutside - 11;
  time = (duration / barW) * distanceX;
  if(distanceX < barW-10 && distanceX > 0)
    indicator.style.left = distanceX + "px";
}

function seekTo(distance)
{
  indicator = document.getElementById("progressIndicator");
  sheet.removeRule(keyframe);
  indicator.style.animation = "none";
  calculateDistance(distance);
  player.seekTo(time);

}
