

## Buat Section TVC Full Screen

Mengubah section TVC agar memenuhi seluruh layar (full viewport height).

### Detail Teknis

Pada `src/components/TVCSection.tsx`:
- Tambahkan `min-h-screen` pada elemen `<section>` agar tingginya memenuhi seluruh viewport
- Tambahkan `flex items-center justify-center` agar konten teks berada di tengah secara vertikal dan horizontal
- Hapus `py-20` karena tidak diperlukan lagi saat full screen

