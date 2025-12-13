# Hero Video Ekleme Kılavuzu

## Video Dosyası Ekleme

1. **Video dosyanızı bu klasöre ekleyin** (`public/videos/`)
   - Örnek: `hero-video.mp4`
   - Format: MP4, WebM veya MOV
   - Önerilen boyut: 1920x1080 veya daha yüksek
   - Dosya boyutu: Mümkün olduğunca küçük (5-10MB arası ideal)

2. **Anasayfada video'yu aktif edin** (`app/page.tsx`):
   ```tsx
   <Hero 
     showVideo={true}
     videoSrc="/videos/hero-video.mp4"
     videoType="video/mp4"
   />
   ```

## Video URL Kullanma

Eğer video bir URL'de ise (YouTube, Vimeo, vb.):
```tsx
<Hero 
  showVideo={true}
  videoSrc="https://example.com/video.mp4"
  videoType="video/mp4"
/>
```

## Video Ayarları

- `showVideo`: Video gösterilsin mi? (true/false)
- `videoSrc`: Video dosya yolu veya URL
- `videoType`: Video formatı (video/mp4, video/webm, vb.)

## Notlar

- Video otomatik oynatılır, sessiz ve döngüde çalışır
- Video arka planda %30 opacity ile gösterilir
- Metin okunabilirliği için overlay eklenmiştir

