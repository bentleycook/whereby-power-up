import localizationSettings from './modules/localizationSettings';

const t = window.TrelloPowerUp.iframe({
  localization: localizationSettings,
});

const inputEl = document.getElementById('roomName');

document.getElementById('update').addEventListener('click', e => {
  e.preventDefault();

  const roomName = inputEl.value;

  if (roomName === '') {
    // You may want to do some other input validation here
    inputEl.classList = 'error';
  } else {
    inputEl.classList = '';
    // Store the input's value in Power-Up storage
    t.set('board', 'shared', 'roomName', roomName).then(() => {
      // Let the user know that they room name has been set
      t.alert({
        message: `${t.localizeKey('set-room-name')} ${roomName}`,
        display: 'success',
      });
      t.closePopup();
    });
  }
});

// Remove error class on keyup
inputEl.addEventListener('keyup', () => {
  inputEl.classList = '';
});

t.render(() => {
  t.localizeNode(document.body);

  // Get the room name out of storage.
  t.get('board', 'shared', 'roomName').then(roomName => {
    if (roomName) {
      inputEl.value = roomName;
    }
    inputEl.placeholder = t.localizeKey('new-room-name');
  });

  // ensure that our popup is properly sized to fit our content
  t.sizeTo(document.body);
});
