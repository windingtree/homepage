// Background
const indexBannerBg = document.getElementById('index-banner-bg');
const indexBannerCards = document.getElementById('index-banner-cards');

function indexBannerBgHeight() {
    if (Modernizr.mq(MQ.down)) {
        if (document.body.contains(indexBannerBg)) {
            indexBannerBg.style.setProperty('height', (indexBannerCards.offsetTop + navbar.offsetHeight) + 'px', 'important');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    indexBannerBgHeight();
});

window.addEventListener('load', function() {
    indexBannerBgHeight();
});

window.addEventListener('optimizedResize', function() {
    indexBannerBgHeight();
});

// Video
// 1. This function creates an <iframe> (and YouTube player) after the API code downloads.
let indexBannerVideoPlayer;

function onYouTubeIframeAPIReady() {
    const indexBannerVideoIframe = document.getElementById('index-banner-video-iframe');
    const indexBannerVideoId = indexBannerVideoIframe.dataset.videoId;

    indexBannerVideoPlayer = new YT.Player('index-banner-video-iframe', {
        videoId: indexBannerVideoId,
        events: {
            'onReady': onIndexBannerVideoPlayerReady
        }
    });
}

// 2. The API will call this function when the video player is ready.
function onIndexBannerVideoPlayerReady(event) {
    const $modalVideo = $('.js-modal-video');

    $modalVideo.on('shown.bs.modal', function() {
        event.target.playVideo();
    });

    $modalVideo.on('hidden.bs.modal', function() {
        event.target.pauseVideo();
    });
}
