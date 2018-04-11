import React from 'react';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers/index';
import Header from './src/components/header';
import MoviesList from './src/components/MoviesList';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
            <Header headerText={'Movies'} />
            <MoviesList/>
        </Fragment>
    </Provider>
    );
  }
}
