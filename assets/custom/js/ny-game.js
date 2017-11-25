// Prevent default right click
$(document).contextmenu(function() {
    return false;
});

// Track status of mouse button
var isDown = false;
$(document).mousedown(function(e) {
    if( e.button == 2 ) {
        isDown = 'rmb';
    } else {
        isDown = 'lmb';
    }
})
.mouseup(function() {
    isDown = false;
});

// Add squares to the board
function addSquares(squareNumber) {
    var square = '';
    for (i = 1; i <= squareNumber; i++) {
        square += '<div class="ny-square"><div id=ny-cell-' + i + ' class="ny-cell ny-pink">ny-pink</div></div>';
    }
    $('.ny-game-box').append(square);
};

var numOfSquares = 400;
addSquares(numOfSquares);

// Button colors
var lmbColor = 'ny-white';
var rmbColor = 'ny-pink';

// Change color of lmb and rmb
// Change color of left mouse button
$('.ny-color-btn').click(function() {
    var pickedColor = $(this).html();
    lmbColor = pickedColor;
    $('.ny-lmb').attr('class', 'ny-menu-item ny-lmb').addClass(pickedColor);
});

// Change color of left and right mouse button
/*$(".ny-color-btn").on("mousedown",function(e){
    var pickedColor = $(this).html();
    if( e.button == 2 ) {
      rmbColor = pickedColor;
      $('.ny-rmb').attr('class', 'ny-menu-item ny-rmb').addClass(pickedColor);
    } else {
      lmbColor = pickedColor;
      $('.ny-lmb').attr('class', 'ny-menu-item ny-lmb').addClass(pickedColor);
    }
});*/

// Change color of square
// - when you drag your mouse
$(".ny-square").mouseover(function(){
    if(!isDown) {
        return false;
    } else if(isDown == 'rmb') {
        $('div', this).attr('class', 'ny-cell').addClass(rmbColor).html(rmbColor);
    } else if (isDown == 'lmb') {
        $('div', this).attr('class', 'ny-cell').addClass(lmbColor).html(lmbColor);
    }
});
// - when you click your mouse
$(".ny-square").on("mousedown",function(e){
    if( e.button == 2 ) {
      $('div', this).attr('class', 'ny-cell').addClass(rmbColor).html(rmbColor);
    } else {
      $('div', this).attr('class', 'ny-cell').addClass(lmbColor).html(lmbColor);
    }
});
// - start from scratch
$('.ny-refresh').click(function() {
    $('.ny-square div').attr('class', 'ny-cell').addClass('ny-pink').html('ny-pink');
});

// Store image in an array
var nyImageArray= [];
$('.ny-alert').click(function() {
    nyImageArray= [];
    for (i = 0; i < numOfSquares; i++) {
        var cellColor = $('#ny-cell-' + (i + 1)).html();
        nyImageArray.push(cellColor);
    }
});

// Build image from array
function buildImageFromArray(imgArray) {
    for (i = 0; i < imgArray.length; i++) {
        $('#ny-cell-' + (i + 1)).attr('class', 'ny-cell').addClass(imgArray[i]).html(imgArray[i]);
    }
}
$('.ny-build').click(function() {
    buildImageFromArray(nyImageArray);
});