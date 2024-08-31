document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        var prevLink = document.querySelector('a.prev-post');
        if (prevLink) {
            window.location.href = prevLink.href;
        }
    } else if (event.key === 'ArrowRight') {
        var nextLink = document.querySelector('a.next-post');
        if (nextLink) {
            window.location.href = nextLink.href;
        }
    }
});
