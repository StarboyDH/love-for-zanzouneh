const emojiNumbers = [
    '\u{1F618}',
    '\u{1F60D}',
    '\u{1F917}',
    '\u{2764}',
    '\u{1F970}',
    '\u{1F339}',
  ];
  
  const btn = document.querySelector('.send-love-btn');
  const popUpEmoji = document.querySelector('.pop-up-emoji');
  const emojiCounter1 = document.querySelector('.emoji-1-counter');
  const emojiCounter2 = document.querySelector('.emoji-2-counter');
  const emojiCounter3 = document.querySelector('.emoji-3-counter');
  const emojiCounter4 = document.querySelector('.emoji-4-counter');
  const emojiCounter5 = document.querySelector('.emoji-5-counter');
  const emojiCounter6 = document.querySelector('.emoji-6-counter');
  const iLoveZanzouneh = document.querySelector('.i-love-zanzouneh');
  const plusOne = document.querySelector('.plus-one');
  
  popUpEmoji.innerText =
    emojiNumbers[Math.floor(Math.random() * emojiNumbers.length)];
  
  const emojiCounters = [0, 0, 0, 0, 0, 0];
  btn.addEventListener('click', () => {
    const randomEmoji = Math.floor(Math.random() * emojiNumbers.length);
    const myEmoji = emojiNumbers[randomEmoji];
  
    popUpEmoji.innerText = myEmoji;
    plusOne.innerText = '+1';
  
    // adding and removing classes for
    // the animation works every time
    // user clicked the button
    popUpEmoji.classList.remove('pop-up-emoji');
    void popUpEmoji.offsetWidth;
    popUpEmoji.classList.add('pop-up-emoji');
  
    iLoveZanzouneh.classList.remove('i-love-zanzouneh');
    void iLoveZanzouneh.offsetWidth;
    iLoveZanzouneh.classList.add('i-love-zanzouneh');
  
    plusOne.classList.remove('plus-one');
    void plusOne.offsetWidth;
    plusOne.classList.add('plus-one');
  
    switch (randomEmoji) {
      case 0:
        emojiCounters[0]++;
        emojiCounter1.innerText = emojiCounters[0];
        break;
      case 1:
        emojiCounters[1]++;
        emojiCounter2.innerText = emojiCounters[1];
        break;
      case 2:
        emojiCounters[2]++;
        emojiCounter3.innerText = emojiCounters[2];
        break;
      case 3:
        emojiCounters[3]++;
        emojiCounter4.innerText = emojiCounters[3];
        break;
      case 4:
        emojiCounters[4]++;
        emojiCounter5.innerText = emojiCounters[4];
        break;
      case 5:
        emojiCounters[5]++;
        emojiCounter6.innerText = emojiCounters[5];
        break;
    }
  });
  