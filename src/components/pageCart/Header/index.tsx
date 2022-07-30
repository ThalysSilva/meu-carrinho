import { useRouter } from 'next/router';
import React from 'react';

import ArrowLeftIcon from '../../../assets/icon/ArrowLeft';
import { Divider } from '../../shared/Divider';
import { H1 } from '../../shared/Texts';

export function HeaderCart() {
  const router = useRouter();
  function handleReturnClick() {
    router.push('/');
  }
  return (
    <div className={'flex flex-col w-full justify-center items-center min-w-max px-4'}>
      <div className={'flex flex-row justify-between w-full mb-4'}>
        <button
          type={'button'}
          onClick={handleReturnClick}
          className="flex w-10 h-auto rounded-xl justify-center items-center "
        >
          <ArrowLeftIcon />
        </button>
        <H1 dataTestId={'cartHeader'} className={'flex items-center justify-center '}>
          {'Meu carrinho'}
        </H1>
        <div className={'w-10 h-auto'} />
      </div>
      <Divider />
    </div>
  );
}
