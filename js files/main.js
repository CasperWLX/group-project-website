document.addEventListener('DOMContentLoaded',function(){
    let fadeInImage = document.getElementById('poster-image');
    let backImage = document.getElementById('back-image');
    const imageArray = [
        '/images/frontpage-images/Path-of-exile-2.jpg',
        '/images/frontpage-images/pubg.jpg',
        '/images/frontpage-images/gtav.jpg',
        '/images/frontpage-images/csgo2.jpg',
        '/images/frontpage-images/lethalcompany.jpg',
        '/images/frontpage-images/baldurs-gate-3.jpg'
    ];

    let currentImageIndex = 0;

    function changeImage(){
        backImage.src = fadeInImage.src
        fadeInImage.style.animation = 'none';
        fadeInImage.src = imageArray[currentImageIndex];
        fadeInImage.offsetHeight;
        fadeInImage.style.opacity = '1';
        fadeInImage.style.animation = '';

        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    }

    setInterval(changeImage, 5000);
});

let slider = document.getElementById