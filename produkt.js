document.addEventListener("DOMContentLoaded", init);

const productContainer = document.querySelector("#productContainer");

function init() {
  // Get Product ID from URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get("id");
  console.log("vores ID:", productId);

  // Pass ID to getProducts
  getProduct(productId);
}

function getProduct(productId) {
  let fetchUrl = `https://lxosbgvtiysgcjoeqtep.supabase.co/rest/v1/products?select=id,name,image,tags,price,description&id=eq.${productId}`;
  fetch(fetchUrl, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b3NiZ3Z0aXlzZ2Nqb2VxdGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MzMyMjMsImV4cCI6MjA2MzMwOTIyM30._HcRUS6pAGb2Zd7ggHNMaGQZVaaipMa7LJBYMtxhOLU",
    },
  })
    .then((res) => res.json())
    .then(addProduct);
}

function addProduct(productList) {
  let product = productList[0];

  // Create Product Div
  const newProduct = document.createElement("div");
  newProduct.classList.add("product");

  // Image Container
  const newImageContainer = document.createElement("div");
  newImageContainer.classList.add("imageContainer");
  newProduct.appendChild(newImageContainer);

  // Image
  const newImage = document.createElement("img");
  newImage.src = `./imgs/${product.image}`;
  newImageContainer.appendChild(newImage);

  // Text Container
  const newTextContainer = document.createElement("div");
  newTextContainer.classList.add("textContainer");
  newProduct.appendChild(newTextContainer);

  // Title
  const newTitle = document.createElement("h1");
  newTitle.classList.add("title");
  newTitle.innerHTML = product.name;
  newTextContainer.appendChild(newTitle);

  // Tags
  const newTagGroup = document.createElement("div");
  newTagGroup.classList.add("tagGroup");
  for (let i = 0; i < product.tags?.length; i++) {
    const newTag = document.createElement("div");
    newTag.classList.add("tag");
    newTag.innerHTML = product.tags[i];
    newTagGroup.appendChild(newTag);
  }
  newTextContainer.appendChild(newTagGroup);

  // Price
  const newPrice = document.createElement("p");
  newPrice.classList.add("price");
  newPrice.innerHTML = `${product.price} Kr.`;
  newTextContainer.appendChild(newPrice);

  // Purchase button
  const newButton = document.createElement("button");
  newButton.classList.add("purchaseButton");
  newButton.type = "button";
  newButton.innerHTML = "Føj til kurv";
  newTextContainer.appendChild(newButton);

  // Description Container
  const newDescriptionContainer = document.createElement("div");
  newDescriptionContainer.classList.add("descriptionContainer");
  newProduct.appendChild(newDescriptionContainer);

  // Description Title
  const newDescriptionTitle = document.createElement("h2");
  newDescriptionTitle.classList.add("descriptionTitle");
  newDescriptionTitle.innerHTML = "Description:";
  newDescriptionContainer.appendChild(newDescriptionTitle);

  // Description
  const newDescription = document.createElement("p");
  newDescription.classList.add("description");
  newDescription.innerHTML = product.description;
  newDescriptionContainer.appendChild(newDescription);

  productContainer.appendChild(newProduct);
}
