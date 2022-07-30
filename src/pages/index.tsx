import React from 'react';
import type { NextPage } from 'next';

import { Container } from '../components/shared/Container';
import { Button } from '../components/shared/Button';
import { H1 } from '../components/shared/Texts';

const Home: NextPage = () => {
  return (
    <Container
      className={
        'flex flex-col relative w-full h-screen justify-center sm:h-fit sm:w-[640px] sm:rounded-2xl sm:shadow-2xl min-w-[360px] bg-white  py-4'
      }
    >
      <div className={'flex w-full items-center justify-center mb-4'}>
        <H1>{'Escolha o exemplo'}</H1>
      </div>

      <div className={'flex flex-col sm:flex-row gap-4 h-[100px]'}>
        <Button dataTestId="lessThanTenButton" type="button" isLoading={false}>
          <div className="flex justify-center items-center w-full h-60 sm:h-auto">
            {'Exemplo de carrinho MENOR que R$10,00'}
          </div>
        </Button>

        <Button dataTestId="moreThanTenButton" type="button" isLoading={false}>
          <div className="flex justify-center items-center w-full h-60 sm:h-auto">
            {'Exemplo de carrinho MAIOR que R$10,00'}
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default Home;
