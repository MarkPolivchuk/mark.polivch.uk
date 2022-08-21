import {PropsWithChildren} from 'react';
import cx from 'classnames';

type Props = PropsWithChildren<{
  color: string;
}>;

export const Section = ({children, color}: Props) => {
  return (
    <section
      className={cx(
        'min-h-screen p-4',
        'flex flex-1 flex-col justify-center items-center',
        'text-center',
        color,
      )}
    >
      {children}
    </section>
  );
};
