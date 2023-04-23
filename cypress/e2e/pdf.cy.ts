/// <reference types="cypress" />
import { readPdf } from './utils/pdf';

const file = Cypress.env('pathToPdf');

it('read PDF', () => {
  const pdfText = readPdf(file);
  expect(pdfText).to.have.length.greaterThan(0);
});
