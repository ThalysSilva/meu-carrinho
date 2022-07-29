import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { FC } from 'react';
import { useCartContext } from '../../../hooks/useCartContext';

type withAuthenticationFn = (Component: FC) => FC;

const WithCartSetted: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { isCartItemsSetted } = useCartContext();
    const router = useRouter();

    useEffect(() => {
      if (!isCartItemsSetted) router.push('/login');
    }, [isCartItemsSetted]);

    return isCartItemsSetted ? <Component /> : null;
  };

  return Authenticated;
};

export default WithCartSetted;
