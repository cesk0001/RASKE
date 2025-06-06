document.addEventListener("DOMContentLoaded", init);

const popularContainer = document.querySelector("#popularContainer");

function init() {
  getPopularProducts();
}

function getPopularProducts() {
  let fetchUrl = "https://lxosbgvtiysgcjoeqtep.supabase.co/rest/v1/products?select=id,name,image,tags,price";
  fetchUrl = `${fetchUrl}&popular=is.true}`;

  fetch(fetchUrl, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b3NiZ3Z0aXlzZ2Nqb2VxdGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MzMyMjMsImV4cCI6MjA2MzMwOTIyM30._HcRUS6pAGb2Zd7ggHNMaGQZVaaipMa7LJBYMtxhOLU",
    },
  })
    .then((res) => res.json())
    .then(addPopularProducts);
}

function addPopularProducts(products) {
  console.log("test", products);

  for (let i = 0; i < products.length; i++) {
    // Create Product Div
    const newProduct = document.createElement("div");
    newProduct.classList.add("product");

    // Link
    const newLink = document.createElement("a");
    newLink.classList.add("productLink");
    newLink.href = `produkt.html?id=${products[i].id}`;
    newProduct.appendChild(newLink);

    // Image Container
    const newImageContainer = document.createElement("div");
    newImageContainer.classList.add("imageContainer");
    newLink.appendChild(newImageContainer);

    // Image
    const newImage = document.createElement("img");
    newImage.src = `./imgs/${products[i].image}`;
    newImageContainer.appendChild(newImage);

    // Tags
    const newTagGroup = document.createElement("div");
    newTagGroup.classList.add("tagGroup");
    for (let j = 0; j < products[i].tags?.length; j++) {
      const newTag = document.createElement("div");
      newTag.classList.add("tag");
      newTag.innerHTML = products[i].tags[j];
      newTagGroup.appendChild(newTag);
    }
    newImageContainer.appendChild(newTagGroup);

    // Text Container
    const newTextContainer = document.createElement("div");
    newTextContainer.classList.add("textContainer");
    newLink.appendChild(newTextContainer);

    // Title
    const newTitle = document.createElement("p");
    newTitle.classList.add("title");
    newTitle.innerHTML = products[i].name;
    newTextContainer.appendChild(newTitle);

    // Price
    const newPrice = document.createElement("p");
    newPrice.classList.add("price");
    newPrice.innerHTML = `${products[i].price} Kr.`;
    newTextContainer.appendChild(newPrice);

    popularContainer.appendChild(newProduct);
  }
}
