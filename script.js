document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".thecard");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("flipped");
                    entry.target.classList.remove("reset"); // Normal speed when flipping
                } else {
                    entry.target.classList.remove("flipped");
                    entry.target.classList.add("reset"); // Fast flip when resetting
                }
            });
        },
        { threshold: 0.5 }
    );

    cards.forEach((card) => {
        observer.observe(card);

        // Click to reset flip faster
        card.addEventListener("click", () => {
            card.classList.remove("flipped");
            card.classList.add("reset");
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    fetch("./vinyl.svg")
      .then((response) => response.text())
      .then((svg) => {
        const playerContainer = document.getElementById("player-container");
        playerContainer.innerHTML = svg;

        const vinyl = document.querySelector("svg");
        const playButton = document.getElementById("play-button");
        const audio = document.getElementById("love-song");
        let isPlaying = false;

        playButton.addEventListener("click", () => {
          if (!isPlaying) {
            vinyl.style.animation = "spin 2s linear infinite";

            audio.play();

            playButton.textContent = "Pause";
            isPlaying = true;
          } else {
            vinyl.style.animation = "";

            audio.pause();

            playButton.textContent = "Play";
            isPlaying = false;
          }
        });
      })
      .catch((err) => console.error("Error loading SVG:", err));
});