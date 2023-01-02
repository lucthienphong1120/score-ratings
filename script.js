const ratings = document.querySelectorAll(".rating");

ratings.forEach((rating) => {
    const ratingContent = rating.innerHTML;
    const ratingScore = parseInt(ratingContent, 10);

    const scoreClass =
        ratingScore < 40 ? "bad" : ratingScore < 60 ? "med" : "good";

    rating.classList.add(scoreClass);

    const ratingColor = window.getComputedStyle(rating).color;

    const gradient = `conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

    rating.style.background = gradient;

    rating.innerHTML = 
    `<span>${ratingScore} <small>%</small></span>`;
});
