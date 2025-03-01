document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      let x = (e.offsetX - card.offsetWidth / 2) / 20;
      let y = (e.offsetY - card.offsetHeight / 2) / 20;
      card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  });

  document.querySelectorAll(".feature-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.add("clicked");
  
      // Remove the animation class after it finishes so it can be clicked again
      setTimeout(() => {
        card.classList.remove("clicked");
      }, 400); // Match the animation duration
    });
  });
  