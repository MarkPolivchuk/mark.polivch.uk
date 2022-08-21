import {PropsWithChildren} from 'react';
import cx from 'classnames';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = PropsWithChildren<{
  tag?: Tag;
  color?: 'white' | 'black';
  className?: string;
}>;

export const Heading = ({
  children,
  tag = 'h1',
  color = 'white',
  className,
}: Props) => {
  const Tag = tag;

  const map: {[key in Tag]: string} = {
    h1: 'text-6xl font-bold',
    h2: 'text-5xl font-bold',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
  };

  const font = map[tag];
  const textColor = `text-${color}`;
  return <Tag className={cx(textColor, font, className)}>{children}</Tag>;
};
