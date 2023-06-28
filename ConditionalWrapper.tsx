import React from 'react';

export type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: (children: JSX.Element | JSX.Element[]) => JSX.Element;
  children: JSX.Element | JSX.Element[];
};

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps): JSX.Element =>
  condition ? wrapper(<>{children}</>) : <>{children}</>;

export default ConditionalWrapper;
