const currentLevelText = document.getElementById("currentLevel"); //current level text
const xpProgressText = document.getElementById("xpProgress"); //xp progress text
const addXpButton = document.getElementById("addXp"); //add xp button
const resetXpButton = document.getElementById("resetXp"); //reset xp button
let level = 1; //set default level
let xp = 0; //set default xp
addXpButton.addEventListener("click", () => {
    //when add xp button is clicked
    xp++; //increase xp
    if (xp >= level) {
        //check if xp is greater than or equal to level
        xp -= level; //subtract level from xp
        level++; //increase level
    }
    currentLevelText.textContent = level; //update current level text
    xpProgressText.textContent = `${xp}/${level}`; //update xp progress text
});
resetXpButton.addEventListener("click", () => {
    //when reset xp button is clicked
    level = 1; //reset level to 1
    xp = 0; //reset xp to 0
});
