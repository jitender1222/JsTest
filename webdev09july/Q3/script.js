document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const skeletonLoaderCount = data.length;

      // Remove skeleton loaders
      app.innerHTML = "";

      // Display fetched data
      data.forEach((item) => {
        const postElement = createPostElement(item);
        app.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });

  function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    return postElement;
  }

  // Show skeleton loaders while data is being fetched
  const skeletonLoaderCount = 15; // Set the desired number of initial skeleton loaders

  for (let i = 0; i < skeletonLoaderCount; i++) {
    const skeletonLoader = document.createElement("div");
    skeletonLoader.classList.add("skeleton-loader");
    app.appendChild(skeletonLoader);
  }
});
