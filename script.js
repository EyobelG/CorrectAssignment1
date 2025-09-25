const images = [
    'patagonia.jpg',
    'group.jpg',
    'fallcolors.jpg',
    'men.jpg',
    'siemien.jpg',
    'wow.jpg',
    'vintage.jpg',
    'surf.jpg',
    'handstands.jpg'
   

]

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length; 
}

// Show first image immediately
changeBackground();

// Change every 3 seconds
setInterval(changeBackground, 5000);
