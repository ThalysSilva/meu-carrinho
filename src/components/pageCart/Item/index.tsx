import React from 'react';
import { capitalize, normalizePrice } from '../../../utils/functions';
import { ImageWithFrame } from '../../shared/ImageWithFrame';
import { H3, H4, H5 } from '../../shared/Texts';

type Props = {
  sellPrice: string;
  itemName: string;
  imgSrc: string;
  price: string;
  id: string;
};

export function ItemCart({ imgSrc, itemName, price, sellPrice, id }: Props) {
  return (
    <div
      className="flex flex-row gap-4 items-center"
      data-testid={`${itemName}-${id}`}
      id={id}
    >
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
