// Lesson整理自第一次泰語課逐字稿；以男性學習者的說法為主。
lessons.firstClass = {
  name: '今日課程｜初次見面',
  items: [
    ['你好', 'สวัสดีครับ', '薩瓦滴・卡普', 'sà-wàt-dii khráp'],
    ['你好嗎？', 'สบายดีไหมครับ', '薩掰滴・買・卡普', 'sà-baai dii mǎi khráp'],
    ['我很好', 'สบายดีครับ', '薩掰滴・卡普', 'sà-baai dii khráp'],
    ['我叫黃', 'ผมชื่อหวงครับ', '澎・秋・黃・卡普', 'phǒm chʉ̂ʉ Hǔang khráp'],
    ['你叫什麼名字？', 'คุณชื่ออะไรครับ', '坤・秋・阿萊・卡普', 'khun chʉ̂ʉ à-rai khráp'],
    ['我來自台灣', 'ผมมาจากไต้หวันครับ', '澎・瑪加・代灣・卡普', 'phǒm maa jàak tâi-wǎn khráp'],
    ['我來自台中', 'ผมมาจากไถจงครับ', '澎・瑪加・台中・卡普', 'phǒm maa jàak Thái-chung khráp'],
    ['你來自哪裡？', 'คุณมาจากที่ไหนครับ', '坤・瑪加・替奶・卡普', 'khun maa jàak thîi-nǎi khráp'],
    ['很高興認識你', 'ยินดีที่ได้รู้จักครับ', '銀滴・替代・魯加・卡普', 'yin-dii thîi dâi rúu-jàk khráp'],
    ['你做什麼工作？', 'คุณทำงานอะไรครับ', '坤・探安・阿萊・卡普', 'khun tham-ngaan à-rai khráp'],
    ['我是工程師', 'ผมเป็นวิศวกรครับ', '澎・邊・威薩瓦功・卡普', 'phǒm pen wít-sà-wá-gɔɔn khráp'],
    ['我是學生', 'ผมเป็นนักเรียนครับ', '澎・邊・納廉・卡普', 'phǒm pen nák-rian khráp'],
    ['你喜歡泰國嗎？', 'คุณชอบประเทศไทยไหมครับ', '坤・秋普・巴貼泰・買・卡普', 'khun chɔ̂ɔp prà-thêet thai mǎi khráp'],
    ['我喜歡泰國', 'ผมชอบประเทศไทยครับ', '澎・秋普・巴貼泰・卡普', 'phǒm chɔ̂ɔp prà-thêet thai khráp'],
    ['我不喜歡泰國', 'ผมไม่ชอบประเทศไทยครับ', '澎・賣秋普・巴貼泰・卡普', 'phǒm mâi chɔ̂ɔp prà-thêet thai khráp'],
    ['你喜歡泰國菜嗎？', 'คุณชอบอาหารไทยไหมครับ', '坤・秋普・阿寒泰・買・卡普', 'khun chɔ̂ɔp aa-hǎan thai mǎi khráp'],
    ['我喜歡泰國菜', 'ผมชอบอาหารไทยครับ', '澎・秋普・阿寒泰・卡普', 'phǒm chɔ̂ɔp aa-hǎan thai khráp'],
    ['謝謝', 'ขอบคุณครับ', '擴坤・卡普', 'khɔ̀ɔp-khun khráp']
  ]
};

const firstClassButton = document.createElement('button');
firstClassButton.className = 'topic';
firstClassButton.dataset.topic = 'firstClass';
firstClassButton.textContent = '今日課程';
document.querySelector('.topics').prepend(firstClassButton);

firstClassButton.addEventListener('click', () => {
  topic = 'firstClass';
  index = 0;
  document.querySelectorAll('.topic').forEach(item => item.classList.toggle('active', item === firstClassButton));
  render();
  $('dots').style.display = 'none';
});
