import localizationSettings from './modules/localizationSettings';

const showSettings = t =>
  // Open our settings iframe with a localized Title
  t.popup({
    title: t.localizeKey('whereby-settings'),
    url: './settings.html',
  });

const getBoardButton = t => {
  // Get the saved roomName out of Power-Up storage
  return t.get('board', 'shared', 'roomName').then(roomName => {
    const button = {
      icon: './whereby-icon.svg',
      text: t.localizeKey('whereby'),
    };

    if (roomName) {
      const baseUrl = 'https://whereby.com/';
      // Set Board Button's URL to be the room name
      button.url = `${baseUrl}${roomName}`;
    } else {
      // Without room a name, ask the user to set one when they
      // click on the board button.
      button.callback = showSettings;
    }

    return [button];
  });
};

window.TrelloPowerUp.initialize(
  {
    'board-buttons': getBoardButton,
    'show-settings': showSettings,
  },
  {
    localization: localizationSettings,
  }
);
