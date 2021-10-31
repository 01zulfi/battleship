import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/style.css";
import boatIcon from "./icons/boat-icon.png";
import gameModuleObject from "./modules/Game";
import DOMModuleObject from "./modules/DOM";

DOMModuleObject.execute();
gameModuleObject.execute();

(() => {
  const head = document.querySelector("head");
  const link = document.createElement("link");
  link.href = boatIcon;
  link.type = "image/png";
  link.rel = "icon";
  head.append(link);
})();
