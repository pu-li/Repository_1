
//$(document).ready(function(){
$("#hoverphoto").hover(function() {
$('#hoverphoto').attr("src","//cdn.vox-cdn.com/thumbor/BbXgy7tWCpRR948TFLbu_FNTJHo=/13x0:514x376/1200x800/filters:focal(13x0:514x376)/cdn.vox-cdn.com/uploads/chorus_image/image/48332701/2010_4_fake1.0.jpg");
}, function() {
$( '#hoverphoto' ).attr("src","//inhabitat.com/wp-content/blogs.dir/1/files/2013/05/1-Mysterious-Brooklyn-Heights-Brownstone-.jpg");
});
//adapted from https://css-tricks.com/forums/topic/how-to-change-image-on-hover-of-a-different-div-jquery/

$('.revealbutton').click(function() {
  $('#hoverphoto').attr("src", "//static.messynessychic.com/wp-content/uploads/2013/01/googleparisfakehouse.jpg");
});

$('.revealbutton').click(function(){
    var $this = $(this);
    $this.toggleClass('revealbutton');
    if($this.hasClass('revealbutton')){
        $this.text('Find Out');
    } else {
        $this.text('Say What?');
    }
});

$('.revealbutton').click(function() {
  $('#hoverphoto').attr("src", "//media2.giphy.com/media/3oKIPnSvy7Ybi54MU0/200.webp#2-grid1");
});

//https://stackoverflow.com/questions/19365386/jquery-change-button-text-on-click

//$('.revealbutton').click(function() {
//  $('#hoverphoto').attr("src", "http://static.messynessychic.com/wp-content/uploads/2013/01/googleparisfakehouse.jpg"); }, function() {
//  $('.revealbutton').attr("class", 'Say What?');
//});

//http://farm3.staticflickr.com/2738/4519128092_d860c5dbf4.jpg

//$('li').mouseover(function() {
//	var text = $(this).text()
//	console.log('you moused over ' + text);
//});

var thingsILike = ['nada', 'none', 'nichts'];
thingsILike.forEach(function(thing) {
  console.log(thing);

})
