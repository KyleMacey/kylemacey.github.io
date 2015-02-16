$(function() {
  $('article.post').on('click', 'a', function(e) {
    e.preventDefault();
    window.open($(this).prop('href'));
  });
})
