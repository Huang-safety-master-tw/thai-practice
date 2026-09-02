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
    <div class="scenario-kicker">旅行會話 · 情境 1</div>
    <h2>第一次認識泰國朋友</h2>
    <p>你在清邁旅行時認識一位泰國朋友。從打招呼開始，聊到姓名、家鄉、工作和喜歡的食物。</p>
  </header>
  <div class="script-sheet" aria-label="初次見面完整對話">
    ${firstMeetingScript.map((line, number) => `
      <article class="script-line ${line.role}">
        <div class="speaker"><span>${line.speaker}</span></div>
        <div class="speech">
          <div class="speech-top"><span class="meaning">${line.zh}</span><span class="line-number">${String(number + 1).padStart(2, '0')}</span></div>
          <div class="script-thai">${line.thai}</div>
          <div class="script-phonetic">${line.phonetic}</div>
        </div>
        <button class="line-audio" type="button" data-line="${number}" aria-label="播放：${line.zh}"><span class="audio-icon">🔊</span><span class="audio-text">播放</span></button>
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
    item.querySelector('.audio-text').textContent = '播放';
  });
  button.disabled = true;
  button.classList.add('playing');
  button.querySelector('.audio-text').textContent = '播放中';
  try {
    if (audio) audio.pause();
    audio = new Audio(TTS_SERVICE + '/speak?text=' + encodeURIComponent(line.thai));
    audio.onended = () => {
      button.disabled = false;
      button.classList.remove('playing');
      button.querySelector('.audio-text').textContent = '播放';
    };
    audio.onerror = () => {
      button.disabled = false;
      button.classList.remove('playing');
      button.querySelector('.audio-text').textContent = '重試';
    };
    await audio.play();
  } catch (error) {
    button.disabled = false;
    button.classList.remove('playing');
    button.querySelector('.audio-text').textContent = '重試';
  }
});

const scenarioStyle = document.createElement('style');
scenarioStyle.textContent = `
  .scenario-view{display:block}.scenario-view[hidden]{display:none}
  .scenario-head{padding:2px 0 22px}.scenario-kicker{color:var(--teal);font-size:.78rem;font-weight:900;letter-spacing:.08em}
  .scenario-head h2{margin:8px 0 7px;font-size:clamp(1.55rem,4vw,2.2rem)}.scenario-head p{max-width:680px;margin:0;color:var(--muted);line-height:1.7}
  .script-sheet{border-top:2px solid var(--ink);border-bottom:2px solid var(--ink)}
  .script-line{display:grid;grid-template-columns:82px minmax(0,1fr) 64px;gap:16px;align-items:center;padding:18px 2px;border-bottom:1px solid var(--line)}
  .script-line:last-child{border-bottom:0}.speaker{font-size:.78rem;font-weight:900;color:var(--muted);text-align:left}.speaker span{display:inline-block}
  .script-line.me .speaker{color:#c43e22}.script-line.me{box-shadow:inset 3px 0 0 #ee604066}.script-line.partner{box-shadow:inset 3px 0 0 #127d7444}
  .speech{min-width:0;padding:0 4px}.speech-top{display:flex;justify-content:space-between;gap:12px;align-items:baseline}.meaning{font-weight:900}.line-number{font-size:.7rem;color:#aa9b91;font-variant-numeric:tabular-nums}
  .script-thai{margin-top:5px;color:var(--teal);font-size:1.35rem;font-weight:850;line-height:1.5}.script-phonetic{margin-top:2px;color:var(--muted);font-size:.88rem;overflow-wrap:anywhere}
  .line-audio{min-height:46px;border:0;border-radius:12px;background:#f5ede6;color:var(--ink);cursor:pointer;font-weight:850;display:grid;place-items:center;align-content:center;gap:1px}
  .audio-icon{font-size:1rem}.audio-text{font-size:.68rem}.line-audio:hover{background:#eee1d6}.line-audio.playing{background:var(--orange);color:#fff}
  @media(max-width:720px){.scenario-head{padding-top:0}.scenario-head p{font-size:.88rem}.script-line{grid-template-columns:58px minmax(0,1fr) 46px;gap:8px;padding:15px 0}.speaker{font-size:.72rem;text-align:center}.speech{padding:0}.script-thai{font-size:1.12rem}.script-phonetic{font-size:.78rem}.line-audio{min-height:46px;border-radius:10px}.audio-text{display:none}}
  @media(max-width:390px){.script-line{grid-template-columns:50px minmax(0,1fr) 42px;gap:6px}.scenario-head p{display:none}.meaning{font-size:.88rem}.line-number{display:none}}
`;
document.head.appendChild(scenarioStyle);
