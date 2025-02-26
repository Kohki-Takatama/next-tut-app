'use client';

import { useState } from 'react';

const ImageViewer = ({
  imageUrl,
}: Readonly<{
  imageUrl: string[];
}>) => {
  const [num, setNum] = useState<number>(0);

  const handleClientClick = (num: number) => {
    setNum((prev) => (prev === 0 ? imageUrl.length - 1 : (prev + num) % imageUrl.length));
  };
  return (
    <>
      <img src={imageUrl[num]} alt="Pokemon Image" />
      <div>
        <button onClick={() => handleClientClick(1)}>←</button>
        <button onClick={() => handleClientClick(-1)}>→</button>
      </div>
    </>
  );
};

export default ImageViewer;
