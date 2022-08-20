import {PropsWithChildren} from 'react';

export const Heading = ({children}: PropsWithChildren) => {
  return <h1 className="text-white text-6xl font-bold">{children}</h1>;
};
