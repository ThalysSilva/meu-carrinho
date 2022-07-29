import React from 'react';
import { ItemCart } from '../Item';

export function ItemsListCart() {
  const placeholderImg =
    'http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000';
  return (
    <div className={'flex flex-col flex-1 px-4 mb-4 gap-4 overflow-x-hidden'}>
      <ItemCart
        imgSrc={placeholderImg}
        price={'220'}
        sellPrice={'220'}
        itemName={'trufa de morango'}
        key={1}
      />
      <ItemCart
        imgSrc={placeholderImg}
        price={'220'}
        sellPrice={'220'}
        itemName={'trufa de morango'}
        key={1}
      />
      <ItemCart
        imgSrc={placeholderImg}
        price={'220'}
        sellPrice={'220'}
        itemName={'trufa de morango'}
        key={1}
      />
      <ItemCart
        imgSrc={placeholderImg}
        price={'220'}
        sellPrice={'220'}
        itemName={'trufa de morango'}
        key={1}
      />
      <ItemCart
        imgSrc={placeholderImg}
        price={'220'}
        sellPrice={'220'}
        itemName={'trufa de morango'}
        key={1}
      />
      <ItemCart
        imgSrc={placeholderImg}
        price={'220'}
        sellPrice={'220'}
        itemName={'trufa de morango'}
        key={1}
      />
    </div>
  );
}
