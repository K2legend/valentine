document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const message = document.getElementById("message");

    let noBtnMoving = true; 

    function moveNoButton() {
        if (noBtnMoving) {
            const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
            const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        }
    }

    yesBtn.addEventListener("click", () => {
        noBtnMoving = false; 
        noBtn.style.display = "none"; 
        message.innerHTML = "Yay! love u 💖 Waitingi to see u!";
        message.style.fontSize = "2rem";
        message.style.color = "#ff1493";
        document.body.style.backgroundColor = "#ff69b4";
    });

    noBtn.addEventListener("click", moveNoButton);
});
