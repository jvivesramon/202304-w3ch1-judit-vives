import CardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";

class CardListComponent extends Component {
  className;
  characters;

  constructor(parentElement, characters, className) {
    super(parentElement, "ul");
    this.className = className;
    this.characters = characters;
    this.render();
  }

  render() {
    this.element.className = this.className;

    this.characters.forEach(
      (character) => new CardComponent(this.element, "character col", character)
    );
  }
}

export default CardListComponent;
