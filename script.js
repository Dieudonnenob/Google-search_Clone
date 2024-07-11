document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
});
