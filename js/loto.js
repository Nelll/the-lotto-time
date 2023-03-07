const lottoForm = document.querySelector(".lotto-form");
const lottoInput = lottoForm.querySelector(".lotto-form input");

const a = document.querySelector(".lotto-number > span:first-child");
const b = document.querySelector(".lotto-number > span:nth-child(2)");
const c = document.querySelector(".lotto-number > span:nth-child(3)");
const d = document.querySelector(".lotto-number > span:nth-child(4)");
const e = document.querySelector(".lotto-number > span:nth-child(5)");
const f = document.querySelector(".lotto-number > span:last-child");

function paintLottoNumber(lottoNumbers) {
  a.innerText = lottoNumbers[0];
  b.innerText = lottoNumbers[1];
  c.innerText = lottoNumbers[2];
  d.innerText = lottoNumbers[3];
  e.innerText = lottoNumbers[4];
  f.innerText = lottoNumbers[5];
}

function handleLottoClick(event) {
  let lottoNumbers = [];
  for (i = 0; i < 6; i++) {
    randomNum = Math.floor(Math.random() * 45 + 1);
    if (lottoNumbers.indexOf(randomNum) === -1) {
      lottoNumbers.push(randomNum);
    } else {
      i--;
    }
  }
  console.log(lottoNumbers);
  paintLottoNumber(lottoNumbers);
}

lottoForm.addEventListener("click", handleLottoClick);
