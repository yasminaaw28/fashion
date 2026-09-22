const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=10";

const produktListe = document.querySelector(".produktliste");

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.table(json);

  json.forEach((produkt) => {
    produktListe.innerHTML += `
      <article class="card">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp"
          alt="${produkt.productdisplayname}"
        >

        <h2>${produkt.brandname}</h2>
        <h3>${produkt.productdisplayname}</h3>
        <p>${produkt.price} kr.</p>
      </article>
    `;
  });
}
