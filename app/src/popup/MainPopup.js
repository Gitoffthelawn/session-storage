import * as logic from './MainPopupLogic';

browser.tabs.executeScript({ file: "../content_scripts/KeepYourSession.js" })
    .then(logic.listenForClicks(document, browser))
    .catch(logic.reportExecuteScriptError(document, error));
