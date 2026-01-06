// Plain cards component: render a list of cards into a container

const cardData = [
  { img: "emma.jpg",
    title: "Emma", text: "Emma is an Angel Tarot Reader who weaves together messages from a variety of decks, offering extra clarity and depth.", href: "https://bookwhen.com/anathematarot" },
  { img: "anca.jpg",
    title: "Anca", text: "A natural born reader, this wonderful soul was gifted her first deck as a baby. If you need clarity and insight, look no further." , href: "https://bookwhen.com/anathematarot" },
  { img: "michelle.jpg",
    title: "Michelle & Vic", text: "Vic and Michelle are lifelong scholars and practitioners of the Western Mystery Tradition, each with over 40 years of experience in tarot and many other forms of divination.", href: "https://bookwhen.com/anathematarot" },
  
];

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCards(containerId, cards) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = cards.map(c => {
    const title = escapeHtml(c.title ?? "");
    const text = escapeHtml(c.text ?? "");
    const href = escapeHtml(c.href ?? "#");

   return `
  <article class="card">
    ${c.img ? `<img class="card__img" src="${c.img}" alt="${c.alt || c.title}">` : ""}
    <h3 class="card__title">${title}</h3>
    <p class="card__text">${text}</p>
    <div class="card__footer">
      <a class="card__link" href="${href}" target="_blank" rel="noopener noreferrer">
  Book Now
</a>

    </div>
  </article>
`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards("cardGrid", cardData);
});
