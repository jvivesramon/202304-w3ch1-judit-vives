import Component from "../Component/Component";

class PictureComponent extends Component {
  alternativeText;
  source;
  className;

  constructor(parentElement, alternativeText, source, className) {
    super(parentElement, "img");
    this.alternativeText = alternativeText;
    this.source = source;
    this.className = className;
    this.render();
  }

  render() {
    this.element.alt(this.alternativeText);
    this.element.src(this.source);
    this.element.classList.add(this.className);
  }
}

export default PictureComponent;
