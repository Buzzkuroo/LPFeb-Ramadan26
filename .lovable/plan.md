

## Perbaikan Card Promo Ramadan

### Perubahan yang akan dilakukan pada `src/components/PromoSection.tsx`:

1. **Tombol "Selengkapnya" sejajar** -- Menggunakan flexbox dengan `flex-grow` pada area konten agar tombol "Selengkapnya" selalu berada di posisi bawah card yang sama, terlepas dari panjang teks judul/deskripsi.

2. **Border card lebih tebal (bold)** -- Mengubah `border` menjadi `border-2` agar garis border card lebih terlihat jelas.

### Detail Teknis

- Tambahkan `flex flex-col` pada card container
- Tambahkan `flex flex-col flex-grow` pada div konten (`p-6`)
- Bungkus title + description dalam div dengan `flex-grow` agar mendorong link "Selengkapnya" ke bawah
- Ubah `border` menjadi `border-2` pada card

