/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMFactory */ "./src/modules/DOMFactory.js");
/* harmony import */ var _Pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pubsub */ "./src/modules/Pubsub.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var receiveComputerAttack = function receiveComputerAttack(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  var playerBoard = document.querySelector(".player-one-gameboard");
  var row = playerBoard.querySelector("[data-rows=\"".concat(x, "\"]"));
  var column = row.querySelector("[data-columns=\"".concat(y, "\"]"));
  column.classList.add("hit");
};

var sendPlayerAttack = function sendPlayerAttack(event) {
  if (!event.target.classList.contains("columns")) return;
  event.target.classList.add("hit");
  var x = event.target.parentNode.getAttribute("data-rows");
  var y = event.target.getAttribute("data-columns");
  _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish("player-attack-ship", [x, y]);
};

var createGameboard = function createGameboard(name, board) {
  var grid = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: name
  });

  for (var i = 0; i < 10; i += 1) {
    var row = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
      className: "rows",
      "data-rows": i
    });

    for (var j = 0; j < 10; j += 1) {
      var column = (0,_DOMFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        className: "columns",
        "data-columns": j
      });

      if (_typeof(board[i][j]) === "object") {
        column.classList.add("ship");
      }

      row.append(column);
    }

    grid.append(row);
  }

  if (name === "player-two-gameboard") {
    grid.addEventListener("click", sendPlayerAttack);
  }

  return grid;
};

var appendGameboards = function appendGameboards(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      playerBoard = _ref4[0],
      computerBoard = _ref4[1];

  var gameboards = document.querySelector(".gameboards");
  gameboards.append(createGameboard("player-one-gameboard", playerBoard));
  gameboards.append(createGameboard("player-two-gameboard", computerBoard));
};

var showAlert = function showAlert(victor) {
  document.querySelector(".player-two-gameboard").removeEventListener("click", sendPlayerAttack);
  alert(victor);
};

var DOMModuleObject = {
  execute: function execute() {
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("fleets-initialized", appendGameboards);
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("computer-attack-ship", receiveComputerAttack);
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("game-end", showAlert);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMModuleObject);

/***/ }),

/***/ "./src/modules/DOMFactory.js":
/*!***********************************!*\
  !*** ./src/modules/DOMFactory.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DOMFactory = function DOMFactory(element, attributes) {
  var newElement = document.createElement(element);

  for (var attribute in attributes) {
    if (!newElement[attribute]) {
      if (attribute.toString().includes("data")) {
        newElement.setAttribute(attribute.toString(), attributes[attribute]);
      } else {
        newElement[attribute] = attributes[attribute];
      }
    }
  }

  return newElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMFactory);

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");
/* harmony import */ var _Pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pubsub */ "./src/modules/Pubsub.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var player = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("player", (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());
var computer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("computer", (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());

var addPlayerShips = function addPlayerShips() {
  player.fleet.at(0, 0).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("carrier", 5));
  player.fleet.at(2, 5).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("destroyer", 4));
  player.fleet.at(6, 2).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("cruiser", 3));
  player.fleet.at(4, 4).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("submarine", 3));
  player.fleet.at(9, 7).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("patrol", 2));
};

var addComputerShips = function addComputerShips() {
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("carrier", 5));
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("destroyer", 4));
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("cruiser", 3));
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("submarine", 3));
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("patrol", 2));
};

var addAllShips = function addAllShips() {
  addPlayerShips();
  addComputerShips();
};

var computerAttackShip = function computerAttackShip() {
  var _computer$attack$auto = computer.attack(player).auto(),
      _computer$attack$auto2 = _slicedToArray(_computer$attack$auto, 2),
      x1 = _computer$attack$auto2[0],
      y1 = _computer$attack$auto2[1];

  _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("computer-attack-ship", [x1, y1]);

  if (player.fleet.areAllShipsSunk()) {
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("game-end", "computer won");
  }
};

var playerAttackShip = function playerAttackShip(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  player.attack(computer).at(x, y);

  if (computer.fleet.areAllShipsSunk()) {
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("game-end", "player won");
  }

  computerAttackShip();
};

var gameModuleObject = {
  execute: function execute() {
    addAllShips();
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("fleets-initialized", [player.fleet.board, computer.fleet.board]);
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe("player-attack-ship", playerAttackShip);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameModuleObject);

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Gameboard = function Gameboard() {
  var board = Array(10).fill("").map(function (element) {
    return Array(10).fill(element);
  });
  var shipsArray = [];
  var latestAttackStatus = "";

  var checkIfShipCanBeAdded = function checkIfShipCanBeAdded(x, y, shipLength) {
    var requiredSpace = _toConsumableArray(board)[x].slice(y, y + shipLength);

    if (requiredSpace.length !== shipLength) return false;
    return requiredSpace.every(function (element) {
      return element === "";
    });
  };

  var addShipInArray = function addShipInArray(ship) {
    shipsArray.push(ship);
  };

  var addShipOnBoard = function addShipOnBoard(x, y, ship) {
    board[x].fill(ship, y, y + ship.length);
  };

  var attackShip = function attackShip(x, y) {
    var ship = board[x][y];
    var hitPosition = 0; // get left of gameboard from hit position

    var targetArea = board[x].slice(0, y); // filter to get left of ship from hit position

    var shipLeftSide = targetArea.filter(function (element) {
      return element.name === ship.name;
    });
    hitPosition = shipLeftSide.length;

    if (ship.isHitAt(hitPosition)) {
      latestAttackStatus = "illegal";
      return;
    }

    ship.hit(hitPosition);
    latestAttackStatus = "success";
  };

  return {
    get board() {
      return _toConsumableArray(board);
    },

    get shipsArray() {
      return [].concat(shipsArray);
    },

    get latestAttackStatus() {
      return latestAttackStatus;
    },

    at: function at(x, y) {
      return {
        add: function add(ship) {
          if (checkIfShipCanBeAdded(x, y, ship.length)) {
            addShipInArray(ship);
            addShipOnBoard(x, y, ship);
          }
        },
        receiveAttack: function receiveAttack() {
          if (_typeof(board[x][y]) === "object") {
            attackShip(x, y);
            return;
          }

          if (board[x][y] === "X") {
            latestAttackStatus = "illegal";
            return;
          }

          board[x][y] = "X";
          latestAttackStatus = "success";
        }
      };
    },
    areAllShipsSunk: function areAllShipsSunk() {
      return [].concat(shipsArray).every(function (ship) {
        return ship.isSunk();
      });
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Player = function Player(name, fleet) {
  return {
    get name() {
      return name;
    },

    get fleet() {
      return fleet;
    },

    attack: function attack(enemy) {
      return {
        at: function at(x, y) {
          enemy.fleet.at(x, y).receiveAttack(x, y);
        },
        auto: function auto() {
          var x = Math.floor(Math.random() * 10);
          var y = Math.floor(Math.random() * 10);
          enemy.fleet.at(x, y).receiveAttack(x, y);

          if (enemy.fleet.latestAttackStatus === "illegal") {
            return this.auto();
          }

          return [x, y];
        }
      };
    },
    autoAdd: function autoAdd(ship) {
      var x = Math.floor(Math.random() * 10);
      var y = Math.floor(Math.random() * 10);
      fleet.at(x, y).add(ship);

      if (!fleet.shipsArray.includes(ship)) {
        this.autoAdd(ship);
      }
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/Pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/Pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pubsub = {
  events: {},
  publish: function publish(eventName, data) {
    if (pubsub.events[eventName]) {
      pubsub.events[eventName].forEach(function (callback) {
        return callback(data);
      });
    }
  },
  subscribe: function subscribe(eventName, callback) {
    if (!Array.isArray(pubsub.events[eventName])) {
      pubsub.events[eventName] = [];
    }

    pubsub.events[eventName].push(callback);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Ship = function Ship(name, length) {
  var shipArray = Array(length).fill("");

  var hit = function hit(position) {
    shipArray = _toConsumableArray(shipArray).map(function (element, index) {
      return index === position ? "hit" : element;
    });
  };

  var isHitAt = function isHitAt(position) {
    return _toConsumableArray(shipArray)[position] === "hit";
  };

  var isSunk = function isSunk() {
    return _toConsumableArray(shipArray).every(function (element) {
      return element === "hit";
    });
  };

  return {
    get name() {
      return name;
    },

    get length() {
      return length;
    },

    get shipArray() {
      return _toConsumableArray(shipArray);
    },

    hit: hit,
    isHitAt: isHitAt,
    isSunk: isSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard {\n  width: 35vw;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows {\n  border: 1px solid black;\n  flex: 1;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n  border-bottom: 0;\n  border-top: 0;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;EAEE,WAAW;EACX,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;;EAEE,uBAAuB;EACvB,OAAO;EACP,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;;EAEE,OAAO;EACP,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":[".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard {\n  width: 35vw;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows {\n  border: 1px solid black;\n  flex: 1;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n  border-bottom: 0;\n  border-top: 0;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");



_modules_DOM__WEBPACK_IMPORTED_MODULE_2__["default"].execute();
_modules_Game__WEBPACK_IMPORTED_MODULE_1__["default"].execute();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQVgsNERBQUE7QUFDQTZCLDZEQUFBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01GYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01GYWN0b3J5IGZyb20gXCIuL0RPTUZhY3RvcnlcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vUHVic3ViXCI7XG5cbmNvbnN0IHJlY2VpdmVDb21wdXRlckF0dGFjayA9IChbeCwgeV0pID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vbmUtZ2FtZWJvYXJkXCIpO1xuICBjb25zdCByb3cgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dzPVwiJHt4fVwiXWApO1xuICBjb25zdCBjb2x1bW4gPSByb3cucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sdW1ucz1cIiR7eX1cIl1gKTtcbiAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG59O1xuXG5jb25zdCBzZW5kUGxheWVyQXR0YWNrID0gKGV2ZW50KSA9PiB7XG4gIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbHVtbnNcIikpIHJldHVybjtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gIGNvbnN0IHggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd3NcIik7XG4gIGNvbnN0IHkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpO1xuICBwdWJzdWIucHVibGlzaChcInBsYXllci1hdHRhY2stc2hpcFwiLCBbeCwgeV0pO1xufTtcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKG5hbWUsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBuYW1lIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd3NcIiwgXCJkYXRhLXJvd3NcIjogaSB9KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiY29sdW1uc1wiLFxuICAgICAgICBcImRhdGEtY29sdW1uc1wiOiBqLFxuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoY29sdW1uKTtcbiAgICB9XG4gICAgZ3JpZC5hcHBlbmQocm93KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBhcHBlbmRHYW1lYm9hcmRzID0gKFtwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZF0pID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkc1wiKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLW9uZS1nYW1lYm9hcmRcIiwgcGxheWVyQm9hcmQpKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLXR3by1nYW1lYm9hcmRcIiwgY29tcHV0ZXJCb2FyZCkpO1xufTtcblxuY29uc3Qgc2hvd0FsZXJ0ID0gKHZpY3RvcikgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tZ2FtZWJvYXJkXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kUGxheWVyQXR0YWNrKTtcbiAgYWxlcnQodmljdG9yKTtcbn07XG5cbmNvbnN0IERPTU1vZHVsZU9iamVjdCA9IHtcbiAgZXhlY3V0ZSgpIHtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiZmxlZXRzLWluaXRpYWxpemVkXCIsIGFwcGVuZEdhbWVib2FyZHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJjb21wdXRlci1hdHRhY2stc2hpcFwiLCByZWNlaXZlQ29tcHV0ZXJBdHRhY2spO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJnYW1lLWVuZFwiLCBzaG93QWxlcnQpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTW9kdWxlT2JqZWN0O1xuIiwiY29uc3QgRE9NRmFjdG9yeSA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFuZXdFbGVtZW50W2F0dHJpYnV0ZV0pIHtcbiAgICAgIGlmIChhdHRyaWJ1dGUudG9TdHJpbmcoKS5pbmNsdWRlcyhcImRhdGFcIikpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLnRvU3RyaW5nKCksIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50W2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NRmFjdG9yeTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxuY29uc3QgcGxheWVyID0gUGxheWVyKFwicGxheWVyXCIsIEdhbWVib2FyZCgpKTtcbmNvbnN0IGNvbXB1dGVyID0gUGxheWVyKFwiY29tcHV0ZXJcIiwgR2FtZWJvYXJkKCkpO1xuXG5jb25zdCBhZGRQbGF5ZXJTaGlwcyA9ICgpID0+IHtcbiAgcGxheWVyLmZsZWV0LmF0KDAsIDApLmFkZChTaGlwKFwiY2FycmllclwiLCA1KSk7XG4gIHBsYXllci5mbGVldC5hdCgyLCA1KS5hZGQoU2hpcChcImRlc3Ryb3llclwiLCA0KSk7XG4gIHBsYXllci5mbGVldC5hdCg2LCAyKS5hZGQoU2hpcChcImNydWlzZXJcIiwgMykpO1xuICBwbGF5ZXIuZmxlZXQuYXQoNCwgNCkuYWRkKFNoaXAoXCJzdWJtYXJpbmVcIiwgMykpO1xuICBwbGF5ZXIuZmxlZXQuYXQoOSwgNykuYWRkKFNoaXAoXCJwYXRyb2xcIiwgMikpO1xufTtcblxuY29uc3QgYWRkQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiY2FycmllclwiLCA1KSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcImRlc3Ryb3llclwiLCA0KSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcImNydWlzZXJcIiwgMykpO1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJzdWJtYXJpbmVcIiwgMykpO1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJwYXRyb2xcIiwgMikpO1xufTtcblxuY29uc3QgYWRkQWxsU2hpcHMgPSAoKSA9PiB7XG4gIGFkZFBsYXllclNoaXBzKCk7XG4gIGFkZENvbXB1dGVyU2hpcHMoKTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgW3gxLCB5MV0gPSBjb21wdXRlci5hdHRhY2socGxheWVyKS5hdXRvKCk7XG4gIHB1YnN1Yi5wdWJsaXNoKFwiY29tcHV0ZXItYXR0YWNrLXNoaXBcIiwgW3gxLCB5MV0pO1xuICBpZiAocGxheWVyLmZsZWV0LmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJnYW1lLWVuZFwiLCBcImNvbXB1dGVyIHdvblwiKTtcbiAgfVxufTtcblxuY29uc3QgcGxheWVyQXR0YWNrU2hpcCA9IChbeCwgeV0pID0+IHtcbiAgcGxheWVyLmF0dGFjayhjb21wdXRlcikuYXQoeCwgeSk7XG4gIGlmIChjb21wdXRlci5mbGVldC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZ2FtZS1lbmRcIiwgXCJwbGF5ZXIgd29uXCIpO1xuICB9XG4gIGNvbXB1dGVyQXR0YWNrU2hpcCgpO1xufTtcblxuY29uc3QgZ2FtZU1vZHVsZU9iamVjdCA9IHtcbiAgZXhlY3V0ZSgpIHtcbiAgICBhZGRBbGxTaGlwcygpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZmxlZXRzLWluaXRpYWxpemVkXCIsIFtcbiAgICAgIHBsYXllci5mbGVldC5ib2FyZCxcbiAgICAgIGNvbXB1dGVyLmZsZWV0LmJvYXJkLFxuICAgIF0pO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJwbGF5ZXItYXR0YWNrLXNoaXBcIiwgcGxheWVyQXR0YWNrU2hpcCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTW9kdWxlT2JqZWN0O1xuIiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEFycmF5KDEwKVxuICAgIC5maWxsKFwiXCIpXG4gICAgLm1hcCgoZWxlbWVudCkgPT4gQXJyYXkoMTApLmZpbGwoZWxlbWVudCkpO1xuXG4gIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcblxuICBsZXQgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJcIjtcblxuICBjb25zdCBjaGVja0lmU2hpcENhbkJlQWRkZWQgPSAoeCwgeSwgc2hpcExlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHJlcXVpcmVkU3BhY2UgPSBbLi4uYm9hcmRdW3hdLnNsaWNlKHksIHkgKyBzaGlwTGVuZ3RoKTtcbiAgICBpZiAocmVxdWlyZWRTcGFjZS5sZW5ndGggIT09IHNoaXBMZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gcmVxdWlyZWRTcGFjZS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJcIik7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcEluQXJyYXkgPSAoc2hpcCkgPT4ge1xuICAgIHNoaXBzQXJyYXkucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwT25Cb2FyZCA9ICh4LCB5LCBzaGlwKSA9PiB7XG4gICAgYm9hcmRbeF0uZmlsbChzaGlwLCB5LCB5ICsgc2hpcC5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcbiAgICBsZXQgaGl0UG9zaXRpb24gPSAwO1xuICAgIC8vIGdldCBsZWZ0IG9mIGdhbWVib2FyZCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHRhcmdldEFyZWEgPSBib2FyZFt4XS5zbGljZSgwLCB5KTtcbiAgICAvLyBmaWx0ZXIgdG8gZ2V0IGxlZnQgb2Ygc2hpcCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHNoaXBMZWZ0U2lkZSA9IHRhcmdldEFyZWEuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PT0gc2hpcC5uYW1lLFxuICAgICk7XG4gICAgaGl0UG9zaXRpb24gPSBzaGlwTGVmdFNpZGUubGVuZ3RoO1xuICAgIGlmIChzaGlwLmlzSGl0QXQoaGl0UG9zaXRpb24pKSB7XG4gICAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcImlsbGVnYWxcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hpcC5oaXQoaGl0UG9zaXRpb24pO1xuICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzc1wiO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIFsuLi5ib2FyZF07XG4gICAgfSxcbiAgICBnZXQgc2hpcHNBcnJheSgpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV07XG4gICAgfSxcbiAgICBnZXQgbGF0ZXN0QXR0YWNrU3RhdHVzKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdEF0dGFja1N0YXR1cztcbiAgICB9LFxuICAgIGF0KHgsIHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZChzaGlwKSB7XG4gICAgICAgICAgaWYgKGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCh4LCB5LCBzaGlwLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGFkZFNoaXBJbkFycmF5KHNoaXApO1xuICAgICAgICAgICAgYWRkU2hpcE9uQm9hcmQoeCwgeSwgc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGF0dGFja1NoaXAoeCwgeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gXCJYXCIpIHtcbiAgICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiWFwiO1xuICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzc1wiO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV0uZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSwgZmxlZXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZsZWV0KCkge1xuICAgICAgcmV0dXJuIGZsZWV0O1xuICAgIH0sXG4gICAgYXR0YWNrKGVuZW15KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdCh4LCB5KSB7XG4gICAgICAgICAgZW5lbXkuZmxlZXQuYXQoeCwgeSkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXV0bygpIHtcbiAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgaWYgKGVuZW15LmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyA9PT0gXCJpbGxlZ2FsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG8oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhdXRvQWRkKHNoaXApIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgZmxlZXQuYXQoeCwgeSkuYWRkKHNoaXApO1xuXG4gICAgICBpZiAoIWZsZWV0LnNoaXBzQXJyYXkuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgICAgdGhpcy5hdXRvQWRkKHNoaXApO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBwdWJzdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhkYXRhKSk7XG4gICAgfVxuICB9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHVic3ViO1xuIiwiY29uc3QgU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgbGV0IHNoaXBBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChcIlwiKTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBzaGlwQXJyYXkgPSBbLi4uc2hpcEFycmF5XS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHBvc2l0aW9uID8gXCJoaXRcIiA6IGVsZW1lbnQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNIaXRBdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XVtwb3NpdGlvbl0gPT09IFwiaGl0XCI7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJoaXRcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgc2hpcEFycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzSGl0QXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCB7XFxuICB3aWR0aDogMzV2dztcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLXRvcDogMDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBOztFQUVFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCB7XFxuICB3aWR0aDogMzV2dztcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLXRvcDogMDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdhbWVNb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9HYW1lXCI7XG5pbXBvcnQgRE9NTW9kdWxlT2JqZWN0IGZyb20gXCIuL21vZHVsZXMvRE9NXCI7XG5cbkRPTU1vZHVsZU9iamVjdC5leGVjdXRlKCk7XG5nYW1lTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbiJdLCJuYW1lcyI6WyJET01GYWN0b3J5IiwicHVic3ViIiwicmVjZWl2ZUNvbXB1dGVyQXR0YWNrIiwieCIsInkiLCJwbGF5ZXJCb2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdyIsImNvbHVtbiIsImNsYXNzTGlzdCIsImFkZCIsInNlbmRQbGF5ZXJBdHRhY2siLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImdldEF0dHJpYnV0ZSIsInB1Ymxpc2giLCJjcmVhdGVHYW1lYm9hcmQiLCJuYW1lIiwiYm9hcmQiLCJncmlkIiwiY2xhc3NOYW1lIiwiaSIsImoiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kR2FtZWJvYXJkcyIsImNvbXB1dGVyQm9hcmQiLCJnYW1lYm9hcmRzIiwic2hvd0FsZXJ0IiwidmljdG9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwiRE9NTW9kdWxlT2JqZWN0IiwiZXhlY3V0ZSIsInN1YnNjcmliZSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibmV3RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwic2V0QXR0cmlidXRlIiwiU2hpcCIsIkdhbWVib2FyZCIsIlBsYXllciIsInBsYXllciIsImNvbXB1dGVyIiwiYWRkUGxheWVyU2hpcHMiLCJmbGVldCIsImF0IiwiYWRkQ29tcHV0ZXJTaGlwcyIsImF1dG9BZGQiLCJhZGRBbGxTaGlwcyIsImNvbXB1dGVyQXR0YWNrU2hpcCIsImF0dGFjayIsImF1dG8iLCJ4MSIsInkxIiwiYXJlQWxsU2hpcHNTdW5rIiwicGxheWVyQXR0YWNrU2hpcCIsImdhbWVNb2R1bGVPYmplY3QiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaGlwc0FycmF5IiwibGF0ZXN0QXR0YWNrU3RhdHVzIiwiY2hlY2tJZlNoaXBDYW5CZUFkZGVkIiwic2hpcExlbmd0aCIsInJlcXVpcmVkU3BhY2UiLCJzbGljZSIsImxlbmd0aCIsImV2ZXJ5IiwiYWRkU2hpcEluQXJyYXkiLCJzaGlwIiwicHVzaCIsImFkZFNoaXBPbkJvYXJkIiwiYXR0YWNrU2hpcCIsImhpdFBvc2l0aW9uIiwidGFyZ2V0QXJlYSIsInNoaXBMZWZ0U2lkZSIsImZpbHRlciIsImlzSGl0QXQiLCJoaXQiLCJyZWNlaXZlQXR0YWNrIiwiaXNTdW5rIiwiZW5lbXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJldmVudHMiLCJldmVudE5hbWUiLCJkYXRhIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwiaXNBcnJheSIsInNoaXBBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9