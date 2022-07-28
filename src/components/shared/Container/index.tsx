import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={className ? className : `min-h-screen w-auto flex bg-white`}>
      {children}
    </div>
  );
}
