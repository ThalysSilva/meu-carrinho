import React, { ReactNode } from 'react';

type ChildrenProps = {
  children: ReactNode;
  className?: string;
  dataTestId?: string;
};

export function H1(props: ChildrenProps) {
  return (
    <h1
      data-testid={props.dataTestId}
      className={'text-xl sm:text-2xl font-bold ' + props.className}
    >
      {props.children}
    </h1>
  );
}

export function H2(props: ChildrenProps) {
  return (
    <h2
      data-testid={props.dataTestId}
      className={'text-lg sm:text-xl font-bold ' + props.className}
    >
      {props.children}
    </h2>
  );
}

export function H3(props: ChildrenProps) {
  return (
    <h3
      data-testid={props.dataTestId}
      className={'text-md sm:text-lg font-semibold ' + props.className}
    >
      {props.children}
    </h3>
  );
}

export function H4(props: ChildrenProps) {
  return (
    <h4 data-testid={props.dataTestId} className={'text-sm sm:text-base ' + props.className}>
      {props.children}
    </h4>
  );
}
