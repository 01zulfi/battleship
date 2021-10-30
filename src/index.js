import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/style.css";
import gameModuleObject from "./modules/Game";
import DOMModuleObject from "./modules/DOM";

DOMModuleObject.execute();
gameModuleObject.execute();
