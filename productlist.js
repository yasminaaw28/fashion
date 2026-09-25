const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=10";

const produktListe = document.querySelector("#produktliste");

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.table(json);

  json.forEach((element) => {
    produktListe.innerHTML += `
    <a href=productdetails.html?id=${element.id}>
      <article class="card">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp"
          alt="produktbillede"
        >

        <h2>${element.productdisplayname}</h2>
        <h3>${element.brandname}</h3>
        <p>${elementlement.price} kr.</p>
        <p>${element.subcategory}</p>
      </article>
      </a>`;
  });
}
