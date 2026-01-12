const currentLevelText = document.getElementById("currentLevel"); //current level text
const xpProgressText = document.getElementById("xpProgress"); //xp progress text
const addXpButton = document.getElementById("addXp"); //add xp button
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
