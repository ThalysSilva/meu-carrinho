import React from 'react';
import { Divider } from '../../shared/Divider';
import { H1 } from '../../shared/Texts';

export function HeaderCart() {
  return (
    <div className='flex flex-col w-full justify-center items-center min-w-max'>
      <H1 dataTestId={'cartHeader'} className={'flex text-center mb-4 '}>{'Meu carrinho'}</H1>
      <Divider/>
    </div>
  );
}
