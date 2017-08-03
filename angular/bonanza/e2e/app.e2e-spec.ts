import { BonanzaPage } from './app.po';

describe('bonanza App', () => {
  let page: BonanzaPage;

  beforeEach(() => {
    page = new BonanzaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
