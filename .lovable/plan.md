

## Glassmorphism Style, Scroll Animations, dan Tombol WhatsApp

### 1. Custom Hook: useScrollAnimation
Membuat hook `src/hooks/use-scroll-animation.tsx` menggunakan `IntersectionObserver` untuk mendeteksi elemen masuk viewport dan menambahkan animasi fade-in.

### 2. Glassmorphism Style pada Semua Section

Mengubah style setiap section agar menggunakan efek glass morphism:
- **Navbar**: `bg-white/60 backdrop-blur-xl border-b border-white/20`
- **PromoSection cards**: `bg-white/40 backdrop-blur-lg border border-white/30`
- **GiveawaySection**: Background muted diganti `bg-white/30 backdrop-blur-md`
- **ExploreSection cards**: Overlay gradient dengan glass effect
- **TVCSection**: Container video dengan `bg-white/20 backdrop-blur-lg`
- **ReelsGallery**: Card reels dengan glass overlay
- **FooterCTA**: CTA section dengan `bg-secondary/80 backdrop-blur-xl`
- **Giveaway badge**: Glass effect pada badge "GRATIS"

### 3. Scroll Fade-in Animation pada Setiap Section

Setiap section utama dibungkus dengan komponen/hook yang menambahkan class animasi saat masuk viewport:
- Elemen mulai dengan `opacity-0 translate-y-8`
- Saat masuk viewport, transisi ke `opacity-1 translate-y-0`
- Stagger delay untuk child elements (card, dll)

File yang diubah:
- `src/components/PromoSection.tsx` -- glass cards + scroll animation
- `src/components/GiveawaySection.tsx` -- glass bg + scroll animation
- `src/components/ExploreSection.tsx` -- glass overlay + scroll animation
- `src/components/TVCSection.tsx` -- glass container + scroll animation
- `src/components/ReelsGallery.tsx` -- glass cards + scroll animation
- `src/components/FooterCTA.tsx` -- glass CTA + scroll animation
- `src/components/Navbar.tsx` -- glassmorphism navbar

### 4. Tombol WhatsApp Floating

Menambahkan komponen `src/components/WhatsAppButton.tsx`:
- Fixed position di kanan bawah (`fixed bottom-6 right-6`)
- Ikon WhatsApp (menggunakan SVG inline karena Lucide tidak punya ikon WA)
- Background hijau WhatsApp (`bg-[#25D366]`) dengan glass shadow
- Animasi pulse halus untuk menarik perhatian
- Link ke `https://wa.me/62...` (placeholder nomor)
- Ditambahkan ke `src/pages/Index.tsx`

### 5. Update Tailwind Config

Menambahkan keyframes dan animation baru di `tailwind.config.ts`:
- `fade-in-up` untuk scroll animation
- `bounce-gentle` untuk tombol WhatsApp

### Detail Teknis

**File baru:**
- `src/hooks/use-scroll-animation.tsx` -- IntersectionObserver hook
- `src/components/WhatsAppButton.tsx` -- floating WA button

**File yang diedit:**
- `src/pages/Index.tsx` -- tambah WhatsAppButton
- `src/components/Navbar.tsx` -- glassmorphism
- `src/components/PromoSection.tsx` -- glass cards + fade-in
- `src/components/GiveawaySection.tsx` -- glass bg + fade-in
- `src/components/ExploreSection.tsx` -- glass + fade-in
- `src/components/TVCSection.tsx` -- glass + fade-in
- `src/components/ReelsGallery.tsx` -- glass + fade-in
- `src/components/FooterCTA.tsx` -- glass + fade-in
- `src/index.css` -- base gradient background untuk glass effect
