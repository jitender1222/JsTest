window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const dataContainer = document.getElementById("data");

  loader.style.display = "flex"; // Display the loader initially

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = "none"; // Hide the loader

      // Display the fetched data
      dataContainer.style.display = "block";

      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.body}</p>
          `;
        dataContainer.appendChild(card);
      });

      // Add spacing between each loader
      const loaders = document.querySelectorAll(".loader");
      loaders.forEach((loader) => {
        loader.style.marginTop = "20px";
      });
    })
    .catch((error) => {
      loader.style.display = "none";
      dataContainer.innerText = "Error fetching data. Please try again later.";
      console.error(error);
    });
});
