/* /app/gallery/page.tsx */
import Image from 'next/image';
import img1 from '@/assets/img.jpg';

export default function Gallery() {
  return (
    <div>
      <h1>私の画像</h1>
      <Image src={img1.src} alt="画像の説明" width={500} height={300} />
    </div>
  );
}
