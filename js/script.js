let videoBtn = document.querySelector('#video-coding-btn');
let videoPopup = document.querySelector('#video-coding-popup');
let videoCloseBtn = document.querySelector('#video-coding-close-btn');
let youtubeVideo = document.querySelector('#youtube-video-src');


videoBtn.addEventListener('click', function() {
    videoPopup.classList.remove('video-popup--hidden');
})

videoCloseBtn.addEventListener('click', function() {
    videoPopup.classList.add('video-popup--hidden');
    youtubeVideo.src = 'null';
    youtubeVideo.src = 'https://www.youtube.com/embed/nKIu9yen5nc';
})