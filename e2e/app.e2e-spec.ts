import { LandgramPage } from './app.po';

describe('landgram App', () => {
  let page: LandgramPage;

  beforeEach(() => {
    page = new LandgramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
