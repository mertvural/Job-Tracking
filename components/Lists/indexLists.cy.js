import React from 'react';
import Lists from './index';
import {Provider} from 'react-redux';
import {store} from '@/stores';

describe('<Lists />', () => {
  beforeEach(() => {
    cy.mount(
        <Provider store={store}>
          <Lists />
        </Provider>,
    );
  });

  it('Edit butonuna basınca Modal geliyor mu?', () => {
    cy.get('[data-test-id="button-update"]').eq(0).click();
  });
  it('Silme butonuna basınca Modal geliyor mu?', () => {
    cy.get('[data-test-id="button-delete"]').eq(0).click();
  });
});
