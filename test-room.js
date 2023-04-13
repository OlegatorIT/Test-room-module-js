const arrSms = [
  "Моя жизнь без тебя - это как ночь без луны, я скучаю по тебе каждую секунду.",
  "Я не могу перестать думать о тебе и скучаю по тебе каждую минуту.",
  "Мне так не хватает твоего присутствия рядом со мной, что я не могу даже описать это словами.",
  "Я скучаю по тебе больше всего на свете и не могу дождаться, когда увижу тебя снова.",
  "Моя жизнь без тебя - это как ночь без звезд, я скучаю по тебе каждую секунду.",
  "Ты всегда в моих мыслях и сердце, я скучаю по тебе так сильно!",
  "Ты - самое прекрасное в моей жизни, и я скучаю по тебе каждую минуту.",
  "Ты - моя половинка, и я скучаю по тебе каждый день все больше и больше.",
  "Моя жизнь без тебя - это как пустыня без воды, я скучаю по тебе каждую минуту.",
];

const pEl = document.querySelector(".text-sms");
const btnEl = document.querySelector(".wrapper");
const isHiddenImg = document.querySelector(".ishidden");
const imgEl = document.querySelector(".img-first");

btnEl.addEventListener("click", onBtnClick);

let index = 0;

function onBtnClick(e) {
  if (e.target.type !== "button") {
    return;
  }

  if (index === arrSms.length) {
    isHiddenImg.classList.remove("ishidden");
    imgEl.classList.add("ishidden");
    pEl.style.fontSize = "30px";
    return (pEl.textContent = "Very miss you");
  }
  pEl.textContent = arrSms[index];
  index = index + 1;
}
