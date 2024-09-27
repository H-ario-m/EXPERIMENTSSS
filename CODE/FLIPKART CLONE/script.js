const products = {
    items: [
      {
        name: "boat earphone",
        price: 599,
        discount: 80,
        originalPrice: 2000,
        rating: {
          totalOrders: 50000,
          averageRating: 2.5
        },
        isAvailable: true,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/8/j/m/-original-imagsggfdut3b2gs.jpeg?q=70"
      },
      {
        name: "jbl",
        price: 1999,
        discount: 80,
        originalPrice: 20000,
        rating: {
          totalOrders: 50000,
          averageRating: 2.5
        },
        isAvailable: true,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/8/j/m/-original-imagsggfdut3b2gs.jpeg?q=70"
      },
      {
        name: "jbl",
        price: 1999,
        discount: 80,
        originalPrice: 20000,
        rating: {
          totalOrders: 50000,
          averageRating: 2.5
        },
        isAvailable: true,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/8/j/m/-original-imagsggfdut3b2gs.jpeg?q=70"
      },
      {
        name: "jbl",
        price: 1999,
        discount: 80,
        originalPrice: 20000,
        rating: {
          totalOrders: 50000,
          averageRating: 2.5
        },
        isAvailable: true,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/8/j/m/-original-imagsggfdut3b2gs.jpeg?q=70"
      }
    ]
  };
  
  // Get the container element
  const productContainer = document.getElementById("productcontainer");
  
  // Loop through the items and create HTML for each product
  products.items.forEach((product) => {
    const productHTML = `
      <div class="productItem">
        <img class ="imagess" src="${product.image}"  alt="${product.name}" />
        <a class="title">${product.name}</a>
        <p class="variant">Black, wireless</p>
        <p class="rating">${product.rating.averageRating} <span>(${product.rating.totalOrders.toLocaleString()})</span></p>
        <p class="price">
          <span class="discountedPrice">Rs ${product.price}</span>
          <span class="originalPrice">Rs ${product.originalPrice}</span>
          <span class="discount">${product.discount}%</span>
        </p>
      </div>
    `;
  
    // Append the product HTML to the container
    productContainer.innerHTML += productHTML;
  });