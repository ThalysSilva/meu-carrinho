import React, { ReactNode } from 'react';
import LoadingSpinner from '../../../assets/icon/LoadingSpinner';

type ButtonProps = {
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  dataTestId?: string;
  className?: string;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
};

export function Button(props: ButtonProps) {
  return (
    <button
      disabled={props.isDisabled || props.isLoading}
      onClick={props.onClick}
      data-testid={props.dataTestId}
      type={props.type}
      className={`flex flex-1 mx-4 bg-[#3b74f2] text-white items-center h-full rounded-xl ${
        props.className ? props.className : ''
      }`}
    >
      {props.isLoading ? (
        <>
          <span className="font-normal text-lg text-primary-white leading-6">{`Carregando`}</span>
          <LoadingSpinner />
        </>
      ) : (
        props.children
      )}
    </button>
  );
}
