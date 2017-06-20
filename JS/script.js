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
    removeAnimation();
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
  var song = document.getElementById("song");
  var playlisticon = document.getElementById("playlist");
  if(playlisticon.style.color === "" || playlisticon.style.color === "white")
  {
    playlisticon.style.color = "#007fff";
    song.style.animation = "goDown2 1s forwards";
    document.getElementById("audiocontrol").style.borderTop ="1px solid #1e1e1e";
    fadeInText(1);
  }
  else
  {
    document.getElementById("audiocontrol").style.borderTop ="1px solid lightgray";
    playlisticon.style.color = "white";
    song.style.animation = "goUp2 1s forwards";
  }
}
function fadeInText(number)
{
  var playlisttext;
  var playlistH2 = document.createElement("h2");
  if(number === 1)
    playlisttext = document.createTextNode("playlists");
  else if(number === 2)
    playlisttext = document.createTextNode("uploads");
  else if(number === 3)
    playlisttext = document.createTextNode("house");
  else if(number === 4)
    playlisttext = document.createTextNode("trap");
  else if(number === 5)
    playlisttext = document.createTextNode("bootlegs");
  playlistH2.appendChild(playlisttext);
  document.getElementById("section").appendChild(playlistH2);
  main.style.opacity = "0.1";
  playlistH2.id = "fadeInText";
  playlistH2.style.animation ="fadeInText 2s forwards";
  setTimeout(function()
  {
    main.style.opacity = "1";
    playlistH2.parentNode.removeChild(playlistH2);
  }, 1800)
}

function pickplaylist(number)
{
  if(number === 1)
  {
    playlisttrack = 1;
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1431oovMu8hTTThjAKnS--QXu',
          index : 0,
        })
      removeAnimation();
  }
  else if(number === 2)
  {
    playlisttrack = 1;
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd14315eJwG1efjJmlBe8A1gvBc',
          index : 0,
        })
      removeAnimation();
  }
  else if(number === 3)
  {
    playlisttrack = 1;
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd14333074dxwYX7omccfrAAHJG',
          index : 0,
        })
      removeAnimation();
  }
  else if(number === 4)
  {
    playlisttrack = 1;
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1431Qxj-sQx4YUTjwj-EDBQEW',
          index : 0,
        })
      removeAnimation();
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
  removeAnimation();
  indicator.style.animation = "none";
  player.nextVideo();
}

function previous()
{
  removeAnimation();
  indicator.style.animation = "none";
  player.previousVideo();
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
    removeAnimation();

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
  }
  else
  {
    clickvideo.style.zIndex = "-1";
    showvidicon.style.color = "white";
    clickvideo.style.opacity = "0";
    logo.style.display = "block";
  }
}
var currentTime, animationduration, calculate, nkeyframe, sheet, indicator,
 distance, distanceX, distanceOutside, positionX, barW, algo, duration,
keyframe, webkeyframe;
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
  removeAnimation();
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
  webkeyframe = "@-webkit-keyframes progress {from{left:" + calculate + "px} to{left:" + barW + "px}}";
  sheet.insertRule(keyframe, 0);
  sheet.insertRule(webkeyframe, 0);
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
  indicator.style.animation = "none";
  removeAnimation();
  calculateDistance(distance);
  player.seekTo(time);

}

function removeAnimation()
{
  sheet.deleteRule(keyframe);
  sheet.deleteRule(webkeyframe);
}
