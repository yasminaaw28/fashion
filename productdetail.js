const productDetail = document.querySelector("#productDetail");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

fetch(endpoint)
  .then((response) => response.json())
  .then((produkt) => {
    const discountPrice = produkt.price - (produkt.price * produkt.discount) / 100;

    productDetail.innerHTML = `
      <div>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp" alt="${produkt.productdisplayname}">
      </div>

      <div class="detail-info">
        ${produkt.soldout ? `<span class="badge soldout">Udsolgt</span>` : ""}

        ${produkt.discount ? `<span class="badge sale">-${produkt.discount}%</span>` : ""}

        <p class="brand">${produkt.brandname}</p>
        <h1>${produkt.productdisplayname}</h1>

        ${
          produkt.discount
            ? `
              <p>
                <span class="old-price">${produkt.price} kr.</span>
                <span class="sale-price">${discountPrice.toFixed(2)} kr.</span>
              </p>
            `
            : `<p class="price">${produkt.price} kr.</p>`
        }

        <p class="description">
          Her kan du skrive en kort produktbeskrivelse. Hvis API’et har flere
          felter, kan du også vise dem her.
        </p>
      </div>
    `;
  });
