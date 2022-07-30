import React, { useEffect, useState } from 'react';
import { HeaderCart } from '../../components/pageCart/Header';
import { ItemsListCart } from '../../components/pageCart/ItemsList';
import { Button } from '../../components/shared/Button';
import { Container } from '../../components/shared/Container';
import { Divider } from '../../components/shared/Divider';
import { H2, H3 } from '../../components/shared/Texts';
import { When } from '../../components/shared/When';
import WithCartSetted from '../../components/shared/WithCartSetted';
import useCart from '../../hooks/pageCart/useCart';
import { normalizePrice } from '../../util/functions';
function Cart() {
  const { cartItems, total, handleClick } = useCart();
  return (
    <Container
      className={
        'flex flex-col relative w-full h-screen sm:h-[750px] sm:w-[450px] sm:rounded-2xl sm:shadow-2xl  min-w-[320px] bg-white  py-4'
      }
    >
      <HeaderCart />
      <ItemsListCart cartItems={cartItems} />
      <div className={'flex flex-col '}>
        <Divider />
        <div className={'flex flex-col items-center'}>
          <div className={'flex w-full min-h-max items-center justify-between px-4 mb-4'}>
            <H2>{'Total'}</H2>
            <H2>{`R$ ${normalizePrice(total)}`}</H2>
          </div>
          <When value={parseInt(total) > 1000}>
            <H3 className={' font-medium flex bg-[#c7ffa6] text-[#217a00] w-fit px-4 py-2 rounded-3xl mb-4'}>
              {'Parabéns, sua compra tem frete grátis !'}
            </H3>
          </When>
        </div>
        <Divider />
        <div className={'flex flex-1 min-h-fit mx-4'}>
          <Button onClick={handleClick} type="button">
            <span className={'flex items-center justify-center w-full min-h-fit h-16  text-center'}>
              <H2>{'Finalizar compra'}</H2>
            </span>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default WithCartSetted(Cart);
