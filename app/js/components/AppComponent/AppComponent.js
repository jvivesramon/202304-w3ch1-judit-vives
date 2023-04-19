import Component from "../Component/Component.js";

class AppComponent extends Component {
  className;

  constructor(parentElement, className) {
    super(parentElement, "div");
    this.className = className;
    this.render();
  }

  render() {
    this.element.className = this.className;
  }
}

export default AppComponent;
