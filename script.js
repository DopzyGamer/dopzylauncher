(() => {
  'use strict';
  const config = window.DOPZY_DOWNLOADS || {};
  const toast = document.getElementById('toast');
  let toastTimeout;

  function inform(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
  }

  function setup(platform, elementId, label) {
    const el = document.getElementById(elementId);
    const url = typeof config[platform] === 'string' ? config[platform].trim() : '';
    if (/^https:\/\/[^\s]+$/i.test(url)) {
      el.href = url;
      el.setAttribute('rel', 'noopener noreferrer');
      return true;
    }
    el.addEventListener('click', event => {
      event.preventDefault();
      inform(`O download para ${label} ainda não foi configurado.`);
    });
    return false;
  }

  const pcReady = setup('windows', 'download-pc', 'Windows');
  const androidReady = setup('android', 'download-android', 'Android');
  const pcVer = config.windowsVersion?.trim();
  const androidVer = config.androidVersion?.trim();
  document.getElementById('pc-version').textContent = pcVer ? `Versão ${pcVer}` : 'Windows x64';
  document.getElementById('android-version').textContent = androidVer ? `Versão ${androidVer}` : 'Android • APK';
  document.getElementById('year').textContent = new Date().getFullYear();
})();
