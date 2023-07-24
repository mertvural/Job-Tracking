import React from 'react';
import Header from './index';
import {Provider} from 'react-redux';
import {store} from '@/stores';

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(
        <Provider store={store}>
          <Header />
        </Provider>,
    );
  });

  it('logo nun path i dogru mu?', () => {
    cy.get('[data-test-id="logo"]')
        .should('have.attr', 'src')
        .should('include', 'logo.png');
  });
});
