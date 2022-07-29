import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt?: string;
  width: string;
  height: string;
};

export function ImageWithFrame({ src, height, width, alt }: Props) {
  return (
    <div className={`flex border-2 border-gray-300 min-w-max resize-none`}>
      <Image src={src} width={width} height={height} alt={alt}/>
    </div>
  );
}
