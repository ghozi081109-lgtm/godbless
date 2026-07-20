// Ambil data keranjang dari memori browser
let cart = JSON.parse(localStorage.getItem('distroCart')) || [];

// Fungsi untuk memperbarui angka di ikon navbar
function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.innerText = totalItems;
  }
}

// Fungsi saat tombol "+ Keranjang" diklik
function addToCart(id, name, price, image) {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }

  localStorage.setItem('distroCart', JSON.stringify(cart));
  updateCartCount();
  alert(name + " berhasil masuk keranjang!");
}

// Jalankan saat halaman dibuka
updateCartCount();
