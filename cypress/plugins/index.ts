/// <reference types="cypress" />

export default (
  on: Cypress.PluginEvents,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config: Cypress.PluginConfigOptions
): void => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // Mac/Linux
      //launchOptions.args.push('--use-file-for-fake-video-capture=cypress/fixtures/my-video.y4m')

      // Windows
      // launchOptions.args.push('--use-file-for-fake-video-capture=c:\\path\\to\\video\\my-video.y4m')
      console.log(' ########### Executed on before:browser:launch');
    }

    return launchOptions;
  });
};
