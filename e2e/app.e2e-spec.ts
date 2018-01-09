import { AppPage } from './app.po';
import {element, by, browser} from 'protractor';


describe('captivators-hackathon App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('Hit Mock Service and Get Result', () => {
    element(by.buttonText('Mock Data')).click();
    const Value = element(by.tagName('pre')).getText();
    expect(Value).toEqual('Mock Data : MockData Received');
  });
});
