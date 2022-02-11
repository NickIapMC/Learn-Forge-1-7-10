$('li').click(function(event) {
    if (event.target.tagName != 'LI') return;

    alert('clicked bullet');
});
