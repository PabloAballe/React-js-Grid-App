import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

import GridItem from '../components/GridItem';
import Grids from '../components/Grids';
import Loading from '../components/Loading';
import ThemeSwitcher from '../components/ThemeSwitcher';
import UsersList from '../pages/UsersList';
import App from '../App';

it('renders GridItem without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridItem />, div);
});

it('renders Loading without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading />, div);
});

it('renders ThemeSwitcher without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemeSwitcher />, div);
});

it('renders UsersList without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UsersList />, div);
});

it('renders App without crashing ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
