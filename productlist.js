const productList = document.querySelector("#productlist");

const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

let endpoint = "https://kea-alt-del.dk/t7/api/products?limit=12";

if (category) {
  endpoint = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
}

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    console.table(data);

    data.forEach((produkt) => {
      const discountPrice = produkt.price - (produkt.price * produkt.discount) / 100;

      productList.innerHTML += `
        <a href="productdetail.html?id=${produkt.id}" class="card ${produkt.soldout ? "soldout-card" : ""}">

          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp"
            alt="${produkt.productdisplayname}"
          >

          <div class="card-text">

            <div class="badge-area">
              ${produkt.soldout ? `<span class="badge soldout">Udsolgt</span>` : ""}
              ${produkt.discount ? `<span class="badge sale">-${produkt.discount}%</span>` : ""}
            </div>

            <p class="brand">${produkt.brandname}</p>

            <h2 class="product-name">
              ${produkt.productdisplayname}
            </h2>

            ${
              produkt.discount
                ? `
                  <p class="price-row">
                    <span class="old-price">${produkt.price} kr.</span>
                    <span class="sale-price">${discountPrice.toFixed(2)} kr.</span>
                  </p>
                `
                : `<p class="price-row">${produkt.price} kr.</p>`
            }

          </div>

        </a>
      `;
    });
  });
