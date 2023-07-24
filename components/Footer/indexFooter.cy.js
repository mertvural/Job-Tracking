import React from 'react';
import Footer from './index';
import {Provider} from 'react-redux';
import {store} from '@/stores';

describe('<Footer />', () => {
  it('render oldu mu?', () => {
    cy.mount(
        <Provider store={store}>
          <Footer />
        </Provider>,
    );
  });
});
