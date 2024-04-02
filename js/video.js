var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector(".video");
    video.autoplay = false; // Turn off autoplay
    video.loop = false; // Turn off looping
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");
    video.playbackRate = (video.playbackRate * .9);
    console.log("New speed:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    video.playbackRate = (video.playbackRate / .9);
    console.log("New speed:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current location:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute/Unmute Video");
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    console.log("Volume Slider");
    video.volume = this.value / 100;
    updateVolumeInfo();
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Utilize oldSchool class");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Remove oldSchool class");
    video.classList.remove("oldSchool");
});

function updateVolumeInfo() {
    var volumeInfo = document.getElementById("volume");
    volumeInfo.textContent = Math.round(video.volume * 100) + "%";
}