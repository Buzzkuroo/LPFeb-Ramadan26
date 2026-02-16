

## Hapus Placeholder Video YouTube

Menghapus elemen video placeholder (kotak dengan tombol play dan "Tonton Video") yang menutupi background video YouTube di section TVC.

### Detail Teknis

Pada `src/components/TVCSection.tsx`:
- Hapus seluruh `div` dengan class `aspect-video` yang berisi iframe player dan tombol play
- Hapus state `playing` dan import `Play` dari lucide-react karena tidak lagi diperlukan
- Sisakan hanya heading `#MelayaniSepenuhHati` di atas background video YouTube

Hasilnya: section hanya menampilkan teks `#MelayaniSepenuhHati` di atas video YouTube background yang autoplay dan looping, tanpa ada elemen lain yang menghalangi.

