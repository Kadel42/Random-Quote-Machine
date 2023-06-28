
const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
let colorNumber = Math.floor(Math.random() * colors.length);

function getQuote() {
    $.ajax({
        url: 'https://api.quotable.io/quotes/random',
        success: function(r) {
            $(".quote-text").animate({opacity: 0}, 500, function() {
                $(this).animate({
                  opacity: 1
                }, 500);
                $("#text").text(r[0].content);
            });
            $(".quote-author").animate({opacity: 0}, 500, function() {
                $(this).animate({
                  opacity: 1
                }, 500)
                $("#author").text(r[0].author);
            });
           
            $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + r[0].content + '" ' + r[0].author));
        }
    })
}

$(document).ready(function() {
    getQuote();
    $("html body").css("background-color", colors[colorNumber]);
    $(".button").css("background-color", colors[colorNumber]);
      $(".quote-text").css("color", colors[colorNumber]);
      $(".quote-author").css("color", colors[colorNumber]);

  });
$("#new-quote").click(function(){
    getQuote();
    
    
      $("html body .button").css("background-color", colors[colorNumber]);
      $(".quote-text").css("color", colors[colorNumber]);
      $(".quote-author").css("color", colors[colorNumber]);
})