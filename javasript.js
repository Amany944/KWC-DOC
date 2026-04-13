const video = document.getElementById("maVideo");
 video.addEventListener("timeupdate", function() {
 if (video.currentTime >= video.duration * 2/ 3) {video.pause()}});