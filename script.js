$(document).ready(function () {
  const accessKey = "YOUR_UNSPLASH_ACCESS_KEY"; // Replace with your Unsplash Access Key
  const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=5`;

  $.getJSON(url, function (data) {
    let feedSection = $("#feed-section");

    data.forEach((image) => {
      let postCard = `
              <div class="card mb-4">
                  <div class="card-header">${image.user.name}</div>
                  <img src="${image.urls.regular}" class="card-img-top" alt="${
        image.alt_description
      }">
                  <div class="card-body">
                      <p class="card-text">${
                        image.description || "No caption"
                      }</p>
                  </div>
                  <div class="card-footer text-muted">${new Date(
                    image.created_at
                  ).toLocaleDateString()}</div>
              </div>
          `;
      feedSection.append(postCard);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Your JavaScript code here
});
