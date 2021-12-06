import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    repeatEach: 3,
    use:{
        headless: true,
        // slowMo: 10000, // not a property of fixture
    }
};
export default config;
