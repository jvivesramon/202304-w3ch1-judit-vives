import Component from "../Component/Component.js";
import King from "../../characters/King/King.js";
import Advisor from "../../characters/Advisor/Advisor.js";
import Squire from "../../characters/Squire/Squire.js";
import Fighter from "../../characters/Fighter/Fighter.js";

class CardComponent extends Component {
  className;
  character;

  constructor(parentElement, className, character) {
    super(parentElement, "li");
    this.className = className;
    this.character = character;
    this.render();
  }

  render() {
    this.element.className = this.className;
    this.element.innerHTML = `<div class="card character__card">
          <img src="img/${this.character.characterData.name}.jpg" alt="${
      this.character.characterData.name
    } and ${
      this.character.characterData.family
    }" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${
              this.character.characterData.name
            } & ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.characterData.age} yrs</li>
                <li>
                  State:${
                    this.character.isAlive
                      ? `<i class="fas fa-thumbs-up"></i>`
                      : `<i class="fas fa-thumbs-down"></i>`
                  }
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                ${
                  this.character?.yearsOfReign
                    ? `<li>Years of Reign: ${this.character.yearsOfReign}</li>`
                    : ""
                }
                ${
                  this.character?.weapon
                    ? `<li>Weapon: ${this.character.weapon}</li>`
                    : ""
                }
                ${
                  this.character?.dexterity
                    ? `<li>Dexterity: ${this.character.dexterity}</li>`
                    : ""
                }
                ${
                  this.character?.kissAssLevel
                    ? `<li>Kiss Ass Level: ${this.character.kissAssLevel}</li>`
                    : ""
                }
                ${
                  this.character?.advises
                    ? `<li>Advises to: ${this.character.advises.characterData.name}</li>`
                    : ""
                }
                ${
                  this.character?.serves
                    ? `<li>Serves to: ${this.character.serves.characterData.name}</li>`
                    : ""
                }
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji">
        ${this.character instanceof King ? "👑" : ""}
        ${this.character instanceof Fighter ? "🗡" : ""}
        ${this.character instanceof Advisor ? "🎓" : ""}
        ${this.character instanceof Squire ? "🛡" : ""}
          </i>
        </div>`;
  }
}

export default CardComponent;
