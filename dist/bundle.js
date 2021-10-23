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

      column.addEventListener("click", sendAttackSignal);
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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard {\n  width: 35vw;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows {\n  border: 1px solid black;\n  flex: 1;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n  border-bottom: 0;\n  border-top: 0;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;EAEE,WAAW;EACX,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;;EAEE,uBAAuB;EACvB,OAAO;EACP,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;;EAEE,OAAO;EACP,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;EACpB,mBAAmB;AACrB","sourcesContent":[".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard {\n  width: 35vw;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows {\n  border: 1px solid black;\n  flex: 1;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n  border-bottom: 0;\n  border-top: 0;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBaUUsNERBQWdCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Jbml0RE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRE9NRmFjdG9yeSA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFuZXdFbGVtZW50W2F0dHJpYnV0ZV0pIHtcbiAgICAgIGlmIChhdHRyaWJ1dGUudG9TdHJpbmcoKS5pbmNsdWRlcyhcImRhdGFcIikpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLnRvU3RyaW5nKCksIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50W2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NRmFjdG9yeTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIiwgR2FtZWJvYXJkKCkpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiLCBHYW1lYm9hcmQoKSk7XG5cbmNvbnN0IGFkZFBsYXllclNoaXBzID0gKCkgPT4ge1xuICBwbGF5ZXIuZmxlZXQuYXQoMCwgMCkuYWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgcGxheWVyLmZsZWV0LmF0KDIsIDUpLmFkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgcGxheWVyLmZsZWV0LmF0KDYsIDIpLmFkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIHBsYXllci5mbGVldC5hdCg0LCA0KS5hZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIHBsYXllci5mbGVldC5hdCg5LCA3KS5hZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59O1xuXG5jb25zdCBhZGRDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59O1xuXG5jb25zdCBhZGRBbGxTaGlwcyA9ICgpID0+IHtcbiAgYWRkUGxheWVyU2hpcHMoKTtcbiAgYWRkQ29tcHV0ZXJTaGlwcygpO1xufTtcblxuYWRkQWxsU2hpcHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQWxsU2hpcHM7XG5leHBvcnQgeyBwbGF5ZXIsIGNvbXB1dGVyIH07XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwoXCJcIilcbiAgICAubWFwKChlbGVtZW50KSA9PiBBcnJheSgxMCkuZmlsbChlbGVtZW50KSk7XG5cbiAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuXG4gIGxldCBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcIlwiO1xuXG4gIGNvbnN0IGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCA9ICh4LCB5LCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFsuLi5ib2FyZF1beF0uc2xpY2UoeSwgeSArIHNoaXBMZW5ndGgpO1xuICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCAhPT0gc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwSW5BcnJheSA9IChzaGlwKSA9PiB7XG4gICAgc2hpcHNBcnJheS5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKHgsIHksIHNoaXApID0+IHtcbiAgICBib2FyZFt4XS5maWxsKHNoaXAsIHksIHkgKyBzaGlwLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkW3hdW3ldO1xuICAgIGxldCBoaXRQb3NpdGlvbiA9IDA7XG4gICAgLy8gZ2V0IGxlZnQgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3QgdGFyZ2V0QXJlYSA9IGJvYXJkW3hdLnNsaWNlKDAsIHkpO1xuICAgIC8vIGZpbHRlciB0byBnZXQgbGVmdCBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcExlZnRTaWRlID0gdGFyZ2V0QXJlYS5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcbiAgICBoaXRQb3NpdGlvbiA9IHNoaXBMZWZ0U2lkZS5sZW5ndGg7XG4gICAgaWYgKHNoaXAuaXNIaXRBdChoaXRQb3NpdGlvbikpIHtcbiAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaGlwLmhpdChoaXRQb3NpdGlvbik7XG4gICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICB9LFxuICAgIGdldCBzaGlwc0FycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XTtcbiAgICB9LFxuICAgIGdldCBsYXRlc3RBdHRhY2tTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0QXR0YWNrU3RhdHVzO1xuICAgIH0sXG4gICAgYXQoeCwgeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRkKHNoaXApIHtcbiAgICAgICAgICBpZiAoY2hlY2tJZlNoaXBDYW5CZUFkZGVkKHgsIHksIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgICAgYWRkU2hpcEluQXJyYXkoc2hpcCk7XG4gICAgICAgICAgICBhZGRTaGlwT25Cb2FyZCh4LCB5LCBzaGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgYXR0YWNrU2hpcCh4LCB5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09PSBcIlhcIikge1xuICAgICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJYXCI7XG4gICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBET01GYWN0b3J5IGZyb20gXCIuL0RPTUZhY3RvcnlcIjtcbmltcG9ydCB7IHBsYXllciwgY29tcHV0ZXIgfSBmcm9tIFwiLi9HYW1lXCI7XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xuICBjb25zdCBbeCwgeV0gPSBjb21wdXRlci5hdHRhY2socGxheWVyKS5hdXRvKCk7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItb25lLWdhbWVib2FyZFwiKTtcbiAgY29uc3Qgcm93ID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93cz1cIiR7eH1cIl1gKTtcbiAgY29uc3QgY29sdW1uID0gcm93LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbHVtbnM9XCIke3l9XCJdYCk7XG4gIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xufTtcblxuY29uc3Qgc2VuZEF0dGFja1NpZ25hbCA9IChldmVudCkgPT4ge1xuICBpZiAoXG4gICAgIWV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiLFxuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICBjb25zdCB4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpO1xuICBjb25zdCB5ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKTtcbiAgcGxheWVyLmF0dGFjayhjb21wdXRlcikuYXQoeCwgeSk7XG4gIGNvbXB1dGVyQXR0YWNrKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChwbGF5ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIGFsZXJ0KFwiY29tcHV0ZXIgd29uXCIpO1xuICAgIGlmIChjb21wdXRlci5mbGVldC5hcmVBbGxTaGlwc1N1bmsoKSkgYWxlcnQoXCJwbGF5ZXIgd29uXCIpO1xuICB9LCAwKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IChuYW1lLCBwKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IHAuZmxlZXQ7XG4gIGNvbnN0IGdyaWQgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBuYW1lIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd3NcIiwgXCJkYXRhLXJvd3NcIjogaSB9KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiY29sdW1uc1wiLFxuICAgICAgICBcImRhdGEtY29sdW1uc1wiOiBqLFxuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbHVtbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZEF0dGFja1NpZ25hbCk7XG4gICAgICByb3cuYXBwZW5kKGNvbHVtbik7XG4gICAgfVxuICAgIGdyaWQuYXBwZW5kKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBhcHBlbmRHYW1lYm9hcmRzID0gKCkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRzXCIpO1xuICBnYW1lYm9hcmRzLmFwcGVuZChjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXItb25lLWdhbWVib2FyZFwiLCBwbGF5ZXIpKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLXR3by1nYW1lYm9hcmRcIiwgY29tcHV0ZXIpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZEdhbWVib2FyZHM7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSwgZmxlZXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZsZWV0KCkge1xuICAgICAgcmV0dXJuIGZsZWV0O1xuICAgIH0sXG4gICAgYXR0YWNrKGVuZW15KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdCh4LCB5KSB7XG4gICAgICAgICAgZW5lbXkuZmxlZXQuYXQoeCwgeSkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXV0bygpIHtcbiAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgaWYgKGVuZW15LmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyA9PT0gXCJpbGxlZ2FsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG8oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhdXRvQWRkKHNoaXApIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgZmxlZXQuYXQoeCwgeSkuYWRkKHNoaXApO1xuXG4gICAgICBpZiAoIWZsZWV0LnNoaXBzQXJyYXkuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgICAgdGhpcy5hdXRvQWRkKHNoaXApO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICBsZXQgc2hpcEFycmF5ID0gQXJyYXkobGVuZ3RoKS5maWxsKFwiXCIpO1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHNoaXBBcnJheSA9IFsuLi5zaGlwQXJyYXldLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PT0gcG9zaXRpb24gPyBcImhpdFwiIDogZWxlbWVudDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc0hpdEF0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldW3Bvc2l0aW9uXSA9PT0gXCJoaXRcIjtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcImhpdFwiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIGdldCBzaGlwQXJyYXkoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBBcnJheV07XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNIaXRBdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyAucGxheWVyLW9uZS1nYW1lYm9hcmQsXFxuLmdhbWVib2FyZHMgLnBsYXllci10d28tZ2FtZWJvYXJkIHtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItdG9wOiAwO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBOztFQUVFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItb25lLWdhbWVib2FyZCxcXG4uZ2FtZWJvYXJkcyAucGxheWVyLXR3by1nYW1lYm9hcmQge1xcbiAgd2lkdGg6IDM1dnc7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAuY29sdW1ucyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLmNvbHVtbnMge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci10b3A6IDA7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgYXBwZW5kR2FtZWJvYXJkcyBmcm9tIFwiLi9tb2R1bGVzL0luaXRET01cIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9HYW1lXCI7XG5cbmFwcGVuZEdhbWVib2FyZHMoKTtcbiJdLCJuYW1lcyI6WyJET01GYWN0b3J5IiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJuZXdFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsInNldEF0dHJpYnV0ZSIsIlNoaXAiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJwbGF5ZXIiLCJjb21wdXRlciIsImFkZFBsYXllclNoaXBzIiwiZmxlZXQiLCJhdCIsImFkZCIsImFkZENvbXB1dGVyU2hpcHMiLCJhdXRvQWRkIiwiYWRkQWxsU2hpcHMiLCJib2FyZCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInNoaXBzQXJyYXkiLCJsYXRlc3RBdHRhY2tTdGF0dXMiLCJjaGVja0lmU2hpcENhbkJlQWRkZWQiLCJ4IiwieSIsInNoaXBMZW5ndGgiLCJyZXF1aXJlZFNwYWNlIiwic2xpY2UiLCJsZW5ndGgiLCJldmVyeSIsImFkZFNoaXBJbkFycmF5Iiwic2hpcCIsInB1c2giLCJhZGRTaGlwT25Cb2FyZCIsImF0dGFja1NoaXAiLCJoaXRQb3NpdGlvbiIsInRhcmdldEFyZWEiLCJzaGlwTGVmdFNpZGUiLCJmaWx0ZXIiLCJuYW1lIiwiaXNIaXRBdCIsImhpdCIsInJlY2VpdmVBdHRhY2siLCJhcmVBbGxTaGlwc1N1bmsiLCJpc1N1bmsiLCJjb21wdXRlckF0dGFjayIsImF0dGFjayIsImF1dG8iLCJwbGF5ZXJCb2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJyb3ciLCJjb2x1bW4iLCJjbGFzc0xpc3QiLCJzZW5kQXR0YWNrU2lnbmFsIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY29udGFpbnMiLCJnZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJjcmVhdGVHYW1lYm9hcmQiLCJwIiwiZ3JpZCIsImNsYXNzTmFtZSIsImkiLCJqIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZCIsImFwcGVuZEdhbWVib2FyZHMiLCJnYW1lYm9hcmRzIiwiZW5lbXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzaGlwQXJyYXkiLCJwb3NpdGlvbiIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==