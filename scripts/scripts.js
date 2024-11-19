const products = [
    { id: "prod1", name: "Product 1" },
    { id: "prod2", name: "Product 2" },
    { id: "prod3", name: "Product 3" },
    { id: "prod4", name: "Product 4" },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");
    
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  
    if (localStorage.getItem("reviewCount")) {
      let count = parseInt(localStorage.getItem("reviewCount"), 10);
      localStorage.setItem("reviewCount", count + 1);
    } else {
      localStorage.setItem("reviewCount", 1);
    }
  });
  