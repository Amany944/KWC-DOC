
// Gestion de la vidéo (lecture jusqu'aux 2/3)
const video = document.getElementById("maVideo");
if (video) {
video.addEventListener("timeupdate", function() {
        if (video.currentTime >= video.duration * 2 / 3) {
                video.pause();
            }
            });
}