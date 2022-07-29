import React from 'react';
import { HeaderCart } from '../../components/pageCart/Header';
import { ItemsListCart } from '../../components/pageCart/ItemsList';
import { Button } from '../../components/shared/Button';

import { Container } from '../../components/shared/Container';
import { Divider } from '../../components/shared/Divider';
import { H2 } from '../../components/shared/Texts';
export default function Cart() {
  const total = '9,55';
  return (
    <Container
      className={
        'flex flex-col relative w-full h-screen sm:h-[750px] sm:w-[450px] md:rounded-2xl md:shadow-2xl  min-w-[320px] bg-white  py-4'
      }
    >
      <HeaderCart />
      <ItemsListCart />
      <div className={'flex flex-col '}>
        <Divider />
        <div className={'flex w-full min-h-max items-center justify-between px-4 mb-4'}>
          <H2>{'Total'}</H2>
          <H2>{`R$ ${total}`}</H2>
        </div>
        <Divider />
        <div className={'flex flex-1 min-h-fit'}>
          <Button type="button">
            <span className={'flex items-center justify-center w-full min-h-fit h-16  text-center'}>
              <H2>{'Finalizar compra'}</H2>
            </span>
          </Button>
        </div>
      </div>
    </Container>
  );
}
