import AppComponent from "./components/AppComponent/Appcomponent.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import { characters } from "./characters/characters.js";

const body = document.querySelector("body");
const app = new AppComponent(body, "app container");

new CardListComponent(
  app.element,
  characters,
  "characters-list row list-unstyled"
);
