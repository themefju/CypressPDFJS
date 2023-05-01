/// <reference types="cypress" />
import { readPdf } from './utils/pdf';

const file = Cypress.env('pathToPdf');

it('read PDF', () => {
  readPdf(file).then((txt) => {
    expect(txt).to.have.length.greaterThan(0);
  });
});
