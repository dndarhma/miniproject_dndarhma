window.onload = function() {
    const img = document.querySelector('.animation');
    let isMovingDown = true;
    let currentPosition = 0;
    const moveDistance = 20; // Jarak pergerakan gambar

    function moveImage() {
        const maxHeight = document.querySelector('.container').offsetHeight - img.offsetHeight;

        if (isMovingDown) {
            currentPosition += 1;
            if (currentPosition >= moveDistance) {
                isMovingDown = false;
            }
        } else {
            currentPosition -= 1;
            if (currentPosition <= 0) {
                isMovingDown = true;
            }
        }

        img.style.transform = `translateY(${currentPosition}px)`;
    }

    // Panggil fungsi moveImage() setiap interval waktu tertentu (contoh: setiap 100ms)
    setInterval(moveImage, 70);
};

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav_link'); // Mendapatkan semua tautan navbar

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault(); // Menghentikan perilaku default dari tautan

            const targetId = this.getAttribute('href'); // Mendapatkan ID tujuan dari tautan

            // Memastikan bahwa elemen dengan ID target ada di halaman
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Mengubah properti CSS untuk menampilkan kembali bagian yang tersembunyi
                targetElement.style.display = 'block'; // Ubah properti CSS sesuai kebutuhan Anda
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Gulir halaman ke bagian target
            }
        });
    });
});
