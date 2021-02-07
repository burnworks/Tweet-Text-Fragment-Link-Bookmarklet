const selectedText = getSelection().toString();
const newUrl = new URL(location);
newUrl.hash = `:~:text=${selectedText}`;
const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}&url=${encodeURIComponent(newUrl)}`;
window.open(twitterUrl, '_blank');