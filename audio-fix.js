const TTS_SERVICE = 'https://thai-practice-tts-804587106655.asia-east1.run.app';

function bundledAudioNumber() {
  const keys = Object.keys(lessons);
  const topicPosition = keys.indexOf(topic);
  return keys.slice(0, topicPosition)
    .reduce((sum, key) => sum + lessons[key].items.length, 0) + index + 1;
}

async function playBundledFallback() {
  const number = String(bundledAudioNumber()).padStart(2, '0');
  audio = new Audio('audio/' + number + '.mp3');
  audio.onended = reset;
  await audio.play();
}

async function playOnlineThaiAudio() {
  const item = lessons[topic].items[index];
  const button = $('speak');
  button.disabled = true;
  button.textContent = '正在播放…';
  $('status').textContent = '正在播放線上泰語發音…';
  try {
    if (audio) audio.pause();
    audio = new Audio(TTS_SERVICE + '/speak?text=' + encodeURIComponent(item[1]));
    audio.onended = reset;
    audio.onerror = () => {};
    await audio.play();
    $('status').textContent = '跟著念兩次：' + item[2];
  } catch (onlineError) {
    try {
      $('status').textContent = '線上服務暫時無法使用，改播備援音檔';
      await playBundledFallback();
    } catch (fallbackError) {
      reset();
      $('status').textContent = '無法播放，請確認網路後重新整理頁面';
    }
  }
}

$('speak').onclick = playOnlineThaiAudio;
$('card').onclick = playOnlineThaiAudio;
