window.onload = () => {
  // Fetching de datos de dummyJSON
  fetch("https://dummyjson.com/products?limit=4")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.products);

      const container = document.querySelector("#product-list");

      data.products.forEach((prod, index) => {
        container.innerHTML += `
          <div class="card col-3 ml-2 m-2" style="width: 18rem;">
                <img src="${prod.thumbnail}" class="card-img-top" alt="${prod.title}">
                <div class="card-body">
                  <h5 class="card-title">${prod.title}</h5>
                  <p class="card-text">${prod.description}</p>
                  <a href="#" class="btn btn-info">Go somewhere</a>
                </div>
        </div>
          `;
      });
    });
};
