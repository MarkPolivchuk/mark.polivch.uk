import {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  color?: 'white' | 'black';
  className?: string;
}>;

export const Subheading = ({children, color = 'white'}: Props) => {
  return <p className={`text-${color} text-2xl my-4`}>{children}</p>;
};
