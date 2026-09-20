const options = [
  "大吉：今天幸運值爆表！",
  "中吉：會有意想不到的好事發生！",
  "小吉：順順利利過完一天~",
  "吉：保持好心情就有好運！",
  "平：平平凡凡就是福！"
];

function draw() {
  const resultBox = document.getElementById("result");
  const randomIndex = Math.floor(Math.random() * options.length);
  resultBox.textContent = options[randomIndex];
}
