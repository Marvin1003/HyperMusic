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
  setInterval(function()
  {
    progressIndicator();
  },500);
  event.target.setVolume(2.5);
  event.target.setLoop(true);
  event.target.loadPlaylist(
    {
      listType: 'playlist',
      list: 'PLWaEl4Kd1431oovMu8hTTThjAKnS--QXu',
      index: playlisttrack,
    })
}
var quality = "tiny"
var check = false;
function onPlayerStateChange(event) {
  document.getElementById("songname").textContent = player.getVideoData().title;
  event.target.setPlaybackQuality(quality);
  var iconrepeat = document.getElementById("repeat");
  var showvidicon = document.getElementById("showvidicon");
  var icon = document.getElementById("playpausebutton");
  if(event.data === 0)
  {
    indicator.style.left ="0px";
  }
  if(event.data === 1)
  {
    icon.textContent ="pause";
    //progressIndicator();
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
  loopLimit = 40;
  animationobject = document.getElementById("song");
  var playlisticon = document.getElementById("playlist");
  if(playlisticon.style.color === "" || playlisticon.style.color === "white")
  {
    playlisticon.style.color = "#007fff";
    cancelup = true;
    goDown();
    document.getElementById("audiocontrol").style.borderTop ="1px solid #1e1e1e";
    fadeInText(1);
  }
  else
  {
    playlisticon.style.color = "white";
    canceldown = true;
    goUp(1);
  }
}
var test = false;
var runningcheck = false;
var playlistH2 = document.createElement("h2");
function fadeInText(number)
{


  var playlisttext;
  if(number === 1)
    playlistH2.textContent = "playlists";
  else if(number === 2)
    playlistH2.textContent = "uploads";
  else if(number === 3)
    playlistH2.textContent = "house";
  else if(number === 4)
    playlistH2.textContent = "trap";
  else if(number === 5)
    playlistH2.textContent = "bootlegs";

  if(runningcheck === false)
    animate();

  function animate()
  {
    document.getElementById("section").appendChild(playlistH2);
    playlistH2.id = "fadeInText";
    playlistH2.style.animation ="fadeInText 2s forwards";
    main.style.opacity = "0.1";
    runningcheck = true;
    setTimeout(function()
    {
      main.style.opacity = "1";
      runningcheck = false;
    }, 1800)
  }
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
  }
  else if(number === 2)
  {
    playlisttrack = 1;
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd14315eJwG1efjJmlBe8A1gvBc',
          index : 0,
        })
  }
  else if(number === 3)
  {
    playlisttrack = 1;
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd14333074dxwYX7omccfrAAHJG',
          index : 0,
        })
  }
  else if(number === 4)
  {
    playlisttrack = 1;
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1431Qxj-sQx4YUTjwj-EDBQEW',
          index : 0,
        })
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

var currentposition = 0;
var counter = 0;
var canceldown = false;
var cancelup = false;
var idx = 0;
var loopLimit;
var animationobject;

function shownav()
{
  loopLimit = 60;
  animationobject = document.getElementById("icons");
  counter++;
  var expand = document.getElementById("expand");
  if(counter%2 !== 0)
  {
    cancelup = true;
    goDown();
    expand.style.transform= "rotate(180deg)";
  }
  else
  {
    canceldown = true;
    goUp();
    expand.style.transform= "rotate(360deg)";
  }
}

/** GO DOWN / GO UP ANIMATION **/
function goDown()
{
  setTimeout(function ()
  {
    if (currentposition <= loopLimit)
    {
      currentposition++;
      animationobject.style.top = currentposition + "px";
      if(canceldown)
      {
        cancelup = false;
        return null;
      }
      goDown();
    }
  }, 5);
  if(currentposition > loopLimit)
    cancelup = false;
}
/*****************/

  function goUp (value)
  {
    setTimeout(function ()
    {
      if (currentposition >= 0)
      {
        currentposition--;
        animationobject.style.top = currentposition + "px";
        if(cancelup)
        {
          canceldown = false;
          return null;
        }
        goUp(value);
      }
    }, 5);
    if(currentposition < 0)
      canceldown = false;
    if(value === 1 && currentposition < 0)
      document.getElementById("audiocontrol").style.borderTop ="1px solid lightgray";
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
  indicator.style.left = "0px";
  playlisttrack++;
  player.nextVideo();
}

function previous()
{
  indicator.style.left = "0px";
  playlisttrack--;
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
    calculateDistance();
    indicator.style.left = calculate + "px";

  }
}

function hdquality()
{
  var time = player.getCurrentTime();
  var hdicon = document.getElementById("hd");
  if(hdicon.style.color === "" || hdicon.style.color === "white")
  {
    hdicon.style.color = "#007fff";
    quality = "highres";
  }
  else
  {
    hdicon.style.color = "white";
    quality = "tiny";
  }
  player.playVideoAt(playlisttrack);
  player.seekTo(time);
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
var currentTime, animationduration, calculate, nkeyframe, sheet,
 distance, distanceInBar, distanceOutside, positionX, algo, duration,
keyframe, webkeyframe;
var boolean = false;
var indicator = document.getElementById("progressIndicator");

function startListener()
{
  indicator = document.getElementById("progressIndicator");
  indicator.addEventListener('mousedown', slideStart);
  document.addEventListener('mouseup', slideStop);
}

function slideStart(event)
{
  player.pauseVideo();
  indicator = document.getElementById("progressIndicator");
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


/*function progressIndicator()
{
  calc();
  sheet = document.styleSheets[2];
  keyframe ="@keyframes progress {from{left:" + calculate + "px} to{left:" + barW + "px}}";
  webkeyframe = "@-webkit-keyframes progress {from{left:" + calculate + "px} to{left:" + barW + "px}}";
  sheet.insertRule(keyframe, 0);
  sheet.insertRule(webkeyframe, 0);
  rulechecker = true;
  indicator.style.animation = "progress " + animationduration + "s linear";
}*/
function progressIndicator()
{
  var algo = (document.getElementById("progressBar").clientWidth/player.getDuration()) *  player.getCurrentTime();
  indicator = document.getElementById("progressIndicator");
  indicator.style.left =algo +"px";
}
function calculateDistance(distance)
{
  var bar = document.getElementById("progressBar");
  indicator = document.getElementById("progressIndicator");
  positionX = distance.clientX;
  distanceOutside = bar.offsetLeft;
  distanceInBar = positionX - distanceOutside-11;
  if(distanceInBar < document.getElementById("progressBar").clientWidth && distanceInBar > 0)
    indicator.style.left = distanceInBar + "px";
  time = (player.getDuration()/document.getElementById("progressBar").clientWidth) * distanceInBar;
}

function seekTo(distance)
{
  if(distance.target != document.getElementById("progressIndicator"))
  {
    indicator = document.getElementById("progressIndicator");
    indicator.style.animation = "none";
    calculateDistance(distance);
    player.seekTo(time);
  }
}
