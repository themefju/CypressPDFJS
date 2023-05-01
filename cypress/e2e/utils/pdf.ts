/// <reference types="cypress" />

export function readPdf(pathToPdf: string) {
  return cy.task('readPdf', pathToPdf).then((text) => {
    return text as string;
  });
}
