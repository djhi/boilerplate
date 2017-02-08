import { By } from 'selenium-webdriver';
import driver from '../chromeDriver';

describe('Home page', function homeTests() {
    this.timeout(15000);

    it('should display the title', async () => {
        await driver.get('http://localhost:8100/');
        await driver.findElement(By.css('.title'));
    });
});
