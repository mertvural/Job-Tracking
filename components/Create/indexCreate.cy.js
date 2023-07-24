import React from 'react';
import Create from './index';
import {Provider} from 'react-redux';
import {store} from '@/stores';

describe('<Create />', () => {
  beforeEach(() => {
    cy.mount(
        <Provider store={store}>
          <Create />
        </Provider>,
    );
  });
  it('Create butonuna basınca job name ve Priority sıfırlanıyor mu?', () => {
    cy.get('[data-test-id="button-create"]').click();
    cy.get('[data-test-id="input-job-name"]').should('have.value', '');
    cy.get('[data-test-id="select-priority"]').should('have.value', '');
  });
});
