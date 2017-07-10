import { OrderCartPage } from './app.po';

describe('order-cart App', () => {
  let page: OrderCartPage;

  beforeEach(() => {
    page = new OrderCartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
