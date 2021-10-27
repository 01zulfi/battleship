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
  var inputGrid = document.querySelector(".inputs-gameboard");

  var columns = _toConsumableArray(inputGrid.querySelectorAll(".columns")); // const inputShipData = [];


  var mouseenterCallback = function mouseenterCallback(event) {
    var column = Number(event.target.getAttribute("data-columns"));
    var cells = [];

    for (var i = 0; i < event.currentTarget.shipLength; i += 1) {
      var col = event.target.parentNode.querySelector("[data-columns=\"".concat(column + i, "\"]"));
      cells.push(col);
    }

    if (cells.some(function (item) {
      return item === null;
    })) {
      event.target.classList.add("red");
      return;
    }

    if (cells.some(function (item) {
      return item.classList.contains("ship");
    })) {
      event.target.classList.add("red");
      return;
    }

    cells.forEach(function (item) {
      return item.classList.add("hover");
    });
  };

  var mouseleaveCallback = function mouseleaveCallback(event) {
    event.target.classList.remove("red");
    document.querySelectorAll(".columns").forEach(function (item) {
      return item.classList.remove("hover");
    });
  };

  var ships = [{
    name: "carrier",
    length: 5,
    added: false
  }, {
    name: "destroyer",
    length: 4,
    added: false
  }, {
    name: "cruiser",
    length: 3,
    added: false
  }, {
    name: "submarine",
    length: 3,
    added: false
  }, {
    name: "patrol",
    length: 2,
    added: false
  }];

  var clickCallback = function clickCallback(event) {
    if (event.target.classList.contains("red")) return;
    var shipToAdd = ships.find(function (ship) {
      return !ship.added;
    });

    if (shipToAdd.length === 2) {
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallback);
      });
    }

    if (!shipToAdd) return;
    var shipToAddIndex = ships.indexOf(shipToAdd);
    shipToAdd.added = true;
    console.log({
      shipToAdd: shipToAdd,
      ships: ships
    });
    var required = inputGrid.querySelectorAll(".columns.hover");
    required.forEach(function (item) {
      return item.classList.add("ship");
    });
    required.forEach(function (item) {
      return item.classList.add(shipToAdd.name);
    });
    if (!ships[shipToAddIndex + 1]) return;
    columns.forEach(function (cell) {
      return cell.shipLength = ships[shipToAddIndex + 1].length;
    });
  };

  columns.forEach(function (cell) {
    return cell.shipLength = 5;
  });
  columns.forEach(function (cell) {
    return cell.addEventListener("mouseenter", mouseenterCallback);
  });
  columns.forEach(function (cell) {
    return cell.addEventListener("mouseleave", mouseleaveCallback);
  });
  inputGrid.addEventListener("click", clickCallback);
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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboards,\ndiv.input-modal {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.input-modal {\n  margin: 20px;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: red;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 38vw;\n  aspect-ratio: 1;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns,\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;;;EAGE,WAAW;EACX,eAAe;EACf,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;;;EAGE,OAAO;EACP,QAAQ;EACR,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;;;EAGE,OAAO;EACP,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":[".gameboards,\ndiv.input-modal {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.input-modal {\n  margin: 20px;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: red;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 38vw;\n  aspect-ratio: 1;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns,\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQVgsNERBQUE7QUFDQTZCLDZEQUFBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01GYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUHVic3ViLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01GYWN0b3J5IGZyb20gXCIuL0RPTUZhY3RvcnlcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vUHVic3ViXCI7XG5cbmNvbnN0IHJlY2VpdmVDb21wdXRlckF0dGFjayA9IChbeCwgeV0pID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vbmUtZ2FtZWJvYXJkXCIpO1xuICBjb25zdCByb3cgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dzPVwiJHt4fVwiXWApO1xuICBjb25zdCBjb2x1bW4gPSByb3cucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sdW1ucz1cIiR7eX1cIl1gKTtcbiAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG59O1xuXG5jb25zdCBzZW5kUGxheWVyQXR0YWNrID0gKGV2ZW50KSA9PiB7XG4gIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbHVtbnNcIikpIHJldHVybjtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gIGNvbnN0IHggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd3NcIik7XG4gIGNvbnN0IHkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpO1xuICBwdWJzdWIucHVibGlzaChcInBsYXllci1hdHRhY2stc2hpcFwiLCBbeCwgeV0pO1xufTtcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKG5hbWUsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBuYW1lIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBET01GYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd3NcIiwgXCJkYXRhLXJvd3NcIjogaSB9KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IERPTUZhY3RvcnkoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiY29sdW1uc1wiLFxuICAgICAgICBcImRhdGEtY29sdW1uc1wiOiBqLFxuICAgICAgfSk7XG4gICAgICBpZiAoYm9hcmQubGVuZ3RoICE9PSAwICYmIHR5cGVvZiBib2FyZFtpXVtqXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKGNvbHVtbik7XG4gICAgfVxuICAgIGdyaWQuYXBwZW5kKHJvdyk7XG4gIH1cbiAgaWYgKG5hbWUgPT09IFwicGxheWVyLXR3by1nYW1lYm9hcmRcIikge1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRQbGF5ZXJBdHRhY2spO1xuICB9XG4gIHJldHVybiBncmlkO1xufTtcblxuY29uc3QgYXBwZW5kR2FtZWJvYXJkcyA9IChbcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmRdKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVib2FyZHNcIik7XG4gIGdhbWVib2FyZHMuYXBwZW5kKGNyZWF0ZUdhbWVib2FyZChcInBsYXllci1vbmUtZ2FtZWJvYXJkXCIsIHBsYXllckJvYXJkKSk7XG4gIGdhbWVib2FyZHMuYXBwZW5kKGNyZWF0ZUdhbWVib2FyZChcInBsYXllci10d28tZ2FtZWJvYXJkXCIsIGNvbXB1dGVyQm9hcmQpKTtcbn07XG5cbmNvbnN0IHNob3dBbGVydCA9ICh2aWN0b3IpID0+IHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHdvLWdhbWVib2FyZFwiKVxuICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIGFsZXJ0KHZpY3Rvcik7XG59O1xuXG5jb25zdCByZW5kZXJJbnB1dE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dE1vZGFsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1tb2RhbFwiKTtcbiAgY29uc3QgaW5wdXRHcmlkID0gY3JlYXRlR2FtZWJvYXJkKFwiaW5wdXRzLWdhbWVib2FyZFwiLCBbXSk7XG4gIGlucHV0TW9kYWxEaXYuYXBwZW5kKGlucHV0R3JpZCk7XG59O1xuXG5jb25zdCBpbnB1dFNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0cy1nYW1lYm9hcmRcIik7XG4gIGNvbnN0IGNvbHVtbnMgPSBbLi4uaW5wdXRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1uc1wiKV07XG4gIC8vIGNvbnN0IGlucHV0U2hpcERhdGEgPSBbXTtcblxuICBjb25zdCBtb3VzZWVudGVyQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb2wgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1ucz1cIiR7Y29sdW1uICsgaX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNlbGxzLnB1c2goY29sKTtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IG51bGwpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VsZWF2ZUNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnNcIilcbiAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3Qgc2hpcHMgPSBbXG4gICAgeyBuYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1LCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwiZGVzdHJveWVyXCIsIGxlbmd0aDogNCwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInBhdHJvbFwiLCBsZW5ndGg6IDIsIGFkZGVkOiBmYWxzZSB9LFxuICBdO1xuXG4gIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlZFwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNoaXBUb0FkZCA9IHNoaXBzLmZpbmQoKHNoaXApID0+ICFzaGlwLmFkZGVkKTtcbiAgICBpZiAoc2hpcFRvQWRkLmxlbmd0aCA9PT0gMikge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFjayksXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXNoaXBUb0FkZCkgcmV0dXJuO1xuICAgIGNvbnN0IHNoaXBUb0FkZEluZGV4ID0gc2hpcHMuaW5kZXhPZihzaGlwVG9BZGQpO1xuICAgIHNoaXBUb0FkZC5hZGRlZCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coeyBzaGlwVG9BZGQsIHNoaXBzIH0pO1xuICAgIGNvbnN0IHJlcXVpcmVkID0gaW5wdXRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1ucy5ob3ZlclwiKTtcbiAgICByZXF1aXJlZC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpKTtcbiAgICByZXF1aXJlZC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoc2hpcFRvQWRkLm5hbWUpKTtcbiAgICBpZiAoIXNoaXBzW3NoaXBUb0FkZEluZGV4ICsgMV0pIHJldHVybjtcbiAgICBjb2x1bW5zLmZvckVhY2goXG4gICAgICAoY2VsbCkgPT4gKGNlbGwuc2hpcExlbmd0aCA9IHNoaXBzW3NoaXBUb0FkZEluZGV4ICsgMV0ubGVuZ3RoKSxcbiAgICApO1xuICB9O1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT4gKGNlbGwuc2hpcExlbmd0aCA9IDUpKTtcblxuICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2spLFxuICApO1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1vdXNlbGVhdmVDYWxsYmFjayksXG4gICk7XG5cbiAgaW5wdXRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0NhbGxiYWNrKTtcbn07XG5cbmNvbnN0IERPTU1vZHVsZU9iamVjdCA9IHtcbiAgZXhlY3V0ZSgpIHtcbiAgICByZW5kZXJJbnB1dE1vZGFsKCk7XG4gICAgaW5wdXRTaGlwcygpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJmbGVldHMtaW5pdGlhbGl6ZWRcIiwgYXBwZW5kR2FtZWJvYXJkcyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImNvbXB1dGVyLWF0dGFjay1zaGlwXCIsIHJlY2VpdmVDb21wdXRlckF0dGFjayk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImdhbWUtZW5kXCIsIHNob3dBbGVydCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBET01Nb2R1bGVPYmplY3Q7XG4iLCJjb25zdCBET01GYWN0b3J5ID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGZvciAoY29uc3QgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIW5ld0VsZW1lbnRbYXR0cmlidXRlXSkge1xuICAgICAgaWYgKGF0dHJpYnV0ZS50b1N0cmluZygpLmluY2x1ZGVzKFwiZGF0YVwiKSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUudG9TdHJpbmcoKSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VsZW1lbnRbYXR0cmlidXRlXSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBET01GYWN0b3J5O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL1B1YnN1YlwiO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIiwgR2FtZWJvYXJkKCkpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiLCBHYW1lYm9hcmQoKSk7XG5cbmNvbnN0IGFkZFBsYXllclNoaXBzID0gKCkgPT4ge1xuICBwbGF5ZXIuZmxlZXQuYXQoMCwgMCkuYWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgcGxheWVyLmZsZWV0LmF0KDIsIDUpLmFkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgcGxheWVyLmZsZWV0LmF0KDYsIDIpLmFkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIHBsYXllci5mbGVldC5hdCg0LCA0KS5hZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIHBsYXllci5mbGVldC5hdCg5LCA3KS5hZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59O1xuXG5jb25zdCBhZGRDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59O1xuXG5jb25zdCBhZGRBbGxTaGlwcyA9ICgpID0+IHtcbiAgYWRkUGxheWVyU2hpcHMoKTtcbiAgYWRkQ29tcHV0ZXJTaGlwcygpO1xufTtcblxuY29uc3QgY29tcHV0ZXJBdHRhY2tTaGlwID0gKCkgPT4ge1xuICBjb25zdCBbeDEsIHkxXSA9IGNvbXB1dGVyLmF0dGFjayhwbGF5ZXIpLmF1dG8oKTtcbiAgcHVic3ViLnB1Ymxpc2goXCJjb21wdXRlci1hdHRhY2stc2hpcFwiLCBbeDEsIHkxXSk7XG4gIGlmIChwbGF5ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBwdWJzdWIucHVibGlzaChcImdhbWUtZW5kXCIsIFwiY29tcHV0ZXIgd29uXCIpO1xuICB9XG59O1xuXG5jb25zdCBwbGF5ZXJBdHRhY2tTaGlwID0gKFt4LCB5XSkgPT4ge1xuICBwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyKS5hdCh4LCB5KTtcbiAgaWYgKGNvbXB1dGVyLmZsZWV0LmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJnYW1lLWVuZFwiLCBcInBsYXllciB3b25cIik7XG4gIH1cbiAgY29tcHV0ZXJBdHRhY2tTaGlwKCk7XG59O1xuXG5jb25zdCBnYW1lTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIGFkZEFsbFNoaXBzKCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJmbGVldHMtaW5pdGlhbGl6ZWRcIiwgW1xuICAgICAgcGxheWVyLmZsZWV0LmJvYXJkLFxuICAgICAgY29tcHV0ZXIuZmxlZXQuYm9hcmQsXG4gICAgXSk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInBsYXllci1hdHRhY2stc2hpcFwiLCBwbGF5ZXJBdHRhY2tTaGlwKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVNb2R1bGVPYmplY3Q7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwoXCJcIilcbiAgICAubWFwKChlbGVtZW50KSA9PiBBcnJheSgxMCkuZmlsbChlbGVtZW50KSk7XG5cbiAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuXG4gIGxldCBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcIlwiO1xuXG4gIGNvbnN0IGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCA9ICh4LCB5LCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFsuLi5ib2FyZF1beF0uc2xpY2UoeSwgeSArIHNoaXBMZW5ndGgpO1xuICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCAhPT0gc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwSW5BcnJheSA9IChzaGlwKSA9PiB7XG4gICAgc2hpcHNBcnJheS5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKHgsIHksIHNoaXApID0+IHtcbiAgICBib2FyZFt4XS5maWxsKHNoaXAsIHksIHkgKyBzaGlwLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkW3hdW3ldO1xuICAgIGxldCBoaXRQb3NpdGlvbiA9IDA7XG4gICAgLy8gZ2V0IGxlZnQgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3QgdGFyZ2V0QXJlYSA9IGJvYXJkW3hdLnNsaWNlKDAsIHkpO1xuICAgIC8vIGZpbHRlciB0byBnZXQgbGVmdCBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcExlZnRTaWRlID0gdGFyZ2V0QXJlYS5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcbiAgICBoaXRQb3NpdGlvbiA9IHNoaXBMZWZ0U2lkZS5sZW5ndGg7XG4gICAgaWYgKHNoaXAuaXNIaXRBdChoaXRQb3NpdGlvbikpIHtcbiAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaGlwLmhpdChoaXRQb3NpdGlvbik7XG4gICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICB9LFxuICAgIGdldCBzaGlwc0FycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XTtcbiAgICB9LFxuICAgIGdldCBsYXRlc3RBdHRhY2tTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gbGF0ZXN0QXR0YWNrU3RhdHVzO1xuICAgIH0sXG4gICAgYXQoeCwgeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRkKHNoaXApIHtcbiAgICAgICAgICBpZiAoY2hlY2tJZlNoaXBDYW5CZUFkZGVkKHgsIHksIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgICAgYWRkU2hpcEluQXJyYXkoc2hpcCk7XG4gICAgICAgICAgICBhZGRTaGlwT25Cb2FyZCh4LCB5LCBzaGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2soKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgYXR0YWNrU2hpcCh4LCB5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJvYXJkW3hdW3ldID09PSBcIlhcIikge1xuICAgICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJYXCI7XG4gICAgICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzXCI7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IChuYW1lLCBmbGVldCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgZmxlZXQoKSB7XG4gICAgICByZXR1cm4gZmxlZXQ7XG4gICAgfSxcbiAgICBhdHRhY2soZW5lbXkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF0KHgsIHkpIHtcbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB9LFxuICAgICAgICBhdXRvKCkge1xuICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAgIGVuZW15LmZsZWV0LmF0KHgsIHkpLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgICAgICAgICBpZiAoZW5lbXkuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzID09PSBcImlsbGVnYWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0bygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGF1dG9BZGQoc2hpcCkge1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBmbGVldC5hdCh4LCB5KS5hZGQoc2hpcCk7XG5cbiAgICAgIGlmICghZmxlZXQuc2hpcHNBcnJheS5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICB0aGlzLmF1dG9BZGQoc2hpcCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAocHVic3ViLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGRhdGEpKTtcbiAgICB9XG4gIH0sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwdWJzdWI7XG4iLCJjb25zdCBTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICBsZXQgc2hpcEFycmF5ID0gQXJyYXkobGVuZ3RoKS5maWxsKFwiXCIpO1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHNoaXBBcnJheSA9IFsuLi5zaGlwQXJyYXldLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PT0gcG9zaXRpb24gPyBcImhpdFwiIDogZWxlbWVudDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc0hpdEF0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldW3Bvc2l0aW9uXSA9PT0gXCJoaXRcIjtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcImhpdFwiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIGdldCBzaGlwQXJyYXkoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBBcnJheV07XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNIaXRBdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkcyxcXG5kaXYuaW5wdXQtbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVkLFxcbi5pbnB1dC1tb2RhbCAucmVkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyAucGxheWVyLW9uZS1nYW1lYm9hcmQsXFxuLmdhbWVib2FyZHMgLnBsYXllci10d28tZ2FtZWJvYXJkLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIHdpZHRoOiAzOHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5yb3dzIHtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAuY29sdW1ucyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLmlucHV0cy1nYW1lYm9hcmQgLmNvbHVtbnMge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxPQUFPO0VBQ1AsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZHMsXFxuZGl2LmlucHV0LW1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5pbnB1dC1tb2RhbCB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNik7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnJlZCxcXG4uaW5wdXQtbW9kYWwgLnJlZC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCxcXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICB3aWR0aDogMzh2dztcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyxcXG4uaW5wdXRzLWdhbWVib2FyZCAucm93cyB7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdhbWVNb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9HYW1lXCI7XG5pbXBvcnQgRE9NTW9kdWxlT2JqZWN0IGZyb20gXCIuL21vZHVsZXMvRE9NXCI7XG5cbkRPTU1vZHVsZU9iamVjdC5leGVjdXRlKCk7XG5nYW1lTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbiJdLCJuYW1lcyI6WyJET01GYWN0b3J5IiwicHVic3ViIiwicmVjZWl2ZUNvbXB1dGVyQXR0YWNrIiwieCIsInkiLCJwbGF5ZXJCb2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdyIsImNvbHVtbiIsImNsYXNzTGlzdCIsImFkZCIsInNlbmRQbGF5ZXJBdHRhY2siLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImdldEF0dHJpYnV0ZSIsInB1Ymxpc2giLCJjcmVhdGVHYW1lYm9hcmQiLCJuYW1lIiwiYm9hcmQiLCJncmlkIiwiY2xhc3NOYW1lIiwiaSIsImoiLCJsZW5ndGgiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kR2FtZWJvYXJkcyIsImNvbXB1dGVyQm9hcmQiLCJnYW1lYm9hcmRzIiwic2hvd0FsZXJ0IiwidmljdG9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwicmVuZGVySW5wdXRNb2RhbCIsImlucHV0TW9kYWxEaXYiLCJpbnB1dEdyaWQiLCJpbnB1dFNoaXBzIiwiY29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb3VzZWVudGVyQ2FsbGJhY2siLCJOdW1iZXIiLCJjZWxscyIsImN1cnJlbnRUYXJnZXQiLCJzaGlwTGVuZ3RoIiwiY29sIiwicHVzaCIsInNvbWUiLCJpdGVtIiwiZm9yRWFjaCIsIm1vdXNlbGVhdmVDYWxsYmFjayIsInJlbW92ZSIsInNoaXBzIiwiYWRkZWQiLCJjbGlja0NhbGxiYWNrIiwic2hpcFRvQWRkIiwiZmluZCIsInNoaXAiLCJjZWxsIiwic2hpcFRvQWRkSW5kZXgiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsInJlcXVpcmVkIiwiRE9NTW9kdWxlT2JqZWN0IiwiZXhlY3V0ZSIsInN1YnNjcmliZSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibmV3RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwic2V0QXR0cmlidXRlIiwiU2hpcCIsIkdhbWVib2FyZCIsIlBsYXllciIsInBsYXllciIsImNvbXB1dGVyIiwiYWRkUGxheWVyU2hpcHMiLCJmbGVldCIsImF0IiwiYWRkQ29tcHV0ZXJTaGlwcyIsImF1dG9BZGQiLCJhZGRBbGxTaGlwcyIsImNvbXB1dGVyQXR0YWNrU2hpcCIsImF0dGFjayIsImF1dG8iLCJ4MSIsInkxIiwiYXJlQWxsU2hpcHNTdW5rIiwicGxheWVyQXR0YWNrU2hpcCIsImdhbWVNb2R1bGVPYmplY3QiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaGlwc0FycmF5IiwibGF0ZXN0QXR0YWNrU3RhdHVzIiwiY2hlY2tJZlNoaXBDYW5CZUFkZGVkIiwicmVxdWlyZWRTcGFjZSIsInNsaWNlIiwiZXZlcnkiLCJhZGRTaGlwSW5BcnJheSIsImFkZFNoaXBPbkJvYXJkIiwiYXR0YWNrU2hpcCIsImhpdFBvc2l0aW9uIiwidGFyZ2V0QXJlYSIsInNoaXBMZWZ0U2lkZSIsImZpbHRlciIsImlzSGl0QXQiLCJoaXQiLCJyZWNlaXZlQXR0YWNrIiwiaXNTdW5rIiwiZW5lbXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJldmVudHMiLCJldmVudE5hbWUiLCJkYXRhIiwiY2FsbGJhY2siLCJpc0FycmF5Iiwic2hpcEFycmF5IiwicG9zaXRpb24iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=