import React from 'react';
import { capitalize, normalizePrice } from '../../../util/functions';
import { ImageWithFrame } from '../../shared/ImageWithFrame';
import { H3, H4, H5 } from '../../shared/Texts';

type Props = {
  sellPrice: string;
  itemName: string;
  imgSrc: string;
  price: string;
  key: number;
};

export function ItemCart({ imgSrc, itemName, price, sellPrice, key }: Props) {
  return (
    <div key={key} data-testid={`${itemName}-${key}`} className="flex flex-row gap-4 items-center">
      <ImageWithFrame src={imgSrc} width={'100px'} height={'100px'} />
      <div className={'flex flex-col gap-1'}>
        <H3>{capitalize(itemName)}</H3>
        <div className={'flex flex-col'}>
          <H5 className={'font-semibold text-gray-400'}>{`R$ ${normalizePrice(price)}`}</H5>
          <H4 className={'font-semibold '}>{`R$ ${normalizePrice(sellPrice)}`}</H4>
        </div>
      </div>
    </div>
  );
}
