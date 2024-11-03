const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const renderData = () => {
  let index;
  try {
    index = parseInt(id);

    if (isNaN(index)) throw new Error("Invalid index");
  } catch (error) {
    return;
  }

  fetch("https://www.world-wonders-api.org/v0/wonders")
    .then((response) => response.json())
    .then((wondersData) => {
      console.log(wondersData);
      console.log(index);
      const data = wondersData[index];

      const name = data["name"];
      const summary = data["summary"];
      const location = data["location"];
      const buildYear = data["build_year"];
      const timePeriod = data["time_period"];
      const images = data["links"]["images"];

      const heroSection = document.getElementById("hero-section");
      const detailsSection = document.getElementById("details-section");

      console.log(heroSection);
      heroSection.style.background = `url('${images[0]}')`;
      heroSection.style.backgroundAttachment = "fixed";
      heroSection.innerHTML = `<h1>${name}</h1>`;

      const detailsSectionHeader = document.getElementById(
        "details-section-header",
      );
      const detailsSectionLocation = document.getElementById(
        "details-section-location",
      );
      const detailsSectionSummary = document.getElementById(
        "details-section-summary",
      );
      const detailsSectionBuildYear = document.getElementById(
        "details-section-build-year",
      );

      detailsSectionHeader.innerText = name;
      detailsSectionLocation.innerText = `Location: ${location}`;
      detailsSectionSummary.innerText = summary;
      detailsSectionBuildYear.innerText = `${buildYear} - ${timePeriod}`;

      setupCarousel(images);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
});
