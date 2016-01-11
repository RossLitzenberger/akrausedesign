// advanced options menu


$('.option_nav').click(function(){
  $('.blog_nav').toggle();
});

$('.share_nav').click(function(){
  $('.share_options').toggle();
});


// END advanced options menu


// new comment / new vote container
var vote_count = 0;
$('#vote').html(vote_count);

var text_max = 150;
$('#textarea_feedback').html(text_max + ' words left');

$('#textarea').keyup(function() {
    var text_length = $('#textarea').val().length;
    var text_remaining = text_max - text_length;

    $('#textarea_feedback').html(text_remaining + ' words left');

    if(text_remaining <= 0){
      $('#textarea_feedback').css('color','red');
      $('#comment_submit').css('background','grey');
      $('#comment_submit').prop('disabled',true);
    }
    else{
      $('#textarea_feedback').css('color','black');
      $('#comment_submit').css('background','#0099ff');
      $('#comment_submit').prop('disabled',false);
    }
});

// iterate vote by 1
$('#upvote').click(function(){
  $('#vote').html(++vote_count);
});

// deiterate vote by 1
$('#downvote').click(function(){
  $('#vote').html(--vote_count);
});

// disable comments
if(vote_count == -3){
  $('.new-comment-container').prop('disabled',true);
}
else{
  $('.new-comment-container').prop('disabled',false);
}
// end new comment / new vote container

function addComment(){
  // display any comments down below
  var comment_container = {
    author: document.getElementById('comment_author'),
    comment: document.getElementById('textarea')
  };

  // comment arrays
  var i = 0;
  var author_array = [];
  var comment_array = [];

  // push the new comments to the array
  author_array.push(comment_container.author.value);
  comment_array.push(comment_container.comment.value);


  // print out info from js object and array


  // clear the form
  $('#comment_author, #textarea').val('');
  $('#vote').html(vote_count);
  $('#textarea_feedback').html(text_max + " words left");
}
