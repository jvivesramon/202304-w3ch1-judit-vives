import Character from "../Character/Character.js";
import Fighter from "../Fighter/Fighter.js";

class Squire extends Character {
  kissAssLeve;
  serves;

  constructor(characterData, kissAssLevel, serves) {
    super(characterData);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate() {
    return `${super.communicate()}I'm a loser`;
  }

  #kissAssLevelFilter(kissAssLevel) {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}

export default Squire;
