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
    if(shufflecheck)
      player.previousVideo();
    else
      playlisttrack++;
  }
  if(event.data === 1)
  {
    icon.textContent ="pause";
    startListener();
  }
  if(event.data === 1 && !check)
  {
    document.getElementById("intro").style.animation = "fadeout 1.5s ease-in-out";
    setTimeout(function()
    {
      document.getElementById("intro").remove();
      document.getElementById("logo1").style.zIndex = "1";
      document.getElementById("section").style.position ="static";
      document.body.classList.remove("stop-scrolling");
    }, 1500);
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
  checker = false;
  animationobject = document.getElementById("playlists");
  var playlisticon = document.getElementById("playlist");
  if(playlisticon.style.color === "" || playlisticon.style.color === "white")
  {
    loopLimit = 100;
    playlisticon.style.color = "#007fff";
    cancelup = true;
    goLeft();
    fadeInText(1);
    document.body.classList.add("stop-scrolling");
  }
  else
  {
    loopLimit = 0;
    playlisticon.style.color = "white";
    canceldown = true;
    goRight();
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
  else if(number === 6)
    playlistH2.textContent = "future house";
  else if(number === 7)
    playlistH2.textContent = "melbourne bounce";
  else if(number === 8)
    playlistH2.textContent = "hyperchill";
  else if(number === 9)
    playlistH2.textContent = "mixtapes";

  if(runningcheck === false)
    animate();

  function animate()
  {
    document.getElementById("playlisttext").appendChild(playlistH2);
    playlistH2.id = "fadeInText";
    playlistH2.style.position = "fixed";
    console.log("Lmasso");
    playlistH2.style.animation ="fadeInText 2s forwards";
    document.body.style.pointerEvents = "none";
    var sections = document.getElementsByTagName("section");
    for(var i = 0; i < sections.length; i++)
      sections[i].style.opacity = ".1";
    runningcheck = true;
    setTimeout(function()
    {
      for(var i = 0; i < sections.length; i++)
        sections[i].style.opacity = "1";
      document.body.style.pointerEvents = "auto";
      document.body.classList.remove("stop-scrolling");
      runningcheck = false;
    }, 1800)
  }
}

function pickplaylist(number)
{
  playlisttrack = 0;
  if(number === 1)
  {
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1431oovMu8hTTThjAKnS--QXu',
          index : playlisttrack,
        })
  }
  else if(number === 2)
  {
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd14315eJwG1efjJmlBe8A1gvBc',
          index : playlisttrack,
        })
  }
  else if(number === 3)
  {
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd14333074dxwYX7omccfrAAHJG',
          index : playlisttrack,
        })
  }
  else if(number === 4)
  {
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1431Qxj-sQx4YUTjwj-EDBQEW',
          index : playlisttrack,
        })
  }
  else if(number === 5)
  {
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1432NYXf3l-qnV_Blbs_sXEVc',
          index : playlisttrack,
        })
  }
  else if(number === 6)
  {
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1432-iOhl2qSNOyR-b-p5tNXV',
          index : playlisttrack,
        })
  }
  else if(number === 7)
  {
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1433BRrulM0Zq0FCLIacdirfD',
          index : playlisttrack,
        })
  }
  else if(number === 8)
  {
    player.loadPlaylist(
        {
          list : 'PLWaEl4Kd1430HCxzvV6l9ogrrQoVg4v4m',
          index : playlisttrack,
        })
  }
}

window.onbeforeunload = function()
{
  window.scrollTo(0, 0);
};

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

var currentposition = -60;
var countclicks = 0;
var counter = 0;
var canceldown = false;
var cancelup = false;
var idx = 0;
var loopLimit;
var animationobject;
var endFor = 0;

function shownav()
{
  loopLimit = 0;
  animationobject = document.getElementById("navigation");
  countclicks++;
  console.log(countclicks);
  var expand = document.getElementById("expand");
  if(countclicks%2 !== 0)
  {
    cancelup = true;
    goDown();
    expand.style.transform= "rotate(180deg)";

  }
  else
  {
    endFor = -60;
    canceldown = true;
    goUp();
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
var shufflecheck = false;
function repeat()
{
  var iconrepeat = document.getElementById("repeat");
  if(iconrepeat.style.color === "white")
  {
    shufflecheck = true;
    iconrepeat.style.color = "#007fff";
  }
  else
  {
    shufflecheck = false;
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

  if(showvidicon.style.color === "white")
  {
    showvidicon.style.color = "#007fff";
    logo.style.display = "none";
    clickvideo.style.opacity ="1";
    clickvideo.style.zIndex = "1";
  }
  else
  {
    clickvideo.style.zIndex = "-99";
    clickvideo.style.opacity ="0";
    showvidicon.style.color = "white";
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
  document.removeEventListener('mouseup', slideStop);
  player.playVideo();
}

function progressIndicator()
{
  var algo = (document.getElementById("progressBar").clientWidth/player.getDuration()) *  player.getCurrentTime();
  indicator = document.getElementById("progressIndicator");
  var test = document.getElementById("progressBar");
  indicator.style.left =algo +"px";
  var progress = player.getVideoLoadedFraction();
  var topercent = progress * 75;
  var borderradius = progress * 100;
  var progressBarColor = document.getElementById("progressBarColor");
  if(topercent < 100)
    progressBarColor.style.width = topercent + "vw";
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
var checker = false;
function swipe()
{
  checker = true;
  var arrow = document.getElementById("arrowright");
  animationobject = document.getElementById("playlists");
  counter++;
  if(counter%2 !== 0)
  {
    loopLimit = 190;
    goLeft();
    arrow.style.transform= "rotate(180deg)";
  }
  else
  {
    loopLimit = 100;
    goRight();
    arrow.style.transform= "rotate(360deg)";
  }
}

/***************************************************/
/**************++++++ANIMATION**********************/
/***************************************************/

/*** MOVE LEFT / MOVE RIGHT - ANIMATION ***/

var cancelleft = false;
var cancelright = false;
var currentposition1 = 0;

function goLeft()
{

  setTimeout(function ()
  {
    if (currentposition1 < loopLimit)
    {
      currentposition1++;
      animationobject.style.right= currentposition1 + "vw";
      if(cancelleft)
      {
        cancelright = false;
        return null;
      }
      goLeft();
    }
  }, 5);
  if(currentposition1 >= loopLimit)
    cancelright = false;
}
/*****************/

function goRight ()
{
  setTimeout(function ()
  {
    if (currentposition1 > loopLimit)
    {
      currentposition1--;
      animationobject.style.right = currentposition1 + "vw";
      if(cancelright)
      {
        cancelleft = false;
        return null;
      }
      goRight();
    }
  }, 5);
  if(currentposition1 <= 0)
    cancelleft = false;
}

/** GO DOWN / GO UP ANIMATION **/
function goDown()
{
  setTimeout(function ()
  {
    if (currentposition < loopLimit)
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
  if(currentposition >= loopLimit)
  {
    document.getElementById("nav").style.visibility = "visible";
    cancelup = false;
  }
}
/*****************/

function goUp ()
{
  setTimeout(function ()
  {
    if (currentposition > endFor)
    {
      currentposition--;
      animationobject.style.top = currentposition + "px";
      if(cancelup)
      {
        canceldown = false;
        return null;
      }
      goUp();
    }
  }, 5);
  if(currentposition <= endFor)
    canceldown = false;
}

/* SMOOTH SCROLLING */

function runScroll()
{
  scrollTo(document.body, document.getElementById("me").offsetTop, 800);
}
setTimeout(function()
{
  var scrollme = document.querySelector("#test");
  scrollme.addEventListener("click",runScroll)
},1000);

function scrollTo(element, to, duration) {
  if (duration <= 0)
    return;
  var difference = to - element.scrollTop;
  var time = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop += time;
    if (element.scrollTop === to)
      return;
    scrollTo(element, to, duration - 10);
  }, 10);
}
