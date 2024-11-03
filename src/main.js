const container = document.getElementById("card-container");

const renderData = () => {
  data = fetch("https://www.world-wonders-api.org/v0/wonders")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((wonderData, index) => {
        const name = wonderData["name"];
        const location = wonderData["location"];
        const src = wonderData["links"]["images"][0];

        const card = document.createElement("div");

        card.addEventListener("click", () => {
          card.classList.toggle("show-info");
        });

        card.className = "card";
        card.innerHTML = `
        <img
          src="${src}"
          alt="${name}"
        />
        <div>
          <span>${name}</span>
          <span class="text-color-grey">${location}</span>
          <a href="wonders.html?id=${index}">Learn More</a>
        </div>
        `;

        container.appendChild(card);
      });
    });
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
});
