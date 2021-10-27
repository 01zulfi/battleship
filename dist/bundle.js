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

  var columns = _toConsumableArray(inputGrid.querySelectorAll(".columns"));

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

  var removeInputModal = function removeInputModal() {
    var inputModal = document.querySelector(".input-modal");
    inputModal.remove();
    _Pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish("input-ships", ships);
  };

  var activateReadyDiv = function activateReadyDiv() {
    var readyDiv = document.querySelector(".ready");
    readyDiv.classList.add("active");
    readyDiv.addEventListener("click", removeInputModal);
  };

  var clickCallback = function clickCallback(event) {
    if (!event.target.classList.contains("columns")) return;
    if (event.target.classList.contains("red")) return;
    var shipToAdd = ships.find(function (ship) {
      return !ship.added;
    });
    if (!shipToAdd) return;

    if (shipToAdd.length === 2) {
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallback);
      });
      activateReadyDiv();
    }

    var shipToAddIndex = ships.indexOf(shipToAdd);
    shipToAdd.added = true;
    shipToAdd.x = Number(event.target.parentNode.getAttribute("data-rows"));
    shipToAdd.y = Number(event.target.getAttribute("data-columns"));
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

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var player = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("player", (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());
var computer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])("computer", (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());

(function () {
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("carrier", 5));
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("destroyer", 4));
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("cruiser", 3));
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("submarine", 3));
  computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])("patrol", 2));
})();

var addPlayerShips = function addPlayerShips(ships) {
  var _iterator = _createForOfIteratorHelper(ships),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ship = _step.value;
      player.fleet.at(ship.x, ship.y).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.name, ship.length));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("fleets-initialized", [player.fleet.board, computer.fleet.board]);
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
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe("input-ships", addPlayerShips);
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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.input-modal {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: red;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.7;\n  border: 2px solid black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 38vw;\n  aspect-ratio: 1;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns,\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;;;EAGE,WAAW;EACX,eAAe;EACf,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;;;EAGE,OAAO;EACP,QAAQ;EACR,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;;;EAGE,OAAO;EACP,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":[".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.input-modal {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: red;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.7;\n  border: 2px solid black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 38vw;\n  aspect-ratio: 1;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns,\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBWCw0REFBQTtBQUNBMkIsNkRBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTUZhY3RvcnkgZnJvbSBcIi4vRE9NRmFjdG9yeVwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxuY29uc3QgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrID0gKFt4LCB5XSkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1nYW1lYm9hcmRcIik7XG4gIGNvbnN0IHJvdyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd3M9XCIke3h9XCJdYCk7XG4gIGNvbnN0IGNvbHVtbiA9IHJvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2x1bW5zPVwiJHt5fVwiXWApO1xuICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbn07XG5cbmNvbnN0IHNlbmRQbGF5ZXJBdHRhY2sgPSAoZXZlbnQpID0+IHtcbiAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sdW1uc1wiKSkgcmV0dXJuO1xuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgY29uc3QgeCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKTtcbiAgY29uc3QgeSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIik7XG4gIHB1YnN1Yi5wdWJsaXNoKFwicGxheWVyLWF0dGFjay1zaGlwXCIsIFt4LCB5XSk7XG59O1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAobmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgZ3JpZCA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IG5hbWUgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicm93c1wiLCBcImRhdGEtcm93c1wiOiBpIH0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY29sdW1uID0gRE9NRmFjdG9yeShcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb2x1bW5zXCIsXG4gICAgICAgIFwiZGF0YS1jb2x1bW5zXCI6IGosXG4gICAgICB9KTtcbiAgICAgIGlmIChib2FyZC5sZW5ndGggIT09IDAgJiYgdHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoY29sdW1uKTtcbiAgICB9XG4gICAgZ3JpZC5hcHBlbmQocm93KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBhcHBlbmRHYW1lYm9hcmRzID0gKFtwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZF0pID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkc1wiKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLW9uZS1nYW1lYm9hcmRcIiwgcGxheWVyQm9hcmQpKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLXR3by1nYW1lYm9hcmRcIiwgY29tcHV0ZXJCb2FyZCkpO1xufTtcblxuY29uc3Qgc2hvd0FsZXJ0ID0gKHZpY3RvcikgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tZ2FtZWJvYXJkXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kUGxheWVyQXR0YWNrKTtcbiAgYWxlcnQodmljdG9yKTtcbn07XG5cbmNvbnN0IHJlbmRlcklucHV0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0TW9kYWxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICBjb25zdCBpbnB1dEdyaWQgPSBjcmVhdGVHYW1lYm9hcmQoXCJpbnB1dHMtZ2FtZWJvYXJkXCIsIFtdKTtcbiAgaW5wdXRNb2RhbERpdi5hcHBlbmQoaW5wdXRHcmlkKTtcbn07XG5cbmNvbnN0IGlucHV0U2hpcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRzLWdhbWVib2FyZFwiKTtcbiAgY29uc3QgY29sdW1ucyA9IFsuLi5pbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zXCIpXTtcbiAgY29uc3Qgc2hpcHMgPSBbXG4gICAgeyBuYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1LCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwiZGVzdHJveWVyXCIsIGxlbmd0aDogNCwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInBhdHJvbFwiLCBsZW5ndGg6IDIsIGFkZGVkOiBmYWxzZSB9LFxuICBdO1xuXG4gIGNvbnN0IG1vdXNlZW50ZXJDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY3VycmVudFRhcmdldC5zaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1jb2x1bW5zPVwiJHtjb2x1bW4gKyBpfVwiXWAsXG4gICAgICApO1xuICAgICAgY2VsbHMucHVzaChjb2wpO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbSA9PT0gbnVsbCkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZWxlYXZlQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1uc1wiKVxuICAgICAgLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVJbnB1dE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICAgIGlucHV0TW9kYWwucmVtb3ZlKCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJpbnB1dC1zaGlwc1wiLCBzaGlwcyk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVSZWFkeURpdiA9ICgpID0+IHtcbiAgICBjb25zdCByZWFkeURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZHlcIik7XG4gICAgcmVhZHlEaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICByZWFkeURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlSW5wdXRNb2RhbCk7XG4gIH07XG5cbiAgY29uc3QgY2xpY2tDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbHVtbnNcIikpIHJldHVybjtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlZFwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNoaXBUb0FkZCA9IHNoaXBzLmZpbmQoKHNoaXApID0+ICFzaGlwLmFkZGVkKTtcbiAgICBpZiAoIXNoaXBUb0FkZCkgcmV0dXJuO1xuICAgIGlmIChzaGlwVG9BZGQubGVuZ3RoID09PSAyKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrKSxcbiAgICAgICk7XG4gICAgICBhY3RpdmF0ZVJlYWR5RGl2KCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBUb0FkZEluZGV4ID0gc2hpcHMuaW5kZXhPZihzaGlwVG9BZGQpO1xuICAgIHNoaXBUb0FkZC5hZGRlZCA9IHRydWU7XG4gICAgc2hpcFRvQWRkLnggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpKTtcbiAgICBzaGlwVG9BZGQueSA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBjb25zdCByZXF1aXJlZCA9IGlucHV0R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnMuaG92ZXJcIik7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKSk7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKHNoaXBUb0FkZC5uYW1lKSk7XG4gICAgaWYgKCFzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdKSByZXR1cm47XG4gICAgY29sdW1ucy5mb3JFYWNoKFxuICAgICAgKGNlbGwpID0+IChjZWxsLnNoaXBMZW5ndGggPSBzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdLmxlbmd0aCksXG4gICAgKTtcbiAgfTtcblxuICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+IChjZWxsLnNoaXBMZW5ndGggPSA1KSk7XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrKSxcbiAgKTtcblxuICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtb3VzZWxlYXZlQ2FsbGJhY2spLFxuICApO1xuXG4gIGlucHV0R3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tDYWxsYmFjayk7XG59O1xuXG5jb25zdCBET01Nb2R1bGVPYmplY3QgPSB7XG4gIGV4ZWN1dGUoKSB7XG4gICAgcmVuZGVySW5wdXRNb2RhbCgpO1xuICAgIGlucHV0U2hpcHMoKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiZmxlZXRzLWluaXRpYWxpemVkXCIsIGFwcGVuZEdhbWVib2FyZHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJjb21wdXRlci1hdHRhY2stc2hpcFwiLCByZWNlaXZlQ29tcHV0ZXJBdHRhY2spO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJnYW1lLWVuZFwiLCBzaG93QWxlcnQpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTW9kdWxlT2JqZWN0O1xuIiwiY29uc3QgRE9NRmFjdG9yeSA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFuZXdFbGVtZW50W2F0dHJpYnV0ZV0pIHtcbiAgICAgIGlmIChhdHRyaWJ1dGUudG9TdHJpbmcoKS5pbmNsdWRlcyhcImRhdGFcIikpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLnRvU3RyaW5nKCksIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50W2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NRmFjdG9yeTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxuY29uc3QgcGxheWVyID0gUGxheWVyKFwicGxheWVyXCIsIEdhbWVib2FyZCgpKTtcbmNvbnN0IGNvbXB1dGVyID0gUGxheWVyKFwiY29tcHV0ZXJcIiwgR2FtZWJvYXJkKCkpO1xuXG4oKCkgPT4ge1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJjYXJyaWVyXCIsIDUpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiZGVzdHJveWVyXCIsIDQpKTtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiY3J1aXNlclwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInN1Ym1hcmluZVwiLCAzKSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcInBhdHJvbFwiLCAyKSk7XG59KSgpO1xuXG5jb25zdCBhZGRQbGF5ZXJTaGlwcyA9IChzaGlwcykgPT4ge1xuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBwbGF5ZXIuZmxlZXQuYXQoc2hpcC54LCBzaGlwLnkpLmFkZChTaGlwKHNoaXAubmFtZSwgc2hpcC5sZW5ndGgpKTtcbiAgfVxuICBwdWJzdWIucHVibGlzaChcImZsZWV0cy1pbml0aWFsaXplZFwiLCBbXG4gICAgcGxheWVyLmZsZWV0LmJvYXJkLFxuICAgIGNvbXB1dGVyLmZsZWV0LmJvYXJkLFxuICBdKTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgW3gxLCB5MV0gPSBjb21wdXRlci5hdHRhY2socGxheWVyKS5hdXRvKCk7XG4gIHB1YnN1Yi5wdWJsaXNoKFwiY29tcHV0ZXItYXR0YWNrLXNoaXBcIiwgW3gxLCB5MV0pO1xuICBpZiAocGxheWVyLmZsZWV0LmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJnYW1lLWVuZFwiLCBcImNvbXB1dGVyIHdvblwiKTtcbiAgfVxufTtcblxuY29uc3QgcGxheWVyQXR0YWNrU2hpcCA9IChbeCwgeV0pID0+IHtcbiAgcGxheWVyLmF0dGFjayhjb21wdXRlcikuYXQoeCwgeSk7XG4gIGlmIChjb21wdXRlci5mbGVldC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZ2FtZS1lbmRcIiwgXCJwbGF5ZXIgd29uXCIpO1xuICB9XG4gIGNvbXB1dGVyQXR0YWNrU2hpcCgpO1xufTtcblxuY29uc3QgZ2FtZU1vZHVsZU9iamVjdCA9IHtcbiAgZXhlY3V0ZSgpIHtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiaW5wdXQtc2hpcHNcIiwgYWRkUGxheWVyU2hpcHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJwbGF5ZXItYXR0YWNrLXNoaXBcIiwgcGxheWVyQXR0YWNrU2hpcCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTW9kdWxlT2JqZWN0O1xuIiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEFycmF5KDEwKVxuICAgIC5maWxsKFwiXCIpXG4gICAgLm1hcCgoZWxlbWVudCkgPT4gQXJyYXkoMTApLmZpbGwoZWxlbWVudCkpO1xuXG4gIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcblxuICBsZXQgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJcIjtcblxuICBjb25zdCBjaGVja0lmU2hpcENhbkJlQWRkZWQgPSAoeCwgeSwgc2hpcExlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHJlcXVpcmVkU3BhY2UgPSBbLi4uYm9hcmRdW3hdLnNsaWNlKHksIHkgKyBzaGlwTGVuZ3RoKTtcbiAgICBpZiAocmVxdWlyZWRTcGFjZS5sZW5ndGggIT09IHNoaXBMZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gcmVxdWlyZWRTcGFjZS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJcIik7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcEluQXJyYXkgPSAoc2hpcCkgPT4ge1xuICAgIHNoaXBzQXJyYXkucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwT25Cb2FyZCA9ICh4LCB5LCBzaGlwKSA9PiB7XG4gICAgYm9hcmRbeF0uZmlsbChzaGlwLCB5LCB5ICsgc2hpcC5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcbiAgICBsZXQgaGl0UG9zaXRpb24gPSAwO1xuICAgIC8vIGdldCBsZWZ0IG9mIGdhbWVib2FyZCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHRhcmdldEFyZWEgPSBib2FyZFt4XS5zbGljZSgwLCB5KTtcbiAgICAvLyBmaWx0ZXIgdG8gZ2V0IGxlZnQgb2Ygc2hpcCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHNoaXBMZWZ0U2lkZSA9IHRhcmdldEFyZWEuZmlsdGVyKFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PT0gc2hpcC5uYW1lLFxuICAgICk7XG4gICAgaGl0UG9zaXRpb24gPSBzaGlwTGVmdFNpZGUubGVuZ3RoO1xuICAgIGlmIChzaGlwLmlzSGl0QXQoaGl0UG9zaXRpb24pKSB7XG4gICAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcImlsbGVnYWxcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hpcC5oaXQoaGl0UG9zaXRpb24pO1xuICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzc1wiO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIFsuLi5ib2FyZF07XG4gICAgfSxcbiAgICBnZXQgc2hpcHNBcnJheSgpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV07XG4gICAgfSxcbiAgICBnZXQgbGF0ZXN0QXR0YWNrU3RhdHVzKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdEF0dGFja1N0YXR1cztcbiAgICB9LFxuICAgIGF0KHgsIHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZChzaGlwKSB7XG4gICAgICAgICAgaWYgKGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCh4LCB5LCBzaGlwLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGFkZFNoaXBJbkFycmF5KHNoaXApO1xuICAgICAgICAgICAgYWRkU2hpcE9uQm9hcmQoeCwgeSwgc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGF0dGFja1NoaXAoeCwgeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gXCJYXCIpIHtcbiAgICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiWFwiO1xuICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzc1wiO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV0uZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSwgZmxlZXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZsZWV0KCkge1xuICAgICAgcmV0dXJuIGZsZWV0O1xuICAgIH0sXG4gICAgYXR0YWNrKGVuZW15KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdCh4LCB5KSB7XG4gICAgICAgICAgZW5lbXkuZmxlZXQuYXQoeCwgeSkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXV0bygpIHtcbiAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgaWYgKGVuZW15LmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyA9PT0gXCJpbGxlZ2FsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG8oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhdXRvQWRkKHNoaXApIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgZmxlZXQuYXQoeCwgeSkuYWRkKHNoaXApO1xuXG4gICAgICBpZiAoIWZsZWV0LnNoaXBzQXJyYXkuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgICAgdGhpcy5hdXRvQWRkKHNoaXApO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBwdWJzdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhkYXRhKSk7XG4gICAgfVxuICB9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHVic3ViO1xuIiwiY29uc3QgU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgbGV0IHNoaXBBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChcIlwiKTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBzaGlwQXJyYXkgPSBbLi4uc2hpcEFycmF5XS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHBvc2l0aW9uID8gXCJoaXRcIiA6IGVsZW1lbnQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNIaXRBdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XVtwb3NpdGlvbl0gPT09IFwiaGl0XCI7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJoaXRcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgc2hpcEFycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzSGl0QXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVkLFxcbi5pbnB1dC1tb2RhbCAucmVkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucmVhZHkge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yZWFkeS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyAucGxheWVyLW9uZS1nYW1lYm9hcmQsXFxuLmdhbWVib2FyZHMgLnBsYXllci10d28tZ2FtZWJvYXJkLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIHdpZHRoOiAzOHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5yb3dzIHtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAuY29sdW1ucyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLmlucHV0cy1nYW1lYm9hcmQgLmNvbHVtbnMge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxPQUFPO0VBQ1AsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVkLFxcbi5pbnB1dC1tb2RhbCAucmVkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucmVhZHkge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yZWFkeS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyAucGxheWVyLW9uZS1nYW1lYm9hcmQsXFxuLmdhbWVib2FyZHMgLnBsYXllci10d28tZ2FtZWJvYXJkLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIHdpZHRoOiAzOHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5yb3dzIHtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAuY29sdW1ucyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLmlucHV0cy1nYW1lYm9hcmQgLmNvbHVtbnMge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2FtZU1vZHVsZU9iamVjdCBmcm9tIFwiLi9tb2R1bGVzL0dhbWVcIjtcbmltcG9ydCBET01Nb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcblxuRE9NTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbmdhbWVNb2R1bGVPYmplY3QuZXhlY3V0ZSgpO1xuIl0sIm5hbWVzIjpbIkRPTUZhY3RvcnkiLCJwdWJzdWIiLCJyZWNlaXZlQ29tcHV0ZXJBdHRhY2siLCJ4IiwieSIsInBsYXllckJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm93IiwiY29sdW1uIiwiY2xhc3NMaXN0IiwiYWRkIiwic2VuZFBsYXllckF0dGFjayIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwicHVibGlzaCIsImNyZWF0ZUdhbWVib2FyZCIsIm5hbWUiLCJib2FyZCIsImdyaWQiLCJjbGFzc05hbWUiLCJpIiwiaiIsImxlbmd0aCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRHYW1lYm9hcmRzIiwiY29tcHV0ZXJCb2FyZCIsImdhbWVib2FyZHMiLCJzaG93QWxlcnQiLCJ2aWN0b3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWxlcnQiLCJyZW5kZXJJbnB1dE1vZGFsIiwiaW5wdXRNb2RhbERpdiIsImlucHV0R3JpZCIsImlucHV0U2hpcHMiLCJjb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsInNoaXBzIiwiYWRkZWQiLCJtb3VzZWVudGVyQ2FsbGJhY2siLCJOdW1iZXIiLCJjZWxscyIsImN1cnJlbnRUYXJnZXQiLCJzaGlwTGVuZ3RoIiwiY29sIiwicHVzaCIsInNvbWUiLCJpdGVtIiwiZm9yRWFjaCIsIm1vdXNlbGVhdmVDYWxsYmFjayIsInJlbW92ZSIsInJlbW92ZUlucHV0TW9kYWwiLCJpbnB1dE1vZGFsIiwiYWN0aXZhdGVSZWFkeURpdiIsInJlYWR5RGl2IiwiY2xpY2tDYWxsYmFjayIsInNoaXBUb0FkZCIsImZpbmQiLCJzaGlwIiwiY2VsbCIsInNoaXBUb0FkZEluZGV4IiwiaW5kZXhPZiIsInJlcXVpcmVkIiwiRE9NTW9kdWxlT2JqZWN0IiwiZXhlY3V0ZSIsInN1YnNjcmliZSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibmV3RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwic2V0QXR0cmlidXRlIiwiU2hpcCIsIkdhbWVib2FyZCIsIlBsYXllciIsInBsYXllciIsImNvbXB1dGVyIiwiYXV0b0FkZCIsImFkZFBsYXllclNoaXBzIiwiZmxlZXQiLCJhdCIsImNvbXB1dGVyQXR0YWNrU2hpcCIsImF0dGFjayIsImF1dG8iLCJ4MSIsInkxIiwiYXJlQWxsU2hpcHNTdW5rIiwicGxheWVyQXR0YWNrU2hpcCIsImdhbWVNb2R1bGVPYmplY3QiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaGlwc0FycmF5IiwibGF0ZXN0QXR0YWNrU3RhdHVzIiwiY2hlY2tJZlNoaXBDYW5CZUFkZGVkIiwicmVxdWlyZWRTcGFjZSIsInNsaWNlIiwiZXZlcnkiLCJhZGRTaGlwSW5BcnJheSIsImFkZFNoaXBPbkJvYXJkIiwiYXR0YWNrU2hpcCIsImhpdFBvc2l0aW9uIiwidGFyZ2V0QXJlYSIsInNoaXBMZWZ0U2lkZSIsImZpbHRlciIsImlzSGl0QXQiLCJoaXQiLCJyZWNlaXZlQXR0YWNrIiwiaXNTdW5rIiwiZW5lbXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJldmVudHMiLCJldmVudE5hbWUiLCJkYXRhIiwiY2FsbGJhY2siLCJpc0FycmF5Iiwic2hpcEFycmF5IiwicG9zaXRpb24iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=