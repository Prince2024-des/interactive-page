
        const audio = document.getElementById("audio");
        const audioControl = document.getElementById("audioControl");

        let isPlaying = false;

        // Click event on the image
        audioControl.addEventListener("click", () => {
            if (isPlaying) {
                audio.pause();
                audioControl.src = "./images/audio.png"; // Change back to default image
            } else {
                audio.play();
                audioControl.src = "./images/pause.png"; // Change to pause icon (add this image)
            }
            isPlaying = !isPlaying;
        });

