

## Kombinasi Font: Heebo + Cormorant Garamond + Yrsa

Berdasarkan screenshot, akan diterapkan 3 font dengan peran berbeda:

- **Heebo** (sans-serif, tebal) -- untuk heading utama (h1, h2)
- **Cormorant Garamond** (serif, italic/elegant) -- untuk subheading dan tagline
- **Yrsa** (serif, readable) -- untuk body text dan paragraf

### Perubahan File

**1. `src/index.css`**
- Update Google Fonts import: tambah Heebo, Cormorant Garamond, dan Yrsa (ganti Montserrat)

**2. `tailwind.config.ts`**
- Tambah 3 font family baru:
  - `font-heebo` -- Heebo, sans-serif
  - `font-garamond` -- Cormorant Garamond, serif
  - `font-yrsa` -- Yrsa, serif
- Hapus `font-montserrat`

**3. `src/index.css` (body base)**
- Ubah `font-montserrat` menjadi `font-yrsa` sebagai default body font

**4. Komponen yang diupdate untuk menggunakan font yang sesuai:**
- **HeroSlider.tsx** -- heading: `font-heebo`, subtitle: `font-garamond italic`
- **PromoSection.tsx** -- section title: `font-heebo`, description: `font-yrsa`, card title: `font-heebo`
- **GiveawaySection.tsx** -- heading: `font-heebo`, tagline: `font-garamond`, body: `font-yrsa`
- **ExploreSection.tsx** -- heading: `font-heebo`, subtitle: `font-garamond`
- **TVCSection.tsx** -- heading: `font-heebo`, subtitle: `font-garamond`
- **ReelsGallery.tsx** -- heading: `font-heebo`
- **FooterCTA.tsx** -- heading: `font-heebo`, description: `font-garamond`
- **Navbar.tsx** -- logo/brand: `font-heebo`

### Hasil Akhir
Kombinasi 3 font ini memberikan hierarki visual yang kuat: Heebo yang bold dan modern untuk judul, Cormorant Garamond yang elegan untuk subheading, dan Yrsa yang readable untuk konten paragraf.
