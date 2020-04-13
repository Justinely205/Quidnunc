
//MODAL POPUP

$(function () {
  $('#button').click(function () {
    $('.modal').addClass('open');

    if ($('.modal').hasClass('open')) {
      $('.cont').addClass('blur');
    }
  });

  $('a').click(function () {
    $('.modal').removeClass('open');
    $('.cont').removeClass('blur');
  });
});

$(function () {
  $('#button2').click(function () {
    $('.modal').addClass('open');

    if ($('.modal').hasClass('open')) {
      $('.cont').addClass('blur');
    }
  });

  $('a').click(function () {
    $('.modal').removeClass('open');
    $('.cont').removeClass('blur');
  });
});
//----------------------------------------------

//AUTO SCROLL

ScrollRate = 25;

function scrollDiv_init() {
  DivElmnt = document.getElementById('content');
  ReachedMaxScroll = false;
  
  DivElmnt.scrollTop = 0;
  PreviousScrollTop  = 0;
  
  ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}

function scrollDiv() {
  
  if (!ReachedMaxScroll) {
    DivElmnt.scrollTop = PreviousScrollTop;
    PreviousScrollTop++;
    
    ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
  }
  //scroll up when reached end
  //else {
    //ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;
    
   // DivElmnt.scrollTop = PreviousScrollTop;
   // PreviousScrollTop--;
  //}
}

function pauseDiv() {
  clearInterval(ScrollInterval);
}

function resumeDiv() {
  PreviousScrollTop = DivElmnt.scrollTop;
  ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
}

//-----------------------------------------------------------
//DOUBLE CURSOR
// get the fake cursor by is id
var xyMirror = document.getElementById('fakeCursor');

// listen for mouse movements
window.onmousemove = function(event) {
    
    // get the user's mouse position
    var X = event.clientX;
    var Y = event.clientY;
    
    // get the browser window dimensions
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    
    // create an inversion of the mouse X, Y position
    // subtract mouse X position from window width
    // subtract mouse Y position from window height
    var fakeX = windowWidth - X;
    var fakeY = Y;
    
    // use those numbers to update the fake cursor position
    xyMirror.style.top = fakeY+'px';
    xyMirror.style.left = fakeX+'px';

}

// IMAGES - INNER LEFT

var change = document.getElementById('inner-left');
var change1 = document.getElementById('inner-right');
var change2 = document.getElementById('left');
var change3 = document.getElementById('right');
var counter = 0;

var ILpics = [
    "img/in-left/IL_001.jpg",
    "img/in-left/IL_002.jpg",
    "img/in-left/IL_003.jpg",
    "img/in-left/IL_004.jpg",
    "img/in-left/IL_005.jpg",
    "img/in-left/IL_006.jpg",
    "img/in-left/IL_007.jpg",
    "img/in-left/IL_008.jpg",
    "img/in-left/IL_009.jpg",
    "img/in-left/IL_010.jpg",
    "img/in-left/IL_011.jpg",
    "img/in-left/IL_012.jpg",
    "img/in-left/IL_013.jpg",
    "img/in-left/IL_014.jpg",
    "img/in-left/IL_015.jpg",
    "img/in-left/IL_016.jpg",
    "img/in-left/IL_017.jpg",
    "img/in-left/IL_018.jpg",
    "img/in-left/IL_019.png",
    "img/in-left/IL_020.png",
    "img/in-left/IL_021.jpg",
    "img/in-left/IL_022.jpg",
    "img/in-left/IL_023.jpg",
    "img/in-left/IL_024.jpg",
];

var IRpics = [
    "img/in-right/IR_001.jpg",
    "img/in-right/IR_002.jpg",
    "img/in-right/IR_003.jpg",
    "img/in-right/IR_004.jpg",
    "img/in-right/IR_005.jpg",
    "img/in-right/IR_006.png",
    "img/in-right/IR_007.png",
    "img/in-right/IR_008.jpg",
    "img/in-right/IR_009.jpg",
    "img/in-right/IR_010.jpg",
    "img/in-right/IR_011.jpg",
    "img/in-right/IR_012.jpg",
    "img/in-right/IR_013.jpg",
    "img/in-right/IR_014.jpg",
    "img/in-right/IR_015.jpg",
    "img/in-right/IR_016.jpg",
    "img/in-right/IR_017.jpg",
    "img/in-right/IR_018.jpg",
    "img/in-right/IR_019.jpg",
    "img/in-right/IR_020.jpg",
    "img/in-right/IR_021.jpg",
    "img/in-right/IR_022.jpg",
    "img/in-right/IR_023.jpg",
    "img/in-right/IR_024.jpg",
    "img/in-right/IR_025.jpg",
];

var Lpics = [
    "img/left/L_001.jpg",
    "img/left/L_002.jpg",
    "img/left/L_003.jpg",
    "img/left/L_004.jpg",
    "img/left/L_005.jpg",
    "img/left/L_006.png",
    "img/left/L_007.png",
    "img/left/L_008.jpg",
    "img/left/L_009.jpg",
    "img/left/L_010.jpg",
    "img/left/L_011.jpg",
    "img/left/L_012.jpg",
    "img/left/L_013.jpg",
    "img/left/L_014.jpg",
    "img/left/L_015.jpg",
    "img/left/L_016.jpg",
    "img/left/L_017.jpg",
    "img/left/L_018.jpg",
    "img/left/L_019.jpg",
    "img/left/L_020.jpg",
    "img/left/L_021.jpg",
    "img/left/L_022.jpg",
    "img/left/L_023.jpg",
    "img/left/L_024.jpg",
    "img/left/L_025.jpg",
];

var Rpics = [
    "img/right/R_001.jpg",
    "img/right/R_002.jpg",
    "img/right/R_003.jpg",
    "img/right/R_004.jpg",
    "img/right/R_005.jpg",
    "img/right/R_006.jpg",
    "img/right/R_007.jpg",
    "img/right/R_008.jpg",
    "img/right/R_009.jpg",
    "img/right/R_010.jpg",
    "img/right/R_011.jpg",
    "img/right/R_012.jpg",
    "img/right/R_013.jpg",
    "img/right/R_014.jpg",
    "img/right/R_015.jpg",
    "img/right/R_016.jpg",
    "img/right/R_017.jpg",
    "img/right/R_018.jpg",
    "img/right/R_019.png",
    "img/right/R_020.png",
    "img/right/R_021.jpg",
    "img/right/R_022.jpg",
    "img/right/R_023.jpg",
    "img/right/R_024.jpg",
];

function nextPic() {
  counter += 1;
  if (counter > ILpics.length -1) {
    counter = 0;
  }
  if (counter > IRpics.length -1) {
    counter = 0;
  }
  if (counter > Lpics.length -1) {
    counter = 0;
  }
  if (counter > Rpics.length -1) {
    counter = 0;
  }
  change.style.backgroundImage = "url(" + ILpics[counter] + ")";
  change1.style.backgroundImage = "url(" + IRpics[counter] + ")";
  change2.style.backgroundImage = "url(" + Lpics[counter] + ")";
  change3.style.backgroundImage = "url(" + Rpics[counter] + ")";
}

// Here's how you can hookup the click event
//change.addEventListener('click', nextPic);

document.onclick= nextPic;

// Load the first image
counter -= 1; // Do this so it starts at the first, not the second
nextPic();

//--------------------------------------------------------------------

// IMAGES - INNER RIGHT
