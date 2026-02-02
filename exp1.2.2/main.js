let productList = [
  { name: "USB Keyboard", price: 650, type: "electronics" },
  { name: "Bluetooth Earphone", price: 1200, type: "electronics" },
  { name: "Iphone 17 pro", price: 150000, type: "electronics" },
  { name: "Denim Jacket", price: 2200, type: "clothes" },
  { name: "Denim Jeans", price: 2200, type: "clothes" }
];

function showProducts(data) {
  let box = document.getElementById("products");
  box.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    box.innerHTML +=
      "<div class='card'>" +
      "<h4>" + data[i].name + "</h4>" +
      "<p class='price'>₹ " + data[i].price + "</p>" +
      "<span class='type " + data[i].type + "'>" +
      data[i].type +
      "</span>" +
      "</div>";
  }
}

function filterData() {
  let value = document.getElementById("filter").value;

  if (value === "all") {
    showProducts(productList);
  } else {
    let newList = productList.filter(
      product => product.type === value
    );
    showProducts(newList);
  }
}

showProducts(productList);
