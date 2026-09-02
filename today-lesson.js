const firstMeetingScript = [
  { speaker: '泰國朋友', role: 'partner', zh: '你好', thai: 'สวัสดีค่ะ', phonetic: 'sà-wàt-dii khâ' },
  { speaker: '你', role: 'me', zh: '你好', thai: 'สวัสดีครับ', phonetic: 'sà-wàt-dii khráp' },
  { speaker: '泰國朋友', role: 'partner', zh: '你好嗎？', thai: 'สบายดีไหมคะ', phonetic: 'sà-baai dii mǎi khá' },
  { speaker: '你', role: 'me', zh: '我很好', thai: 'สบายดีครับ', phonetic: 'sà-baai dii khráp' },
  { speaker: '泰國朋友', role: 'partner', zh: '你叫什麼名字？', thai: 'คุณชื่ออะไรคะ', phonetic: 'khun chʉ̂ʉ à-rai khá' },
  { speaker: '你', role: 'me', zh: '我叫黃', thai: 'ผมชื่อหวงครับ', phonetic: 'phǒm chʉ̂ʉ Hǔang khráp' },
  { speaker: '泰國朋友', role: 'partner', zh: '你來自哪裡？', thai: 'คุณมาจากที่ไหนคะ', phonetic: 'khun maa jàak thîi-nǎi khá' },
  { speaker: '你', role: 'me', zh: '我來自台灣', thai: 'ผมมาจากไต้หวันครับ', phonetic: 'phǒm maa jàak tâi-wǎn khráp' },
  { speaker: '泰國朋友', role: 'partner', zh: '你做什麼工作？', thai: 'คุณทำงานอะไรคะ', phonetic: 'khun tham-ngaan à-rai khá' },
  { speaker: '你', role: 'me', zh: '我是工程師', thai: 'ผมเป็นวิศวกรครับ', phonetic: 'phǒm pen wít-sà-wá-gɔɔn khráp' },
  { speaker: '泰國朋友', role: 'partner', zh: '你喜歡泰國菜嗎？', thai: 'คุณชอบอาหารไทยไหมคะ', phonetic: 'khun chɔ̂ɔp aa-hǎan thai mǎi khá' },
  { speaker: '你', role: 'me', zh: '我喜歡泰國菜', thai: 'ผมชอบอาหารไทยครับ', phonetic: 'phǒm chɔ̂ɔp aa-hǎan thai khráp' },
  { speaker: '你', role: 'me', zh: '很高興認識你', thai: 'ยินดีที่ได้รู้จักครับ', phonetic: 'yin-dii thîi dâi rúu-jàk khráp' },
  { speaker: '泰國朋友', role: 'partner', zh: '我也很高興認識你', thai: 'ยินดีที่ได้รู้จักเช่นกันค่ะ', phonetic: 'yin-dii thîi dâi rúu-jàk chên-gan khâ' }
];

const scenarioButton = document.createElement('button');
scenarioButton.className = 'topic scenario-topic';
scenarioButton.dataset.scenario = 'first-meeting';
scenarioButton.textContent = '初次見面';
document.querySelector('.topics').prepend(scenarioButton);

const normalStageElements = ['.progress', '#topicName', '#card', '.controls', '#status', '#dots']
  .map(selector => document.querySelector(selector));

const scenarioView = document.createElement('section');
scenarioView.className = 'scenario-view';
scenarioView.hidden = true;
scenarioView.setAttribute('aria-live', 'polite');
scenarioView.innerHTML = `
  <header class="scenario-head">
    <span class="scenario-label">情境一</span>
    <h2>第一次認識泰國朋友</h2>
    <p>你在清邁旅行時認識一位泰國朋友。從打招呼開始，聊到姓名、家鄉、工作和喜歡的食物。</p>
  </header>
  <div class="script-list">
    ${firstMeetingScript.map((line, number) => `
      <article class="script-line ${line.role}">
        <div class="speaker">${line.speaker}</div>
        <div class="speech">
          <div class="speech-top"><span class="meaning">${line.zh}</span><span class="line-number">${number + 1}</span></div>
          <div class="script-thai">${line.thai}</div>
          <div class="script-phonetic">${line.phonetic}</div>
        </div>
        <button class="line-audio" type="button" data-line="${number}" aria-label="播放：${line.zh}">🔊<span>播放</span></button>
      </article>`).join('')}
  </div>`;
document.querySelector('.stage').appendChild(scenarioView);

function showScenario() {
  normalStageElements.forEach(element => { element.hidden = true; });
  scenarioView.hidden = false;
  document.querySelectorAll('.topic').forEach(item => item.classList.toggle('active', item === scenarioButton));
  $('count').textContent = `${firstMeetingScript.length} 句對話`;
}

function showCards() {
  normalStageElements.forEach(element => { element.hidden = false; });
  scenarioView.hidden = true;
}

scenarioButton.addEventListener('click', showScenario);
document.querySelector('.topics').addEventListener('click', event => {
  const button = event.target.closest('.topic');
  if (button && button !== scenarioButton) showCards();
});

scenarioView.addEventListener('click', async event => {
  const button = event.target.closest('.line-audio');
  if (!button) return;
  const line = firstMeetingScript[Number(button.dataset.line)];
  scenarioView.querySelectorAll('.line-audio').forEach(item => {
    item.disabled = false;
    item.classList.remove('playing');
    item.querySelector('span').textContent = '播放';
  });
  button.disabled = true;
  button.classList.add('playing');
  button.querySelector('span').textContent = '播放中';
  try {
    if (audio) audio.pause();
    audio = new Audio(TTS_SERVICE + '/speak?text=' + encodeURIComponent(line.thai));
    audio.onended = () => {
      button.disabled = false;
      button.classList.remove('playing');
      button.querySelector('span').textContent = '播放';
    };
    audio.onerror = () => {
      button.disabled = false;
      button.classList.remove('playing');
      button.querySelector('span').textContent = '重試';
    };
    await audio.play();
  } catch (error) {
    button.disabled = false;
    button.classList.remove('playing');
    button.querySelector('span').textContent = '重試';
  }
});

const scenarioStyle = document.createElement('style');
scenarioStyle.textContent = `
  .scenario-view{display:block}.scenario-view[hidden]{display:none}.scenario-head{padding:4px 0 24px;border-bottom:1px solid var(--line)}
  .scenario-label{display:inline-block;color:#c43e22;background:#fff2eb;padding:5px 10px;border-radius:999px;font-size:.78rem;font-weight:900}
  .scenario-head h2{margin:12px 0 8px;font-size:clamp(1.55rem,4vw,2.25rem)}.scenario-head p{margin:0;color:var(--muted);line-height:1.7}
  .script-list{display:grid;gap:14px;padding-top:22px}.script-line{display:grid;grid-template-columns:70px minmax(0,1fr) 72px;gap:12px;align-items:center}
  .speaker{font-size:.8rem;font-weight:900;color:var(--muted);text-align:center}.script-line.me .speaker{color:#c43e22}
  .speech{padding:16px 18px;border-radius:18px;background:#fff;box-shadow:inset 0 0 0 1px var(--line)}.script-line.me .speech{background:#fff3ed}
  .speech-top{display:flex;justify-content:space-between;gap:12px;align-items:center}.meaning{font-weight:900}.line-number{font-size:.72rem;color:#aa9b91}
  .script-thai{margin-top:7px;color:var(--teal);font-size:1.3rem;font-weight:850;line-height:1.5}.script-phonetic{margin-top:3px;color:var(--muted);font-size:.88rem}
  .line-audio{min-height:46px;border:1px solid var(--line);border-radius:14px;background:#fff;color:var(--ink);cursor:pointer;font-weight:850;display:grid;place-items:center;gap:1px;font-size:.9rem}
  .line-audio span{font-size:.7rem}.line-audio.playing{background:var(--orange);border-color:var(--orange);color:#fff}
  @media(max-width:720px){.script-line{grid-template-columns:48px minmax(0,1fr) 54px;gap:7px}.speech{padding:13px 12px}.script-thai{font-size:1.12rem}.line-audio{min-height:50px}.line-audio span{display:none}.scenario-head{padding-top:0}.scenario-head p{font-size:.88rem}}
`;
document.head.appendChild(scenarioStyle);
