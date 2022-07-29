import React from 'react';
import { ImageWithFrame } from '../../shared/ImageWithFrame';
import { H2, H3, H4, H5 } from '../../shared/Texts';

type Props = {
  itemName: string;
  imgSrc: string;
  price: string;
  sellPrice: string;
};

export function ItemCart({ imgSrc, itemName, price, sellPrice }: Props) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <ImageWithFrame src={imgSrc} width={'100px'} height={'100px'} />
      <div className={'flex flex-col gap-1'}>
        <H3>{itemName}</H3>
        <div className={'flex flex-col'}>
          <H5 className={'font-semibold text-gray-400'}>{`R$ ${price}`}</H5>
          <H4 className={'font-semibold '}>{`R$ ${sellPrice}`}</H4>
        </div>
      </div>
    </div>
  );
}
