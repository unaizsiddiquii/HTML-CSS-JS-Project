let bagItems;
onLode();

function onLode() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  dispalyBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  dispalyBagIcon();
}

function dispalyBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.innerHTML = bagItems.length;
    bagItemCountElement.style.visibility = "visible";
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = "";

  items.forEach((item) => {
    innerHTML += ` <div class="item-container">
        <img class="item-image" src="${item.image}" alt="Carlton London image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs. ${item.current_price}</span>
            <span class="orignal-price">Rs. ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage} OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag</button>
        </div>`;
  });

  itemsContainerElement.innerHTML = innerHTML;
}
