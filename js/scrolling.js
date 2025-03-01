document.addEventListener("scroll", () => {
    let sections = document.querySelectorAll(".section");
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            let bgImage = section.getAttribute("data-bg");
            document.body.style.backgroundImage = `url('${bgImage}')`;
        }
    });
});
