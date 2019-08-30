import localizationSettings from './modules/localizationSettings';

const showSettings = t =>
  t.popup({
    title: t.localizeKey('whereby-settings'),
    url: './settings.html',
  });

const getBoardButton = t => {
  return t.get('board', 'shared', 'roomName').then(roomName => {
    const button = {
      icon: './whereby-icon.svg',
      text: t.localizeKey('whereby'),
    };

    if (roomName) {
      const baseUrl = 'https://whereby.com/';
      button.url = `${baseUrl}${roomName}`;
    } else {
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
