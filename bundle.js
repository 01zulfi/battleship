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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

      if (board.length !== 0 && _typeof(board[i][j]) === "object") {
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

var renderInputModal = function renderInputModal() {
  var inputModalDiv = document.querySelector(".input-modal");
  var inputGrid = createGameboard("inputs-gameboard", []);
  inputModalDiv.append(inputGrid);
};

var inputShips = function inputShips() {
  var inputGrid = document.querySelector(".inputs-gameboard"); // const ships = [
  //   { name: "carrier", length: 5 },
  //   { name: "destroyer", length: 4 },
  //   { name: "cruiser", length: 3 },
  //   { name: "submarine", length: 3 },
  //   { name: "patrol", length: 2 },
  // ];

  _toConsumableArray(inputGrid.querySelectorAll(".columns")).forEach(function (cell) {
    return cell.addEventListener("mouseenter", function () {
      var column = Number(cell.getAttribute("data-columns"));
      var cells = [];

      for (var i = 0; i < 5; i += 1) {
        var col = cell.parentNode.querySelector("[data-columns=\"".concat(column + i, "\"]"));
        cells.push(col);
      }

      if (cells.some(function (item) {
        return item === null;
      })) {
        cell.classList.add("red");
        return;
      }

      if (cells.some(function (item) {
        return item.classList.contains("clicked");
      })) {
        cell.classList.add("red");
        return;
      }

      cells.forEach(function (item) {
        return item.classList.add("hover");
      });
    });
  });

  _toConsumableArray(inputGrid.querySelectorAll(".columns")).forEach(function (cell) {
    return cell.addEventListener("mouseleave", function () {
      var column = Number(cell.getAttribute("data-columns"));
      var cells = [];

      for (var i = 0; i < 5; i += 1) {
        var col = cell.parentNode.querySelector("[data-columns=\"".concat(column + i, "\"]"));
        cells.push(col);
      }

      if (cells.some(function (item) {
        return item === null;
      })) {
        cell.classList.remove("red");
        return;
      }

      if (cells.some(function (item) {
        return item.classList.contains("clicked");
      })) {
        cell.classList.remove("red");
      }

      cells.forEach(function (item) {
        return item.classList.remove("hover");
      });
    });
  });

  inputGrid.addEventListener("click", function (event) {
    if (!event.target.classList.contains("columns")) return;
    if (!event.target.classList.contains("hover")) return;
    if (event.target.classList.contains("clicked")) return;
    var required = inputGrid.querySelectorAll(".columns.hover");
    required.forEach(function (item) {
      return item.classList.add("clicked");
    });
  });
};

var DOMModuleObject = {
  execute: function execute() {
    renderInputModal();
    inputShips();
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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboards,\ndiv.input-modal {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.input-modal {\n  margin: 20px;\n}\n\n.hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.clicked {\n  background-color: gray;\n}\n\n.red {\n  background-color: red;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 38vw;\n  aspect-ratio: 1;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns,\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;;EAGE,WAAW;EACX,eAAe;EACf,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;;;EAGE,OAAO;EACP,QAAQ;EACR,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;;;EAGE,OAAO;EACP,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":[".gameboards,\ndiv.input-modal {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.input-modal {\n  margin: 20px;\n}\n\n.hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.clicked {\n  background-color: gray;\n}\n\n.red {\n  background-color: red;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 38vw;\n  aspect-ratio: 1;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns,\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQVgsNERBQUE7QUFDQTZCLDZEQUFBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01GYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01GYWN0b3J5IGZyb20gXCIuL0RPTUZhY3RvcnlcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vUHVic3ViXCI7XG5cbmNvbnN0IHJlY2VpdmVDb21wdXRlckF0dGFjayA9IChbeCwgeV0pID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vbmUtZ2FtZWJvYXJkXCIpO1xuICBjb25zdCByb3cgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dzPVwiJHt4fVwiXWApO1xuICBjb25zdCBjb2x1bW4gPSByb3cucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sdW1ucz1cIiR7eX1cIl1gKTtcbiAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG59O1xuXG5jb25zdCBzZW5kUGxheWVyQXR0YWNrID0gKGV2ZW50KSA9PiB7XG4gIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbHVtbnNcIikpIHJldHVybjtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gIGNvbnN0IHggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd3NcIik7XG4gIGNvbnN0IHkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpO1xuICBwdWJzdWIucHVibGlzaChcInBsYXllci1hdHRhY2stc2hpcFwiLCBbeCwgeV0pO1xufTtcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKG5hbWUsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBuYW1lIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd3NcIiwgXCJkYXRhLXJvd3NcIjogaSB9KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiY29sdW1uc1wiLFxuICAgICAgICBcImRhdGEtY29sdW1uc1wiOiBqLFxuICAgICAgfSk7XG4gICAgICBpZiAoYm9hcmQubGVuZ3RoICE9PSAwICYmIHR5cGVvZiBib2FyZFtpXVtqXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKGNvbHVtbik7XG4gICAgfVxuICAgIGdyaWQuYXBwZW5kKHJvdyk7XG4gIH1cbiAgaWYgKG5hbWUgPT09IFwicGxheWVyLXR3by1nYW1lYm9hcmRcIikge1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRQbGF5ZXJBdHRhY2spO1xuICB9XG4gIHJldHVybiBncmlkO1xufTtcblxuY29uc3QgYXBwZW5kR2FtZWJvYXJkcyA9IChbcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmRdKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZHNcIik7XG4gIGdhbWVib2FyZHMuYXBwZW5kKGNyZWF0ZUdhbWVib2FyZChcInBsYXllci1vbmUtZ2FtZWJvYXJkXCIsIHBsYXllckJvYXJkKSk7XG4gIGdhbWVib2FyZHMuYXBwZW5kKGNyZWF0ZUdhbWVib2FyZChcInBsYXllci10d28tZ2FtZWJvYXJkXCIsIGNvbXB1dGVyQm9hcmQpKTtcbn07XG5cbmNvbnN0IHNob3dBbGVydCA9ICh2aWN0b3IpID0+IHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHdvLWdhbWVib2FyZFwiKVxuICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIGFsZXJ0KHZpY3Rvcik7XG59O1xuXG5jb25zdCByZW5kZXJJbnB1dE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dE1vZGFsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1tb2RhbFwiKTtcbiAgY29uc3QgaW5wdXRHcmlkID0gY3JlYXRlR2FtZWJvYXJkKFwiaW5wdXRzLWdhbWVib2FyZFwiLCBbXSk7XG4gIGlucHV0TW9kYWxEaXYuYXBwZW5kKGlucHV0R3JpZCk7XG59O1xuXG5jb25zdCBpbnB1dFNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0cy1nYW1lYm9hcmRcIik7XG4gIC8vIGNvbnN0IHNoaXBzID0gW1xuICAvLyAgIHsgbmFtZTogXCJjYXJyaWVyXCIsIGxlbmd0aDogNSB9LFxuICAvLyAgIHsgbmFtZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiA0IH0sXG4gIC8vICAgeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzIH0sXG4gIC8vICAgeyBuYW1lOiBcInN1Ym1hcmluZVwiLCBsZW5ndGg6IDMgfSxcbiAgLy8gICB7IG5hbWU6IFwicGF0cm9sXCIsIGxlbmd0aDogMiB9LFxuICAvLyBdO1xuICBbLi4uaW5wdXRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1uc1wiKV0uZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY29sID0gY2VsbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLWNvbHVtbnM9XCIke2NvbHVtbiArIGl9XCJdYCxcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbHMucHVzaChjb2wpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IG51bGwpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xpY2tlZFwiKSkpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKSk7XG4gICAgfSksXG4gICk7XG4gIFsuLi5pbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zXCIpXS5mb3JFYWNoKChjZWxsKSA9PlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgY29sdW1uID0gTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjb2wgPSBjZWxsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtY29sdW1ucz1cIiR7Y29sdW1uICsgaX1cIl1gLFxuICAgICAgICApO1xuICAgICAgICBjZWxscy5wdXNoKGNvbCk7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbSA9PT0gbnVsbCkpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwicmVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJjbGlja2VkXCIpKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgICB9XG4gICAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKSk7XG4gICAgfSksXG4gICk7XG4gIGlucHV0R3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sdW1uc1wiKSkgcmV0dXJuO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhvdmVyXCIpKSByZXR1cm47XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjbGlja2VkXCIpKSByZXR1cm47XG4gICAgY29uc3QgcmVxdWlyZWQgPSBpbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zLmhvdmVyXCIpO1xuICAgIHJlcXVpcmVkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIikpO1xuICB9KTtcbn07XG5cbmNvbnN0IERPTU1vZHVsZU9iamVjdCA9IHtcbiAgZXhlY3V0ZSgpIHtcbiAgICByZW5kZXJJbnB1dE1vZGFsKCk7XG4gICAgaW5wdXRTaGlwcygpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJmbGVldHMtaW5pdGlhbGl6ZWRcIiwgYXBwZW5kR2FtZWJvYXJkcyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImNvbXB1dGVyLWF0dGFjay1zaGlwXCIsIHJlY2VpdmVDb21wdXRlckF0dGFjayk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImdhbWUtZW5kXCIsIHNob3dBbGVydCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBET01Nb2R1bGVPYmplY3Q7XG4iLCJjb25zdCBET01GYWN0b3J5ID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGZvciAoY29uc3QgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIW5ld0VsZW1lbnRbYXR0cmlidXRlXSkge1xuICAgICAgaWYgKGF0dHJpYnV0ZS50b1N0cmluZygpLmluY2x1ZGVzKFwiZGF0YVwiKSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUudG9TdHJpbmcoKSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VsZW1lbnRbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBET01GYWN0b3J5O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL1B1YnN1YlwiO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIiwgR2FtZWJvYXJkKCkpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiLCBHYW1lYm9hcmQoKSk7XG5cbmNvbnN0IGFkZFBsYXllclNoaXBzID0gKCkgPT4ge1xuICBwbGF5ZXIuZmxlZXQuYXQoMCwgMCkuYWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgcGxheWVyLmZsZWV0LmF0KDIsIDUpLmFkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgcGxheWVyLmZsZWV0LmF0KDYsIDIpLmFkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIHBsYXllci5mbGVldC5hdCg0LCA0KS5hZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIHBsYXllci5mbGVldC5hdCg5LCA3KS5hZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59O1xuXG5jb25zdCBhZGRDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59O1xuXG5jb25zdCBhZGRBbGxTaGlwcyA9ICgpID0+IHtcbiAgYWRkUGxheWVyU2hpcHMoKTtcbiAgYWRkQ29tcHV0ZXJTaGlwcygpO1xufTtcblxuY29uc3QgY29tcHV0ZXJBdHRhY2tTaGlwID0gKCkgPT4ge1xuICBjb25zdCBbeDEsIHkxXSA9IGNvbXB1dGVyLmF0dGFjayhwbGF5ZXIpLmF1dG8oKTtcbiAgcHVic3ViLnB1Ymxpc2goXCJjb21wdXRlci1hdHRhY2stc2hpcFwiLCBbeDEsIHkxXSk7XG4gIGlmIChwbGF5ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBwdWJzdWIucHVibGlzaChcImdhbWUtZW5kXCIsIFwiY29tcHV0ZXIgd29uXCIpO1xuICB9XG59O1xuXG5jb25zdCBwbGF5ZXJBdHRhY2tTaGlwID0gKFt4LCB5XSkgPT4ge1xuICBwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyKS5hdCh4LCB5KTtcbiAgaWYgKGNvbXB1dGVyLmZsZWV0LmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJnYW1lLWVuZFwiLCBcInBsYXllciB3b25cIik7XG4gIH1cbiAgY29tcHV0ZXJBdHRhY2tTaGlwKCk7XG59O1xuXG5jb25zdCBnYW1lTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIGFkZEFsbFNoaXBzKCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJmbGVldHMtaW5pdGlhbGl6ZWRcIiwgW1xuICAgICAgcGxheWVyLmZsZWV0LmJvYXJkLFxuICAgICAgY29tcHV0ZXIuZmxlZXQuYm9hcmQsXG4gICAgXSk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInBsYXllci1hdHRhY2stc2hpcFwiLCBwbGF5ZXJBdHRhY2tTaGlwKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVNb2R1bGVPYmplY3Q7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwoXCJcIilcbiAgICAubWFwKChlbGVtZW50KSA9PiBBcnJheSgxMCkuZmlsbChlbGVtZW50KSk7XG5cbiAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuXG4gIGxldCBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcIlwiO1xuXG4gIGNvbnN0IGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCA9ICh4LCB5LCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFsuLi5ib2FyZF1beF0uc2xpY2UoeSwgeSArIHNoaXBMZW5ndGgpO1xuICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCAhPT0gc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwSW5BcnJheSA9IChzaGlwKSA9PiB7XG4gICAgc2hpcHNBcnJheS5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKHgsIHksIHNoaXApID0+IHtcbiAgICBib2FyZFt4XS5maWxsKHNoaXAsIHksIHkgKyBzaGlwLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkW3hdW3ldO1xuICAgIGxldCBoaXRQb3NpdGlvbiA9IDA7XG4gICAgLy8gZ2V0IGxlZnQgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3QgdGFyZ2V0QXJlYSA9IGJvYXJkW3hdLnNsaWNlKDAsIHkpO1xuICAgIC8vIGZpbHRlciB0byBnZXQgbGVmdCBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcExlZnRTaWRlID0gdGFyZ2V0QXJlYS5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcbiAgICBoaXRQb3NpdGlvbiA9IHNoaXBMZWZ0U2lkZS5sZW5ndGg7XG4gICAgaWYgKHNoaXAuaXNIaXRBdChoaXRQb3NpdGlvbikpIHtcbiAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaGlwLmhpdChoaXRQb3NpdGlvbik7XG4gICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICB9LFxuICAgIGdldCBzaGlwc0FycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XTtcbiAgICB9LFxuICAgIGdldCBsYXRlc3RBdHRhY2tTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0QXR0YWNrU3RhdHVzO1xuICAgIH0sXG4gICAgYXQoeCwgeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRkKHNoaXApIHtcbiAgICAgICAgICBpZiAoY2hlY2tJZlNoaXBDYW5CZUFkZGVkKHgsIHksIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgICAgYWRkU2hpcEluQXJyYXkoc2hpcCk7XG4gICAgICAgICAgICBhZGRTaGlwT25Cb2FyZCh4LCB5LCBzaGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgYXR0YWNrU2hpcCh4LCB5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09PSBcIlhcIikge1xuICAgICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJYXCI7XG4gICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IChuYW1lLCBmbGVldCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgZmxlZXQoKSB7XG4gICAgICByZXR1cm4gZmxlZXQ7XG4gICAgfSxcbiAgICBhdHRhY2soZW5lbXkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF0KHgsIHkpIHtcbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB9LFxuICAgICAgICBhdXRvKCkge1xuICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAgIGVuZW15LmZsZWV0LmF0KHgsIHkpLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgICAgICAgICBpZiAoZW5lbXkuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzID09PSBcImlsbGVnYWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0bygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGF1dG9BZGQoc2hpcCkge1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBmbGVldC5hdCh4LCB5KS5hZGQoc2hpcCk7XG5cbiAgICAgIGlmICghZmxlZXQuc2hpcHNBcnJheS5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICB0aGlzLmF1dG9BZGQoc2hpcCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAocHVic3ViLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGRhdGEpKTtcbiAgICB9XG4gIH0sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwdWJzdWI7XG4iLCJjb25zdCBTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICBsZXQgc2hpcEFycmF5ID0gQXJyYXkobGVuZ3RoKS5maWxsKFwiXCIpO1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHNoaXBBcnJheSA9IFsuLi5zaGlwQXJyYXldLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PT0gcG9zaXRpb24gPyBcImhpdFwiIDogZWxlbWVudDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc0hpdEF0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldW3Bvc2l0aW9uXSA9PT0gXCJoaXRcIjtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcImhpdFwiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIGdldCBzaGlwQXJyYXkoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBBcnJheV07XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNIaXRBdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkcyxcXG5kaXYuaW5wdXQtbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjYpO1xcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCxcXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICB3aWR0aDogMzh2dztcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyxcXG4uaW5wdXRzLWdhbWVib2FyZCAucm93cyB7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxPQUFPO0VBQ1AsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZHMsXFxuZGl2LmlucHV0LW1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5pbnB1dC1tb2RhbCB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItb25lLWdhbWVib2FyZCxcXG4uZ2FtZWJvYXJkcyAucGxheWVyLXR3by1nYW1lYm9hcmQsXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgd2lkdGg6IDM4dnc7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MsXFxuLmlucHV0cy1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgZmxleDogMTtcXG4gIGdhcDogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyxcXG4uaW5wdXRzLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBnYW1lTW9kdWxlT2JqZWN0IGZyb20gXCIuL21vZHVsZXMvR2FtZVwiO1xuaW1wb3J0IERPTU1vZHVsZU9iamVjdCBmcm9tIFwiLi9tb2R1bGVzL0RPTVwiO1xuXG5ET01Nb2R1bGVPYmplY3QuZXhlY3V0ZSgpO1xuZ2FtZU1vZHVsZU9iamVjdC5leGVjdXRlKCk7XG4iXSwibmFtZXMiOlsiRE9NRmFjdG9yeSIsInB1YnN1YiIsInJlY2VpdmVDb21wdXRlckF0dGFjayIsIngiLCJ5IiwicGxheWVyQm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyb3ciLCJjb2x1bW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJzZW5kUGxheWVyQXR0YWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJnZXRBdHRyaWJ1dGUiLCJwdWJsaXNoIiwiY3JlYXRlR2FtZWJvYXJkIiwibmFtZSIsImJvYXJkIiwiZ3JpZCIsImNsYXNzTmFtZSIsImkiLCJqIiwibGVuZ3RoIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZEdhbWVib2FyZHMiLCJjb21wdXRlckJvYXJkIiwiZ2FtZWJvYXJkcyIsInNob3dBbGVydCIsInZpY3RvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhbGVydCIsInJlbmRlcklucHV0TW9kYWwiLCJpbnB1dE1vZGFsRGl2IiwiaW5wdXRHcmlkIiwiaW5wdXRTaGlwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2VsbCIsIk51bWJlciIsImNlbGxzIiwiY29sIiwicHVzaCIsInNvbWUiLCJpdGVtIiwicmVtb3ZlIiwicmVxdWlyZWQiLCJET01Nb2R1bGVPYmplY3QiLCJleGVjdXRlIiwic3Vic2NyaWJlIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZSIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJzZXRBdHRyaWJ1dGUiLCJTaGlwIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwicGxheWVyIiwiY29tcHV0ZXIiLCJhZGRQbGF5ZXJTaGlwcyIsImZsZWV0IiwiYXQiLCJhZGRDb21wdXRlclNoaXBzIiwiYXV0b0FkZCIsImFkZEFsbFNoaXBzIiwiY29tcHV0ZXJBdHRhY2tTaGlwIiwiYXR0YWNrIiwiYXV0byIsIngxIiwieTEiLCJhcmVBbGxTaGlwc1N1bmsiLCJwbGF5ZXJBdHRhY2tTaGlwIiwiZ2FtZU1vZHVsZU9iamVjdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInNoaXBzQXJyYXkiLCJsYXRlc3RBdHRhY2tTdGF0dXMiLCJjaGVja0lmU2hpcENhbkJlQWRkZWQiLCJzaGlwTGVuZ3RoIiwicmVxdWlyZWRTcGFjZSIsInNsaWNlIiwiZXZlcnkiLCJhZGRTaGlwSW5BcnJheSIsInNoaXAiLCJhZGRTaGlwT25Cb2FyZCIsImF0dGFja1NoaXAiLCJoaXRQb3NpdGlvbiIsInRhcmdldEFyZWEiLCJzaGlwTGVmdFNpZGUiLCJmaWx0ZXIiLCJpc0hpdEF0IiwiaGl0IiwicmVjZWl2ZUF0dGFjayIsImlzU3VuayIsImVuZW15IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZXZlbnRzIiwiZXZlbnROYW1lIiwiZGF0YSIsImNhbGxiYWNrIiwiaXNBcnJheSIsInNoaXBBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9