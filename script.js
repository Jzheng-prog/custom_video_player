const video = document.getElementById('video')
const play = document.getElementById('play')
const stops = document.getElementById('stop')
const progress = document.getElementById('progress')

const timeStamp = document.getElementById('timestamp')


function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    };
}
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
    }else{
        play.innerHTML = "<i class='fa fa-stop fa-2x'></i>";
    };
}
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime /60);

    if(mins < 10){
        mins = '0'+ String(mins);  
    }
    let secs = Math.floor(video.currentTime % 60);

    if(secs < 10){
        secs = '0'+ String(secs);  
    }

    timeStamp.innerHTML = mins + ':' + secs;
}
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration ) / 100
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stops.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)

