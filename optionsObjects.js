import {animationType} from "./animationType.js";
import {animationObject} from "./animationObject.js";

const gameCanvas = document.getElementById("game");
const gameContext = gameCanvas.getContext("2d");

const Background = new animationObject();
Background.getSprites('./image/plansza.png');
Background.getPosition(0,0)
Background.getWidth(gameCanvas.width);
Background.getHeight(gameCanvas.height);
Background.getType('Background');
const animation = new animationType(Background);
animation.getCanvas(gameCanvas);
animation.getContext(gameContext);
animation.getIndex(0,0);

export {animation}
