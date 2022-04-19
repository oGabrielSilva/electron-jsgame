const regionInfo = document.querySelector("#regionInfo");
const zoomInfo = document.querySelector("#zoomInfo");
const btnM = document.querySelector(".btnM");
const moreInfos = document.querySelector(".moreInfos");

const arrows = { up: "&#11165;", down: "&#11167;" };

const governmentTypeInfos = {
  0: "Form of government in which the people are sovereign, governing the state through representatives invested in their functions in separate powers.",
  1: "Monarchy is a form of government in which a monarch serves as head of state and remains in that office until his death or abdication.",
  2: "The head of state, whether king or president, is not the head of government and therefore has no political responsibilities. Instead, the head of government is the Prime Minister, who is appointed by Parliament.",
  3: "Totalitarianism is a political system or form of government that prohibits opposition parties, restricts individual opposition to the state and its claims, and exercises a high degree of control in the public and private lives of citizens. It is considered the most extreme and complete form of authoritarianism.",
  4: "Dictatorship is a governmental regime in which all the powers of the state are concentrated in one individual, one group, or one party. The dictator does not allow opposition to his actions and ideas, and has a large part of the decision-making power. It is an undemocratic regime in which there is no participation by the population.",
};

const form = document.querySelector("#newPlayer");

form
  .querySelector("#governmentType")
  .addEventListener(
    "change",
    ({ target }) =>
      (form.querySelector("#infoSelectType").textContent =
        governmentTypeInfos[target.value])
  );

form.querySelector("#infoSelectType").textContent = governmentTypeInfos[0];

btnM.addEventListener("click", () => moreInfos.classList.toggle("displayN"));

module.exports = { regionInfo, zoomInfo, governmentTypeInfos, arrows };
