import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import Index from 'pages/home/Index';

interface Props {}
const App: FC<Props> = () => {
  return (
    <>
      <Index />
    </>
  );
};


export default hot(App);
