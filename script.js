// script.js

document.addEventListener('DOMContentLoaded', () => {
    const figmaBtn = document.getElementById('figma-btn');

    if (figmaBtn) {
        figmaBtn.addEventListener('click', (event) => {
            // Tempat tracking analytics atau interaksi kustom jika diperlukan sebelum pindah halaman
            console.log("Pengguna mengklik tombol untuk mencoba prototype Figma KuliGO.");
            
            // Catatan: Jika lu mau ganti link figma secara dinamis via JS, bisa pake baris di bawah ini:
            figmaBtn.href = "https://www.figma.com/design/In1R7znEFqNagoWJ7q4IMX/Untitled?node-id=0-1&t=qRkVkVd0AvqGu8d8-1";
        });
    }
});
