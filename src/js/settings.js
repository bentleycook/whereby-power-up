import localizationSettings from './modules/localizationSettings';

const t = window.TrelloPowerUp.iframe({
  localization: localizationSettings,
});

document.getElementById('update').addEventListener('click', e => {
  e.preventDefault();
  const inputEl = document.getElementById('roomName');
  t.set('board', 'shared', 'roomName', inputEl.value).then(() => {
    t.closePopup();
  });
});

t.render(() => {
  t.localizeNode(document.body);

  // ensure that our popup is properly sized to fit our content
  t.sizeTo(document.body);
});
