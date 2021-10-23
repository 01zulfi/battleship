/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "computer": () => (/* binding */ computer)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");



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

addAllShips();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAllShips);


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

/***/ "./src/modules/InitDOM.js":
/*!********************************!*\
  !*** ./src/modules/InitDOM.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMFactory */ "./src/modules/DOMFactory.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/modules/Game.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var computerAttack = function computerAttack() {
  var _computer$attack$auto = _Game__WEBPACK_IMPORTED_MODULE_1__.computer.attack(_Game__WEBPACK_IMPORTED_MODULE_1__.player).auto(),
      _computer$attack$auto2 = _slicedToArray(_computer$attack$auto, 2),
      x = _computer$attack$auto2[0],
      y = _computer$attack$auto2[1];

  var playerBoard = document.querySelector(".player-one-gameboard");
  var row = playerBoard.querySelector("[data-rows=\"".concat(x, "\"]"));
  var column = row.querySelector("[data-columns=\"".concat(y, "\"]"));
  column.classList.add("hit");
};

var sendAttackSignal = function sendAttackSignal(event) {
  if (!event.target.parentNode.parentNode.classList.contains("player-two-gameboard")) {
    return;
  }

  event.target.classList.add("hit");
  var x = event.target.parentNode.getAttribute("data-rows");
  var y = event.target.getAttribute("data-columns");
  _Game__WEBPACK_IMPORTED_MODULE_1__.player.attack(_Game__WEBPACK_IMPORTED_MODULE_1__.computer).at(x, y);
  computerAttack();
  setTimeout(function () {
    if (_Game__WEBPACK_IMPORTED_MODULE_1__.player.fleet.areAllShipsSunk()) alert("computer won");
    if (_Game__WEBPACK_IMPORTED_MODULE_1__.computer.fleet.areAllShipsSunk()) alert("player won");
  }, 0);
};

var createGameboard = function createGameboard(name, p) {
  var board = p.fleet.board;
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

      grid.addEventListener("click", sendAttackSignal);
      row.append(column);
    }

    grid.append(row);
  }

  return grid;
};

var appendGameboards = function appendGameboards() {
  var gameboards = document.querySelector(".gameboards");
  gameboards.append(createGameboard("player-one-gameboard", _Game__WEBPACK_IMPORTED_MODULE_1__.player));
  gameboards.append(createGameboard("player-two-gameboard", _Game__WEBPACK_IMPORTED_MODULE_1__.computer));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendGameboards);

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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard {\n  width: 35vw;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows {\n  border: 1px solid black;\n  flex: 1;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n  border-bottom: 0;\n  border-top: 0;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.player-one-gameboard .rows .columns.hit:hover,\n.player-two-gameboard .rows .columns.hit:hover {\n  cursor: not-allowed;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;EAEE,WAAW;EACX,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;;EAEE,uBAAuB;EACvB,OAAO;EACP,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;;EAEE,OAAO;EACP,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;;EAEE,mBAAmB;AACrB","sourcesContent":[".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard {\n  width: 35vw;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows {\n  border: 1px solid black;\n  flex: 1;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n  border-bottom: 0;\n  border-top: 0;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.player-one-gameboard .rows .columns.hit:hover,\n.player-two-gameboard .rows .columns.hit:hover {\n  cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_InitDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/InitDOM */ "./src/modules/InitDOM.js");
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");



(0,_modules_InitDOM__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBaUUsNERBQWdCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Jbml0RE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRE9NRmFjdG9yeSA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFuZXdFbGVtZW50W2F0dHJpYnV0ZV0pIHtcbiAgICAgIGlmIChhdHRyaWJ1dGUudG9TdHJpbmcoKS5pbmNsdWRlcyhcImRhdGFcIikpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLnRvU3RyaW5nKCksIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50W2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NRmFjdG9yeTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIiwgR2FtZWJvYXJkKCkpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiLCBHYW1lYm9hcmQoKSk7XG5cbmNvbnN0IGFkZFBsYXllclNoaXBzID0gKCkgPT4ge1xuICBwbGF5ZXIuZmxlZXQuYXQoMCwgMCkuYWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgcGxheWVyLmZsZWV0LmF0KDIsIDUpLmFkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgcGxheWVyLmZsZWV0LmF0KDYsIDIpLmFkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIHBsYXllci5mbGVldC5hdCg0LCA0KS5hZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIHBsYXllci5mbGVldC5hdCg5LCA3KS5hZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59O1xuXG5jb25zdCBhZGRDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59O1xuXG5jb25zdCBhZGRBbGxTaGlwcyA9ICgpID0+IHtcbiAgYWRkUGxheWVyU2hpcHMoKTtcbiAgYWRkQ29tcHV0ZXJTaGlwcygpO1xufTtcblxuYWRkQWxsU2hpcHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQWxsU2hpcHM7XG5leHBvcnQgeyBwbGF5ZXIsIGNvbXB1dGVyIH07XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwoXCJcIilcbiAgICAubWFwKChlbGVtZW50KSA9PiBBcnJheSgxMCkuZmlsbChlbGVtZW50KSk7XG5cbiAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuXG4gIGxldCBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcIlwiO1xuXG4gIGNvbnN0IGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCA9ICh4LCB5LCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFsuLi5ib2FyZF1beF0uc2xpY2UoeSwgeSArIHNoaXBMZW5ndGgpO1xuICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCAhPT0gc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwSW5BcnJheSA9IChzaGlwKSA9PiB7XG4gICAgc2hpcHNBcnJheS5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKHgsIHksIHNoaXApID0+IHtcbiAgICBib2FyZFt4XS5maWxsKHNoaXAsIHksIHkgKyBzaGlwLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkW3hdW3ldO1xuICAgIGxldCBoaXRQb3NpdGlvbiA9IDA7XG4gICAgLy8gZ2V0IGxlZnQgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3QgdGFyZ2V0QXJlYSA9IGJvYXJkW3hdLnNsaWNlKDAsIHkpO1xuICAgIC8vIGZpbHRlciB0byBnZXQgbGVmdCBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcExlZnRTaWRlID0gdGFyZ2V0QXJlYS5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcbiAgICBoaXRQb3NpdGlvbiA9IHNoaXBMZWZ0U2lkZS5sZW5ndGg7XG4gICAgaWYgKHNoaXAuaXNIaXRBdChoaXRQb3NpdGlvbikpIHtcbiAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaGlwLmhpdChoaXRQb3NpdGlvbik7XG4gICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICB9LFxuICAgIGdldCBzaGlwc0FycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XTtcbiAgICB9LFxuICAgIGdldCBsYXRlc3RBdHRhY2tTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0QXR0YWNrU3RhdHVzO1xuICAgIH0sXG4gICAgYXQoeCwgeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRkKHNoaXApIHtcbiAgICAgICAgICBpZiAoY2hlY2tJZlNoaXBDYW5CZUFkZGVkKHgsIHksIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgICAgYWRkU2hpcEluQXJyYXkoc2hpcCk7XG4gICAgICAgICAgICBhZGRTaGlwT25Cb2FyZCh4LCB5LCBzaGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgYXR0YWNrU2hpcCh4LCB5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09PSBcIlhcIikge1xuICAgICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJYXCI7XG4gICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBET01GYWN0b3J5IGZyb20gXCIuL0RPTUZhY3RvcnlcIjtcbmltcG9ydCB7IHBsYXllciwgY29tcHV0ZXIgfSBmcm9tIFwiLi9HYW1lXCI7XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuICBjb25zdCBbeCwgeV0gPSBjb21wdXRlci5hdHRhY2socGxheWVyKS5hdXRvKCk7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItb25lLWdhbWVib2FyZFwiKTtcbiAgY29uc3Qgcm93ID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93cz1cIiR7eH1cIl1gKTtcbiAgY29uc3QgY29sdW1uID0gcm93LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbHVtbnM9XCIke3l9XCJdYCk7XG4gIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xufTtcblxuY29uc3Qgc2VuZEF0dGFja1NpZ25hbCA9IChldmVudCkgPT4ge1xuICBpZiAoXG4gICAgIWV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiLFxuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICBjb25zdCB4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpO1xuICBjb25zdCB5ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKTtcbiAgcGxheWVyLmF0dGFjayhjb21wdXRlcikuYXQoeCwgeSk7XG4gIGNvbXB1dGVyQXR0YWNrKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChwbGF5ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIGFsZXJ0KFwiY29tcHV0ZXIgd29uXCIpO1xuICAgIGlmIChjb21wdXRlci5mbGVldC5hcmVBbGxTaGlwc1N1bmsoKSkgYWxlcnQoXCJwbGF5ZXIgd29uXCIpO1xuICB9LCAwKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IChuYW1lLCBwKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IHAuZmxlZXQ7XG4gIGNvbnN0IGdyaWQgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBuYW1lIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd3NcIiwgXCJkYXRhLXJvd3NcIjogaSB9KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiY29sdW1uc1wiLFxuICAgICAgICBcImRhdGEtY29sdW1uc1wiOiBqLFxuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRBdHRhY2tTaWduYWwpO1xuICAgICAgcm93LmFwcGVuZChjb2x1bW4pO1xuICAgIH1cbiAgICBncmlkLmFwcGVuZChyb3cpO1xuICB9XG4gIHJldHVybiBncmlkO1xufTtcblxuY29uc3QgYXBwZW5kR2FtZWJvYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkc1wiKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLW9uZS1nYW1lYm9hcmRcIiwgcGxheWVyKSk7XG4gIGdhbWVib2FyZHMuYXBwZW5kKGNyZWF0ZUdhbWVib2FyZChcInBsYXllci10d28tZ2FtZWJvYXJkXCIsIGNvbXB1dGVyKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRHYW1lYm9hcmRzO1xuIiwiY29uc3QgUGxheWVyID0gKG5hbWUsIGZsZWV0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBmbGVldCgpIHtcbiAgICAgIHJldHVybiBmbGVldDtcbiAgICB9LFxuICAgIGF0dGFjayhlbmVteSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXQoeCwgeSkge1xuICAgICAgICAgIGVuZW15LmZsZWV0LmF0KHgsIHkpLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGF1dG8oKSB7XG4gICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgICAgZW5lbXkuZmxlZXQuYXQoeCwgeSkucmVjZWl2ZUF0dGFjayh4LCB5KTtcblxuICAgICAgICAgIGlmIChlbmVteS5mbGVldC5sYXRlc3RBdHRhY2tTdGF0dXMgPT09IFwiaWxsZWdhbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXV0b0FkZChzaGlwKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGZsZWV0LmF0KHgsIHkpLmFkZChzaGlwKTtcblxuICAgICAgaWYgKCFmbGVldC5zaGlwc0FycmF5LmluY2x1ZGVzKHNoaXApKSB7XG4gICAgICAgIHRoaXMuYXV0b0FkZChzaGlwKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgbGV0IHNoaXBBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChcIlwiKTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBzaGlwQXJyYXkgPSBbLi4uc2hpcEFycmF5XS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHBvc2l0aW9uID8gXCJoaXRcIiA6IGVsZW1lbnQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNIaXRBdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XVtwb3NpdGlvbl0gPT09IFwiaGl0XCI7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJoaXRcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgc2hpcEFycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzSGl0QXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCB7XFxuICB3aWR0aDogMzV2dztcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLXRvcDogMDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0OmhvdmVyLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsT0FBTztFQUNQLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyAucGxheWVyLW9uZS1nYW1lYm9hcmQsXFxuLmdhbWVib2FyZHMgLnBsYXllci10d28tZ2FtZWJvYXJkIHtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItdG9wOiAwO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQ6aG92ZXIsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdDpob3ZlciB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGFwcGVuZEdhbWVib2FyZHMgZnJvbSBcIi4vbW9kdWxlcy9Jbml0RE9NXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvR2FtZVwiO1xuXG5hcHBlbmRHYW1lYm9hcmRzKCk7XG4iXSwibmFtZXMiOlsiRE9NRmFjdG9yeSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZSIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJzZXRBdHRyaWJ1dGUiLCJTaGlwIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwicGxheWVyIiwiY29tcHV0ZXIiLCJhZGRQbGF5ZXJTaGlwcyIsImZsZWV0IiwiYXQiLCJhZGQiLCJhZGRDb21wdXRlclNoaXBzIiwiYXV0b0FkZCIsImFkZEFsbFNoaXBzIiwiYm9hcmQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaGlwc0FycmF5IiwibGF0ZXN0QXR0YWNrU3RhdHVzIiwiY2hlY2tJZlNoaXBDYW5CZUFkZGVkIiwieCIsInkiLCJzaGlwTGVuZ3RoIiwicmVxdWlyZWRTcGFjZSIsInNsaWNlIiwibGVuZ3RoIiwiZXZlcnkiLCJhZGRTaGlwSW5BcnJheSIsInNoaXAiLCJwdXNoIiwiYWRkU2hpcE9uQm9hcmQiLCJhdHRhY2tTaGlwIiwiaGl0UG9zaXRpb24iLCJ0YXJnZXRBcmVhIiwic2hpcExlZnRTaWRlIiwiZmlsdGVyIiwibmFtZSIsImlzSGl0QXQiLCJoaXQiLCJyZWNlaXZlQXR0YWNrIiwiYXJlQWxsU2hpcHNTdW5rIiwiaXNTdW5rIiwiY29tcHV0ZXJBdHRhY2siLCJhdHRhY2siLCJhdXRvIiwicGxheWVyQm9hcmQiLCJxdWVyeVNlbGVjdG9yIiwicm93IiwiY29sdW1uIiwiY2xhc3NMaXN0Iiwic2VuZEF0dGFja1NpZ25hbCIsImV2ZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsImFsZXJ0IiwiY3JlYXRlR2FtZWJvYXJkIiwicCIsImdyaWQiLCJjbGFzc05hbWUiLCJpIiwiaiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmQiLCJhcHBlbmRHYW1lYm9hcmRzIiwiZ2FtZWJvYXJkcyIsImVuZW15IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2hpcEFycmF5IiwicG9zaXRpb24iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=