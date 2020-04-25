import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from 'pages/Home';
import Course from 'pages/Course'
import PageHeader from 'components/PageHeader/index';
import './reset.less'

interface Props {}
const App: FC<Props> = () => {
  return (
    <div className='app'>
      <div className='header'>
        <PageHeader/>
      </div>
      <div className='content'>
        <BrowserRouter basename='/'>
          <Route exact path='/'  component={Home}></Route>
          <Route path='course' component={Course}></Route>
        </BrowserRouter>
      </div>
    </div>
  );
};


export default hot(App);
