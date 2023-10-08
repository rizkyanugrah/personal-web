let currentIndex = 0; // Menyimpan indeks gambar yang sedang ditampilkan

const images = [
  "../assets/portfolio/rental-mobil.png",
  "../assets/portfolio/bmi-calculator.png",
  "../assets/portfolio/pln-ppob.png",
];

// Fungsi untuk membuka modal tampilan gambar
function openModal(card) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImg");
  let cardImg = card.querySelector(".card-img");

  currentIndex = images.indexOf(cardImg.src);

  modal.style.display = "block";
  modalImg.src = cardImg.src;
  modalImg.alt = cardImg.alt;
}

// Fungsi untuk menutup modal tampilan gambar
function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Fungsi untuk menampilkan gambar sebelumnya
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  let modalImg = document.getElementById("modalImg");
  modalImg.src = images[currentIndex];
}

// Fungsi untuk menampilkan gambar berikutnya
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  let modalImg = document.getElementById("modalImg");
  modalImg.src = images[currentIndex];
}

// Menambahkan event listener untuk tombol panah kiri dan kanan
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    prevImage(); // Menampilkan gambar sebelumnya saat tombol panah kiri ditekan
  } else if (event.key === "ArrowRight") {
    nextImage(); // Menampilkan gambar berikutnya saat tombol panah kanan ditekan
  }
});
