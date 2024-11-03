const container = document.getElementById("card-container");

const renderData = () => {
  data = fetch("https://www.world-wonders-api.org/v0/wonders")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((wonderData, index) => {
        console.log(wonderData["name"]);
      });
    });
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
});
