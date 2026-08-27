function bundledAudioNumber() {
  const keys = Object.keys(lessons);
  const topicPosition = keys.indexOf(topic);
  return keys.slice(0, topicPosition)
    .reduce((sum, key) => sum + lessons[key].items.length, 0) + index + 1;
}

async function playBundledThaiAudio() {
  const item = lessons[topic].items[index];
  const button = $('speak');
  button.disabled = true;
  button.textContent = '正在播放…';
  $('status').textContent = '跟著念兩次：' + item[2];
  try {
    if (audio) audio.pause();
    const number = String(bundledAudioNumber()).padStart(2, '0');
    audio = new Audio('audio/' + number + '.mp3');
    audio.onended = reset;
    audio.onerror = bundledAudioError;
    await audio.play();
  } catch (error) {
    bundledAudioError();
  }
}

function bundledAudioError() {
  reset();
  $('status').textContent = '無法播放音檔，請重新整理頁面後再試';
}

$('speak').onclick = playBundledThaiAudio;
$('card').onclick = playBundledThaiAudio;
