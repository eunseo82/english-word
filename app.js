const units = {
  1: [
    { en: "apple", ko: "사과" },
    { en: "book", ko: "책" }
  ],
  2: [
    { en: "computer", ko: "컴퓨터" },
    { en: "dream", ko: "꿈" }
  ]
};

let unit = 1;
let index = 0;
let showMeaning = true;

function updateCard() {
  const word = units[unit][index];
  document.getElementById("en").innerText = word.en;
  document.getElementById("ko").innerText =
    showMeaning ? word.ko : "❓❓❓";
}

function nextWord() {
  index = (index + 1) % units[unit].length;
  updateCard();
}

function toggleMeaning() {
  showMeaning = !showMeaning;
  updateCard();
}

document.getElementById("unitSelect").addEventListener("change", e => {
  unit = e.target.value;
  index = 0;
  updateCard();
});

updateCard();
