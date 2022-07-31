import React, { ReactNode } from 'react';

type Props = {
  dataTestId?: string;
  children: ReactNode;
  className?: string;
};

export function H1({ children, className, dataTestId }: Props) {
  return (
    <h1
      data-testid={dataTestId}
      className={`text-xl sm:text-2xl font-bold ${className ? className : ''}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, dataTestId }: Props) {
  return (
    <h2
      data-testid={dataTestId}
      className={`text-lg sm:text-xl font-bold ${className ? className : ''}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, dataTestId }: Props) {
  return (
    <h3
      data-testid={dataTestId}
      className={`text-md sm:text-lg font-semibold ${className ? className : ''}`}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, dataTestId }: Props) {
  return (
    <h4 data-testid={dataTestId} className={`text-sm sm:text-base ${className ? className : ''}`}>
      {children}
    </h4>
  );
}

export function H5({ children, className, dataTestId }: Props) {
  return (
    <h5 data-testid={dataTestId} className={`text-xs sm:text-sm ${className ? className : ''}`}>
      {children}
    </h5>
  );
}
