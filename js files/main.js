let mouseHover = document.querySelector('.moving-button');
let updateClicks = document.querySelector('.clicks')
let clicks = 0;

mouseHover.addEventListener('mouseenter', function(){
    moveBox();
})

mouseHover.addEventListener('click', function(){
    clicks++;
    updateClicks.innerHTML = clicks;
    moveBox();
});

function moveBox(){
    mouseHover.style.top = (Math.random() * 300) + 1 + 'px';
    mouseHover.style.left = (Math.random() * 600) + 1 + 'px';
}