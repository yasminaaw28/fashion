const categoryList = document.querySelector("#categoryList");
const endpoint = "https://kea-alt-del.dk/t7/api/categories";

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      categoryList.innerHTML += `
        <a class="category-card" href="productlist.html?cat=${category.category}">
          ${category.category}
        </a>
      `;
    });
  });
