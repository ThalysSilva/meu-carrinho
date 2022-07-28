import React, { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode | (() => void);
  value: any;
};

export function When({ children, value }: Props) {
  if (value) return (typeof children === "function" ? children() : children) as ReactElement;
  return <React.Fragment />;
}
