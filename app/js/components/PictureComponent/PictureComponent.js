import Component from "../Component/Component.js";

class PictureComponent extends Component {
  src;
  alt;
  width;
  height;
  className;

  constructor(parentElement, src, alt, className) {
    super(parentElement, "img");
    this.src = src;
    this.alt = alt;
    this.className = className;
    this.render();
  }

  render() {
    this.element.classList.add(this.className);
    this.element.setAttribute("src", this.src);
    this.element.setAttribute("alt", this.alt);
  }
}

export default PictureComponent;
