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

const nightMarketScript = [
  { speaker: '店員', role: 'partner', zh: '你好，想要什麼？', thai: 'สวัสดีค่ะ ต้องการอะไรคะ', phonetic: 'sà-wàt-dii khâ, tɔ̂ng-gaan à-rai khá' },
  { speaker: '你', role: 'me', zh: '請問有甜糯米粽嗎？', thai: 'มีข้าวต้มมัดไหมครับ', phonetic: 'mii khâao-tôm-mát mǎi khráp' },
  { speaker: '店員', role: 'partner', zh: '沒有。', thai: 'ไม่มีค่ะ', phonetic: 'mâi mii khâ' },
  { speaker: '你', role: 'me', zh: '請問有香蕉嗎？', thai: 'มีกล้วยไหมครับ', phonetic: 'mii glûai mǎi khráp' },
  { speaker: '店員', role: 'partner', zh: '有，需要多少？', thai: 'มีค่ะ ต้องการเท่าไหร่คะ', phonetic: 'mii khâ, tɔ̂ng-gaan thâo-rài khá' },
  { speaker: '你', role: 'me', zh: '我要一串。', thai: 'ผมต้องการหนึ่งหวีครับ', phonetic: 'phǒm tɔ̂ng-gaan nʉ̀ng wǐi khráp' },
  { speaker: '店員', role: 'partner', zh: '一串香蕉90泰銖，要嗎？', thai: 'กล้วยหนึ่งหวีเก้าสิบบาทค่ะ รับไหมคะ', phonetic: 'glûai nʉ̀ng wǐi gâo-sìp bàat khâ, ráp mǎi khá' },
  { speaker: '你', role: 'me', zh: '要。', thai: 'รับครับ', phonetic: 'ráp khráp' },
  { speaker: '店員', role: 'partner', zh: '還需要其他東西嗎？', thai: 'ต้องการอะไรอีกไหมคะ', phonetic: 'tɔ̂ng-gaan à-rai ìik mǎi khá' },
  { speaker: '你', role: 'me', zh: '我要一杯泰式奶茶。', thai: 'ผมต้องการชานมเย็นครับ', phonetic: 'phǒm tɔ̂ng-gaan chaa-nom-yen khráp' },
  { speaker: '店員', role: 'partner', zh: '想要什麼甜度？', thai: 'ต้องการหวานระดับไหนคะ', phonetic: 'tɔ̂ng-gaan wǎan rá-dàp nǎi khá' },
  { speaker: '你', role: 'me', zh: '少甜。', thai: 'หวานน้อยครับ', phonetic: 'wǎan nɔ́ɔi khráp' },
  { speaker: '店員', role: 'partner', zh: '總共140泰銖。', thai: 'ทั้งหมดหนึ่งร้อยสี่สิบบาทค่ะ', phonetic: 'tháng-mòt nʉ̀ng-rɔ́ɔi sìi-sìp bàat khâ' },
  { speaker: '店員', role: 'partner', zh: '要付現金還是信用卡？', thai: 'ต้องการจ่ายเงินสดหรือบัตรเครดิตคะ', phonetic: 'tɔ̂ng-gaan jàai ngoen-sòt rʉ̌ʉ bàt khree-dìt khá' },
  { speaker: '你', role: 'me', zh: '付現。這是200泰銖。', thai: 'เงินสดครับ นี่สองร้อยบาทครับ', phonetic: 'ngoen-sòt khráp, nîi sɔ̌ɔng-rɔ́ɔi bàat khráp' },
  { speaker: '店員', role: 'partner', zh: '這是找您的40泰銖。', thai: 'นี่เงินทอนของคุณค่ะ สี่สิบบาท', phonetic: 'nîi ngoen-thɔɔn khɔ̌ɔng khun khâ, sìi-sìp bàat' },
  { speaker: '你', role: 'me', zh: '找零不夠，還差20泰銖。', thai: 'เงินทอนไม่ครบครับ ขาดอีกยี่สิบบาท', phonetic: 'ngoen-thɔɔn mâi khróp khráp, khàat ìik yîi-sìp bàat' },
  { speaker: '店員', role: 'partner', zh: '不好意思，這是另外20泰銖。', thai: 'ขอโทษค่ะ นี่อีกยี่สิบบาทค่ะ', phonetic: 'khɔ̌ɔ-thôot khâ, nîi ìik yîi-sìp bàat khâ' }
];

const scenarioButton = document.createElement('button');
scenarioButton.className = 'topic scenario-topic';
scenarioButton.dataset.scenario = 'first-meeting';
scenarioButton.textContent = '初次見面';
document.querySelector('.topics').prepend(scenarioButton);

const marketButton = document.createElement('button');
marketButton.className = 'topic scenario-topic';
marketButton.dataset.scenario = 'night-market';
marketButton.textContent = '夜市點餐';
scenarioButton.after(marketButton);

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
    <div class="script-columns" aria-hidden="true">
      <span></span><strong>泰文課文</strong><strong>中文對照</strong>
    </div>
    ${firstMeetingScript.map((line, number) => `
      <article class="script-line ${line.role}">
        <div class="line-number">${number + 1}</div>
        <div class="thai-cell">
          <div class="thai-line">
            <span class="speaker">${line.speaker}：</span>
            <span class="script-thai">${line.thai}</span>
            <button class="line-audio" type="button" data-line="${number}" aria-label="播放：${line.zh}"><span class="audio-icon">🔊</span><span class="audio-text">播放</span></button>
          </div>
          <div class="script-phonetic">${line.phonetic}</div>
        </div>
        <div class="meaning"><span class="translation-speaker">${line.speaker}：</span>${line.zh}</div>
      </article>`).join('')}
  </div>`;
document.querySelector('.stage').appendChild(scenarioView);

const marketView = document.createElement('section');
marketView.className = 'scenario-view';
marketView.hidden = true;
marketView.setAttribute('aria-live', 'polite');
marketView.innerHTML = `
  <header class="scenario-head">
    <div class="scenario-kicker">生活會話 · 情境 2</div>
    <h2>泰國夜市買香蕉與奶茶</h2>
    <p>甜糯米粽賣完了，你改買一串香蕉和少甜泰式奶茶；結帳時發現店員少找20泰銖。</p>
  </header>
  <div class="script-sheet" aria-label="夜市點餐完整對話">
    <div class="script-columns" aria-hidden="true"><span></span><strong>泰文課文</strong><strong>中文對照</strong></div>
    ${nightMarketScript.map((line, number) => `
      <article class="script-line ${line.role}">
        <div class="line-number">${number + 1}</div>
        <div class="thai-cell">
          <div class="thai-line">
            <span class="speaker">${line.speaker}：</span>
            <span class="script-thai">${line.thai}</span>
            <button class="line-audio" type="button" data-line="${number}" aria-label="播放：${line.zh}"><span class="audio-icon">🔊</span><span class="audio-text">播放</span></button>
          </div>
          <div class="script-phonetic">${line.phonetic}</div>
        </div>
        <div class="meaning"><span class="translation-speaker">${line.speaker}：</span>${line.zh}</div>
      </article>`).join('')}
  </div>`;
document.querySelector('.stage').appendChild(marketView);

function showScenario() {
  document.querySelector('.stage').classList.add('scenario-mode');
  normalStageElements.forEach(element => { element.hidden = true; });
  scenarioView.hidden = false;
  marketView.hidden = true;
  document.querySelectorAll('.topic').forEach(item => item.classList.toggle('active', item === scenarioButton));
  $('count').textContent = `${firstMeetingScript.length} 句對話`;
}

function showMarketScenario() {
  document.querySelector('.stage').classList.add('scenario-mode');
  normalStageElements.forEach(element => { element.hidden = true; });
  scenarioView.hidden = true;
  marketView.hidden = false;
  document.querySelectorAll('.topic').forEach(item => item.classList.toggle('active', item === marketButton));
  $('count').textContent = `${nightMarketScript.length} 句對話`;
}

function showCards() {
  document.querySelector('.stage').classList.remove('scenario-mode');
  normalStageElements.forEach(element => { element.hidden = false; });
  scenarioView.hidden = true;
  marketView.hidden = true;
}

scenarioButton.addEventListener('click', event => {
  event.stopImmediatePropagation();
  showScenario();
});
marketButton.addEventListener('click', event => {
  event.stopImmediatePropagation();
  showMarketScenario();
});
document.querySelector('.topics').addEventListener('click', event => {
  const button = event.target.closest('.topic');
  if (button && button !== scenarioButton && button !== marketButton) showCards();
});

document.addEventListener('keydown', event => {
  if (!document.querySelector('.stage').classList.contains('scenario-mode')) return;
  if (['ArrowLeft', 'ArrowRight', ' ', 'Enter'].includes(event.key)) event.stopPropagation();
}, true);

function bindScenarioAudio(view, script) {
view.addEventListener('click', async event => {
  const button = event.target.closest('.line-audio');
  if (!button) return;
  const line = script[Number(button.dataset.line)];
  document.querySelectorAll('.line-audio').forEach(item => {
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
}

bindScenarioAudio(scenarioView, firstMeetingScript);
bindScenarioAudio(marketView, nightMarketScript);

const scenarioStyle = document.createElement('style');
scenarioStyle.textContent = `
  .scenario-view{display:block}.scenario-view[hidden]{display:none}
  .stage.scenario-mode{display:block;min-height:0}
  .stage.scenario-mode>.progress,.stage.scenario-mode>#topicName,.stage.scenario-mode>#card,.stage.scenario-mode>.controls,.stage.scenario-mode>#status,.stage.scenario-mode>#dots{display:none!important}
  .stage.scenario-mode>.scenario-view{display:block!important;width:100%}
  .scenario-head{padding:2px 0 22px}.scenario-kicker{color:var(--teal);font-size:.78rem;font-weight:900;letter-spacing:.08em}
  .scenario-head h2{margin:8px 0 7px;font-size:clamp(1.55rem,4vw,2.2rem)}.scenario-head p{max-width:680px;margin:0;color:var(--muted);line-height:1.7}
  .script-sheet{border-top:2px solid var(--ink);border-bottom:2px solid var(--ink)}
  .script-columns{display:grid;grid-template-columns:34px minmax(0,1.35fr) minmax(180px,.8fr);gap:18px;padding:10px 4px;background:#f5ede6;color:var(--muted);font-size:.78rem;letter-spacing:.05em}
  .script-line{display:grid;grid-template-columns:34px minmax(0,1.35fr) minmax(180px,.8fr);gap:18px;align-items:start;padding:17px 4px;border-bottom:1px solid var(--line)}
  .script-line:last-child{border-bottom:0}.line-number{width:23px;height:23px;border-radius:50%;display:grid;place-items:center;background:var(--orange);color:#fff;font-size:.72rem;font-weight:900;font-variant-numeric:tabular-nums}
  .thai-cell{min-width:0}.thai-line{display:flex;align-items:flex-start;gap:7px;min-width:0}.speaker{flex:0 0 auto;padding-top:3px;font-size:.8rem;font-weight:900;color:var(--muted)}
  .script-line.me .speaker{color:#c43e22}.script-thai{min-width:0;flex:1;color:var(--teal);font-size:1.25rem;font-weight:850;line-height:1.45}
  .script-phonetic{margin:4px 0 0;color:var(--muted);font-size:.82rem;overflow-wrap:anywhere}.meaning{padding-top:3px;line-height:1.55;font-weight:800}.translation-speaker{display:none;color:var(--muted);font-size:.78rem}
  .line-audio{flex:0 0 auto;min-width:52px;min-height:36px;border:0;border-radius:10px;background:#f5ede6;color:var(--ink);cursor:pointer;font-weight:850;display:flex;align-items:center;justify-content:center;gap:3px;padding:5px 8px}
  .audio-icon{font-size:.9rem}.audio-text{font-size:.68rem}.line-audio:hover{background:#eee1d6}.line-audio.playing{background:var(--orange);color:#fff}
  @media(max-width:720px){.scenario-head{padding-top:0}.scenario-head p{font-size:.88rem}.script-columns{display:none}.script-line{grid-template-columns:28px minmax(0,1fr);gap:9px;padding:15px 1px}.line-number{width:22px;height:22px}.thai-cell{grid-column:2}.meaning{grid-column:2;padding:7px 0 0;border-top:1px dashed var(--line);font-size:.9rem}.translation-speaker{display:inline}.script-thai{font-size:1.1rem}.script-phonetic{font-size:.76rem}.line-audio{min-width:42px;min-height:38px;padding:4px}.audio-text{display:none}}
  @media(max-width:390px){.scenario-head p{display:none}.thai-line{gap:4px}.speaker{font-size:.72rem}.script-thai{font-size:1.02rem}.line-audio{min-width:38px}}
`;
document.head.appendChild(scenarioStyle);
