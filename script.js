function onYouTubeClick() {
    return window.open("https://www.youtube.com/@TheFunkinContributors", "_blank");
}

function main() {
    var ratio = Math.min(screen.width / 1920, screen.height / 1080);
    document.getElementById('funkinContributorsBanner').width = Math.floor(1280 * ratio).toString() + 'px';
    document.getElementById('funkinContributorsBanner').height = Math.floor(720 * ratio).toString() + 'px';
}