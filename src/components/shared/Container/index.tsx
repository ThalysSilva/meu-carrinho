import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={
        className ? className : `flex min-h-screen flex-1 bg-[#d1d8e5] items-center justify-center min-w-[370px]`
      }
    >
      {children}
    </div>
  );
}
