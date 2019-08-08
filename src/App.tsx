import { hot } from 'react-hot-loader/root';
import React, { FunctionComponent } from 'react';
import Index from '@pages/index/Index';

const App: FunctionComponent<IProps> = ({}) => {
  return (
    <>
      <Index />
    </>
  );
};

interface IProps {}

export default hot(App);
