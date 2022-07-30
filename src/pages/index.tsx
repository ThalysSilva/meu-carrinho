import React from 'react';
import type { NextPage } from 'next';

import { Container } from '../components/shared/Container';
import { Button } from '../components/shared/Button';
import { H1 } from '../components/shared/Texts';
import useHome from '../hooks/pageHome/useHome';

const Home: NextPage = () => {
  const { onClick, isLoading } = useHome();
  return (
    <Container
      className={
        'flex flex-col relative w-full h-screen justify-center sm:h-fit sm:w-[640px] sm:rounded-2xl sm:shadow-2xl min-w-[360px] bg-white  py-4'
      }
    >
      <div className={'flex w-full items-center justify-center mb-10 sm:mb-4'}>
        <H1>{'Escolha o exemplo'}</H1>
      </div>

      <div className={'flex flex-col sm:flex-row gap-10 sm:gap-4 px-4'}>
        <Button
          onClick={() => onClick('lessOrEqualThanTen')}
          dataTestId={'lessThanTenButton'}
          isLoading={isLoading}
          type={'button'}
        >
          <div className="flex justify-center items-center w-full h-[100px]">
            {'Exemplo de carrinho MENOR que R$10,00'}
          </div>
        </Button>

        <Button
          onClick={() => onClick('moreThanTen')}
          dataTestId={'moreThanTenButton'}
          isLoading={isLoading}
          type={'button'}
        >
          <div className="flex justify-center items-center w-full h-[100px]">
            {'Exemplo de carrinho MAIOR que R$10,00'}
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default Home;
