document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".screen-card");

  cards.forEach(card => {
    const filename = card.dataset.image;
    const title = card.dataset.title;
    const img = new Image();

    img.onload = () => {
      card.innerHTML = `
        <div class="iphone">
          <div class="dynamic-island"></div>
          <div class="phone-screen">
            <img src="screenshots/${filename}" alt="${title} screenshot">
          </div>
        </div>
        <div class="shot-title">${title}</div>
      `;
    };

    img.onerror = () => {
      card.remove();
    };

    img.src = `screenshots/${filename}`;
  });
});
