const currentLevelText = document.getElementById("currentLevel");
const xpProgressText = document.getElementById("xpProgress");
const addXpButton = document.getElementById("addXp");
let level = 1;
let xp = 0;
addXpButton.addEventListener("click", () => {
  xp++;
  if (xp >= level) {
    xp -= level;
    level++;
  }
});
