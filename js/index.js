// Modullar
import { setInterval } from 'module';

// Oddiy teskari timer
const startTime = 30; // 30 daqiqa
let remainingTime = startTime;

// Intervalni saqlash
let timerInterval;

// Arrow function va destructuring
const updateTimer = () => {
  const min = Math.floor(remainingTime / 60);
  let sec = remainingTime % 60;
  sec = sec < 10 ? '0' + sec : sec;

  console.log("${min}:${sec}");
  remainingTime--;

  // Agar vaqt tugagan bo'lsa, interval to'xtashi kerak
  if (remainingTime < 0) {
    clearInterval(timerInterval);
  }
};

// Try...catch bilan interval
try {
  timerInterval = setInterval(updateTimer, 1000); // Har bir soniya uchun
} catch (e) {
  console.log('Xatolik sodir bo`ldi: ' + e.message);
}
