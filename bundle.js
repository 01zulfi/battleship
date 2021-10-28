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

  var rotate = document.querySelector(".rotate");
  var horizontal = true;
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

  var mouseenterCallbackHorizontal = function mouseenterCallbackHorizontal(event) {
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
      return item.setAttribute("data-orientation", "horizontal");
    });
    cells.forEach(function (item) {
      return item.classList.add("hover");
    });
  };

  var mouseenterCallbackVertical = function mouseenterCallbackVertical(event) {
    var column = Number(event.target.getAttribute("data-columns"));
    var row = Number(event.target.parentNode.getAttribute("data-rows"));
    var grid = event.target.parentNode.parentNode;
    var cells = [];

    for (var i = 0; i < event.currentTarget.shipLength; i += 1) {
      var focusRow = grid.querySelector("[data-rows=\"".concat(row + i, "\"]"));
      if (!focusRow) break;
      cells.push(focusRow.querySelector("[data-columns=\"".concat(column, "\"]")));
    }

    if (cells.length < event.currentTarget.shipLength) {
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
      return item.setAttribute("data-orientation", "vertical");
    });
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
    if (event.target.classList.contains("ship")) return;
    var shipToAdd = ships.find(function (ship) {
      return !ship.added;
    });
    if (!shipToAdd) return;

    if (shipToAdd.length === 2) {
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallbackHorizontal);
      });
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallbackVertical);
      });
      activateReadyDiv();
    }

    var shipToAddIndex = ships.indexOf(shipToAdd);
    shipToAdd.added = true;
    shipToAdd.x = Number(event.target.parentNode.getAttribute("data-rows"));
    shipToAdd.y = Number(event.target.getAttribute("data-columns"));
    shipToAdd.orientation = event.target.getAttribute("data-orientation");
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
    return cell.addEventListener("mouseenter", mouseenterCallbackHorizontal);
  });
  columns.forEach(function (cell) {
    return cell.addEventListener("mouseleave", mouseleaveCallback);
  });
  inputGrid.addEventListener("click", clickCallback);
  rotate.addEventListener("click", function () {
    if (horizontal) {
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallbackHorizontal);
      });
      columns.forEach(function (cell) {
        return cell.addEventListener("mouseenter", mouseenterCallbackVertical);
      });
      horizontal = false;
    } else {
      columns.forEach(function (cell) {
        return cell.addEventListener("mouseenter", mouseenterCallbackHorizontal);
      });
      columns.forEach(function (cell) {
        return cell.removeEventListener("mouseenter", mouseenterCallbackVertical);
      });
      horizontal = true;
    }
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
      player.fleet.at(ship.x, ship.y).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.name, ship.length), ship.orientation);
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

  var checkIfShipCanBeAdded = function checkIfShipCanBeAdded(x, y, orientation, shipLength) {
    if (orientation === "horizontal") {
      var requiredSpace = _toConsumableArray(board)[x].slice(y, y + shipLength);

      if (requiredSpace.length !== shipLength) return false;
      return requiredSpace.every(function (element) {
        return element === "";
      });
    }

    if (orientation === "vertical") {
      var _requiredSpace = [];

      for (var i = 0; i <= 9 - x; i += 1) {
        _requiredSpace.push(board[x + i][y]);
      }

      if (_requiredSpace.length < shipLength) return false;
      return _requiredSpace.every(function (element) {
        return element === "";
      });
    }

    return "";
  };

  var addShipInArray = function addShipInArray(ship) {
    shipsArray.push(ship);
  };

  var addShipOnBoard = function addShipOnBoard(x, y, orientation, ship) {
    if (orientation === "horizontal") {
      board[x].fill(ship, y, y + ship.length);
    }

    if (orientation === "vertical") {
      for (var i = x; i < ship.length + x; i += 1) {
        board[i][y] = ship;
      }
    }
  };

  var attackShip = function attackShip(x, y) {
    var ship = board[x][y];
    var hitPosition = 0; // get left of gameboard from hit position

    var targetAreaHorizontal = board[x].slice(0, y); // filter to get left of ship from hit position

    var shipLeftSide = targetAreaHorizontal.filter(function (element) {
      return element.name === ship.name;
    });
    var targetAreaVertical = []; // get upper of gameboard from hit position

    for (var i = 0; i < x; i += 1) {
      targetAreaVertical.push(board[i][y]);
    } // filter to get upper of ship from hit position


    var shipUpperSide = targetAreaVertical.filter(function (element) {
      return element.name === ship.name;
    });

    hitPosition = function () {
      if (shipLeftSide.length === 0 && shipUpperSide.length === 0) return 0;

      if (shipLeftSide.length === 0 && shipUpperSide.length !== 0) {
        return shipUpperSide.length;
      }

      return shipLeftSide.length;
    }();

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
        add: function add(ship, orientation) {
          if (checkIfShipCanBeAdded(x, y, orientation, ship.length)) {
            addShipInArray(ship);
            addShipOnBoard(x, y, orientation, ship);
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
      var orientations = ["horizontal", "vertical"];
      var orientation = orientations[Math.floor(Math.random() * 2)];
      fleet.at(x, y).add(ship, orientation);

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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.input-modal {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: red;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.7;\n  border: 2px solid black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n.rotate {\n  border: 2px solid blue;\n  padding: 5px;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 38vw;\n  aspect-ratio: 1;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns,\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;;;EAGE,WAAW;EACX,eAAe;EACf,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;;;EAGE,OAAO;EACP,QAAQ;EACR,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;;;EAGE,OAAO;EACP,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":[".gameboards {\n  display: flex;\n  flex-direction: row;\n  gap: 1vw;\n}\n\n.input-modal {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.input-modal .hover {\n  background-color: rgb(128, 128, 128, 0.6);\n}\n\n.input-modal .ship {\n  background-color: gray;\n}\n\n.input-modal .red,\n.input-modal .red.ship {\n  background-color: red;\n}\n\n.ready {\n  pointer-events: none;\n  opacity: 0.7;\n  border: 2px solid black;\n}\n\n.ready.active {\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.ready.active:hover {\n  cursor: pointer;\n}\n\n.rotate {\n  border: 2px solid blue;\n  padding: 5px;\n}\n\n.gameboards .player-one-gameboard,\n.gameboards .player-two-gameboard,\n.inputs-gameboard {\n  width: 38vw;\n  aspect-ratio: 1;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.player-one-gameboard .rows,\n.player-two-gameboard .rows,\n.inputs-gameboard .rows {\n  flex: 1;\n  gap: 4px;\n  display: flex;\n  width: 100%;\n  height: fit-content;\n}\n\n.player-one-gameboard .columns,\n.player-two-gameboard .columns,\n.inputs-gameboard .columns {\n  flex: 1;\n  border: 1px solid black;\n}\n\n.player-one-gameboard .rows .columns.ship {\n  background-color: gray;\n}\n\n.player-one-gameboard .rows .columns.ship.hit,\n.player-two-gameboard .rows .columns.ship.hit {\n  background: red;\n}\n\n.player-one-gameboard .rows .columns.hit,\n.player-two-gameboard .rows .columns.hit {\n  background: green;\n  opacity: 0.7;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBViw0REFBQTtBQUNBMEIsNkRBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTUZhY3RvcnkgZnJvbSBcIi4vRE9NRmFjdG9yeVwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxuY29uc3QgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrID0gKFt4LCB5XSkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1nYW1lYm9hcmRcIik7XG4gIGNvbnN0IHJvdyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd3M9XCIke3h9XCJdYCk7XG4gIGNvbnN0IGNvbHVtbiA9IHJvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2x1bW5zPVwiJHt5fVwiXWApO1xuICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbn07XG5cbmNvbnN0IHNlbmRQbGF5ZXJBdHRhY2sgPSAoZXZlbnQpID0+IHtcbiAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sdW1uc1wiKSkgcmV0dXJuO1xuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgY29uc3QgeCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKTtcbiAgY29uc3QgeSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIik7XG4gIHB1YnN1Yi5wdWJsaXNoKFwicGxheWVyLWF0dGFjay1zaGlwXCIsIFt4LCB5XSk7XG59O1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAobmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgZ3JpZCA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IG5hbWUgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicm93c1wiLCBcImRhdGEtcm93c1wiOiBpIH0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY29sdW1uID0gRE9NRmFjdG9yeShcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb2x1bW5zXCIsXG4gICAgICAgIFwiZGF0YS1jb2x1bW5zXCI6IGosXG4gICAgICB9KTtcbiAgICAgIGlmIChib2FyZC5sZW5ndGggIT09IDAgJiYgdHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoY29sdW1uKTtcbiAgICB9XG4gICAgZ3JpZC5hcHBlbmQocm93KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBhcHBlbmRHYW1lYm9hcmRzID0gKFtwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZF0pID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkc1wiKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLW9uZS1nYW1lYm9hcmRcIiwgcGxheWVyQm9hcmQpKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLXR3by1nYW1lYm9hcmRcIiwgY29tcHV0ZXJCb2FyZCkpO1xufTtcblxuY29uc3Qgc2hvd0FsZXJ0ID0gKHZpY3RvcikgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tZ2FtZWJvYXJkXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kUGxheWVyQXR0YWNrKTtcbiAgYWxlcnQodmljdG9yKTtcbn07XG5cbmNvbnN0IHJlbmRlcklucHV0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0TW9kYWxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICBjb25zdCBpbnB1dEdyaWQgPSBjcmVhdGVHYW1lYm9hcmQoXCJpbnB1dHMtZ2FtZWJvYXJkXCIsIFtdKTtcbiAgaW5wdXRNb2RhbERpdi5hcHBlbmQoaW5wdXRHcmlkKTtcbn07XG5cbmNvbnN0IGlucHV0U2hpcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRzLWdhbWVib2FyZFwiKTtcbiAgY29uc3QgY29sdW1ucyA9IFsuLi5pbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zXCIpXTtcbiAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVcIik7XG4gIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgY29uc3Qgc2hpcHMgPSBbXG4gICAgeyBuYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1LCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwiZGVzdHJveWVyXCIsIGxlbmd0aDogNCwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInBhdHJvbFwiLCBsZW5ndGg6IDIsIGFkZGVkOiBmYWxzZSB9LFxuICBdO1xuXG4gIGNvbnN0IG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb2wgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1ucz1cIiR7Y29sdW1uICsgaX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNlbGxzLnB1c2goY29sKTtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IG51bGwpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudGF0aW9uXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICApO1xuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBjb25zdCByb3cgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpKTtcbiAgICBjb25zdCBncmlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY3VycmVudFRhcmdldC5zaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGZvY3VzUm93ID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dzPVwiJHtyb3cgKyBpfVwiXWApO1xuICAgICAgaWYgKCFmb2N1c1JvdykgYnJlYWs7XG4gICAgICBjZWxscy5wdXNoKGZvY3VzUm93LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbHVtbnM9XCIke2NvbHVtbn1cIl1gKSk7XG4gICAgfVxuICAgIGlmIChjZWxscy5sZW5ndGggPCBldmVudC5jdXJyZW50VGFyZ2V0LnNoaXBMZW5ndGgpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRhdGlvblwiLCBcInZlcnRpY2FsXCIpKTtcbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VsZWF2ZUNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnNcIilcbiAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSW5wdXRNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1tb2RhbFwiKTtcbiAgICBpbnB1dE1vZGFsLnJlbW92ZSgpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiaW5wdXQtc2hpcHNcIiwgc2hpcHMpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlUmVhZHlEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVhZHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5XCIpO1xuICAgIHJlYWR5RGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgcmVhZHlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUlucHV0TW9kYWwpO1xuICB9O1xuXG4gIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2x1bW5zXCIpKSByZXR1cm47XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWRcIikpIHJldHVybjtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHJldHVybjtcbiAgICBjb25zdCBzaGlwVG9BZGQgPSBzaGlwcy5maW5kKChzaGlwKSA9PiAhc2hpcC5hZGRlZCk7XG4gICAgaWYgKCFzaGlwVG9BZGQpIHJldHVybjtcbiAgICBpZiAoc2hpcFRvQWRkLmxlbmd0aCA9PT0gMikge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICAgICAgKTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCksXG4gICAgICApO1xuICAgICAgYWN0aXZhdGVSZWFkeURpdigpO1xuICAgIH1cbiAgICBjb25zdCBzaGlwVG9BZGRJbmRleCA9IHNoaXBzLmluZGV4T2Yoc2hpcFRvQWRkKTtcbiAgICBzaGlwVG9BZGQuYWRkZWQgPSB0cnVlO1xuICAgIHNoaXBUb0FkZC54ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKSk7XG4gICAgc2hpcFRvQWRkLnkgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgc2hpcFRvQWRkLm9yaWVudGF0aW9uID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50YXRpb25cIik7XG4gICAgY29uc3QgcmVxdWlyZWQgPSBpbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zLmhvdmVyXCIpO1xuICAgIHJlcXVpcmVkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInNoaXBcIikpO1xuICAgIHJlcXVpcmVkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChzaGlwVG9BZGQubmFtZSkpO1xuICAgIGlmICghc2hpcHNbc2hpcFRvQWRkSW5kZXggKyAxXSkgcmV0dXJuO1xuICAgIGNvbHVtbnMuZm9yRWFjaChcbiAgICAgIChjZWxsKSA9PiAoY2VsbC5zaGlwTGVuZ3RoID0gc2hpcHNbc2hpcFRvQWRkSW5kZXggKyAxXS5sZW5ndGgpLFxuICAgICk7XG4gIH07XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PiAoY2VsbC5zaGlwTGVuZ3RoID0gNSkpO1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICApO1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1vdXNlbGVhdmVDYWxsYmFjayksXG4gICk7XG5cbiAgaW5wdXRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0NhbGxiYWNrKTtcblxuICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICAgICAgKTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCksXG4gICAgICApO1xuICAgICAgaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgRE9NTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIHJlbmRlcklucHV0TW9kYWwoKTtcbiAgICBpbnB1dFNoaXBzKCk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImZsZWV0cy1pbml0aWFsaXplZFwiLCBhcHBlbmRHYW1lYm9hcmRzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiY29tcHV0ZXItYXR0YWNrLXNoaXBcIiwgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiZ2FtZS1lbmRcIiwgc2hvd0FsZXJ0KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1vZHVsZU9iamVjdDtcbiIsImNvbnN0IERPTUZhY3RvcnkgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgIGlmICghbmV3RWxlbWVudFthdHRyaWJ1dGVdKSB7XG4gICAgICBpZiAoYXR0cmlidXRlLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJkYXRhXCIpKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS50b1N0cmluZygpLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudFthdHRyaWJ1dGVdID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTUZhY3Rvcnk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vUHVic3ViXCI7XG5cbmNvbnN0IHBsYXllciA9IFBsYXllcihcInBsYXllclwiLCBHYW1lYm9hcmQoKSk7XG5jb25zdCBjb21wdXRlciA9IFBsYXllcihcImNvbXB1dGVyXCIsIEdhbWVib2FyZCgpKTtcblxuKCgpID0+IHtcbiAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKFwiY2FycmllclwiLCA1KSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcImRlc3Ryb3llclwiLCA0KSk7XG4gIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChcImNydWlzZXJcIiwgMykpO1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJzdWJtYXJpbmVcIiwgMykpO1xuICBjb21wdXRlci5hdXRvQWRkKFNoaXAoXCJwYXRyb2xcIiwgMikpO1xufSkoKTtcblxuY29uc3QgYWRkUGxheWVyU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgcGxheWVyLmZsZWV0XG4gICAgICAuYXQoc2hpcC54LCBzaGlwLnkpXG4gICAgICAuYWRkKFNoaXAoc2hpcC5uYW1lLCBzaGlwLmxlbmd0aCksIHNoaXAub3JpZW50YXRpb24pO1xuICB9XG4gIHB1YnN1Yi5wdWJsaXNoKFwiZmxlZXRzLWluaXRpYWxpemVkXCIsIFtcbiAgICBwbGF5ZXIuZmxlZXQuYm9hcmQsXG4gICAgY29tcHV0ZXIuZmxlZXQuYm9hcmQsXG4gIF0pO1xufTtcblxuY29uc3QgY29tcHV0ZXJBdHRhY2tTaGlwID0gKCkgPT4ge1xuICBjb25zdCBbeDEsIHkxXSA9IGNvbXB1dGVyLmF0dGFjayhwbGF5ZXIpLmF1dG8oKTtcbiAgcHVic3ViLnB1Ymxpc2goXCJjb21wdXRlci1hdHRhY2stc2hpcFwiLCBbeDEsIHkxXSk7XG4gIGlmIChwbGF5ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBwdWJzdWIucHVibGlzaChcImdhbWUtZW5kXCIsIFwiY29tcHV0ZXIgd29uXCIpO1xuICB9XG59O1xuXG5jb25zdCBwbGF5ZXJBdHRhY2tTaGlwID0gKFt4LCB5XSkgPT4ge1xuICBwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyKS5hdCh4LCB5KTtcbiAgaWYgKGNvbXB1dGVyLmZsZWV0LmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJnYW1lLWVuZFwiLCBcInBsYXllciB3b25cIik7XG4gIH1cbiAgY29tcHV0ZXJBdHRhY2tTaGlwKCk7XG59O1xuXG5jb25zdCBnYW1lTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJpbnB1dC1zaGlwc1wiLCBhZGRQbGF5ZXJTaGlwcyk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInBsYXllci1hdHRhY2stc2hpcFwiLCBwbGF5ZXJBdHRhY2tTaGlwKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVNb2R1bGVPYmplY3Q7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApXG4gICAgLmZpbGwoXCJcIilcbiAgICAubWFwKChlbGVtZW50KSA9PiBBcnJheSgxMCkuZmlsbChlbGVtZW50KSk7XG5cbiAgY29uc3Qgc2hpcHNBcnJheSA9IFtdO1xuXG4gIGxldCBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcIlwiO1xuXG4gIGNvbnN0IGNoZWNrSWZTaGlwQ2FuQmVBZGRlZCA9ICh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkU3BhY2UgPSBbLi4uYm9hcmRdW3hdLnNsaWNlKHksIHkgKyBzaGlwTGVuZ3RoKTtcbiAgICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCAhPT0gc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHJlcXVpcmVkU3BhY2UuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiXCIpO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOSAtIHg7IGkgKz0gMSkge1xuICAgICAgICByZXF1aXJlZFNwYWNlLnB1c2goYm9hcmRbeCArIGldW3ldKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXF1aXJlZFNwYWNlLmxlbmd0aCA8IHNoaXBMZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwSW5BcnJheSA9IChzaGlwKSA9PiB7XG4gICAgc2hpcHNBcnJheS5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgYm9hcmRbeF0uZmlsbChzaGlwLCB5LCB5ICsgc2hpcC5sZW5ndGgpO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCBzaGlwLmxlbmd0aCArIHg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFtpXVt5XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcbiAgICBsZXQgaGl0UG9zaXRpb24gPSAwO1xuICAgIC8vIGdldCBsZWZ0IG9mIGdhbWVib2FyZCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHRhcmdldEFyZWFIb3Jpem9udGFsID0gYm9hcmRbeF0uc2xpY2UoMCwgeSk7XG4gICAgLy8gZmlsdGVyIHRvIGdldCBsZWZ0IG9mIHNoaXAgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBjb25zdCBzaGlwTGVmdFNpZGUgPSB0YXJnZXRBcmVhSG9yaXpvbnRhbC5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcbiAgICBjb25zdCB0YXJnZXRBcmVhVmVydGljYWwgPSBbXTtcbiAgICAvLyBnZXQgdXBwZXIgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4OyBpICs9IDEpIHtcbiAgICAgIHRhcmdldEFyZWFWZXJ0aWNhbC5wdXNoKGJvYXJkW2ldW3ldKTtcbiAgICB9XG4gICAgLy8gZmlsdGVyIHRvIGdldCB1cHBlciBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcFVwcGVyU2lkZSA9IHRhcmdldEFyZWFWZXJ0aWNhbC5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcblxuICAgIGhpdFBvc2l0aW9uID0gKCgpID0+IHtcbiAgICAgIGlmIChzaGlwTGVmdFNpZGUubGVuZ3RoID09PSAwICYmIHNoaXBVcHBlclNpZGUubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgICAgIGlmIChzaGlwTGVmdFNpZGUubGVuZ3RoID09PSAwICYmIHNoaXBVcHBlclNpZGUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzaGlwVXBwZXJTaWRlLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGlwTGVmdFNpZGUubGVuZ3RoO1xuICAgIH0pKCk7XG5cbiAgICBpZiAoc2hpcC5pc0hpdEF0KGhpdFBvc2l0aW9uKSkge1xuICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hpcC5oaXQoaGl0UG9zaXRpb24pO1xuICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzc1wiO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIFsuLi5ib2FyZF07XG4gICAgfSxcbiAgICBnZXQgc2hpcHNBcnJheSgpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV07XG4gICAgfSxcbiAgICBnZXQgbGF0ZXN0QXR0YWNrU3RhdHVzKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdEF0dGFja1N0YXR1cztcbiAgICB9LFxuICAgIGF0KHgsIHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZChzaGlwLCBvcmllbnRhdGlvbikge1xuICAgICAgICAgIGlmIChjaGVja0lmU2hpcENhbkJlQWRkZWQoeCwgeSwgb3JpZW50YXRpb24sIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgICAgYWRkU2hpcEluQXJyYXkoc2hpcCk7XG4gICAgICAgICAgICBhZGRTaGlwT25Cb2FyZCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGF0dGFja1NoaXAoeCwgeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gXCJYXCIpIHtcbiAgICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiWFwiO1xuICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzc1wiO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV0uZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSwgZmxlZXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZsZWV0KCkge1xuICAgICAgcmV0dXJuIGZsZWV0O1xuICAgIH0sXG4gICAgYXR0YWNrKGVuZW15KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdCh4LCB5KSB7XG4gICAgICAgICAgZW5lbXkuZmxlZXQuYXQoeCwgeSkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXV0bygpIHtcbiAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgaWYgKGVuZW15LmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyA9PT0gXCJpbGxlZ2FsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG8oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhdXRvQWRkKHNoaXApIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3Qgb3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuXG4gICAgICBmbGVldC5hdCh4LCB5KS5hZGQoc2hpcCwgb3JpZW50YXRpb24pO1xuXG4gICAgICBpZiAoIWZsZWV0LnNoaXBzQXJyYXkuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgICAgdGhpcy5hdXRvQWRkKHNoaXApO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBwdWJzdWIgPSB7XG4gIGV2ZW50czoge30sXG4gIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjayhkYXRhKSk7XG4gICAgfVxuICB9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHVic3ViO1xuIiwiY29uc3QgU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgbGV0IHNoaXBBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChcIlwiKTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBzaGlwQXJyYXkgPSBbLi4uc2hpcEFycmF5XS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHBvc2l0aW9uID8gXCJoaXRcIiA6IGVsZW1lbnQ7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNIaXRBdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XVtwb3NpdGlvbl0gPT09IFwiaGl0XCI7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4uc2hpcEFycmF5XS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJoaXRcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgc2hpcEFycmF5KCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzSGl0QXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVkLFxcbi5pbnB1dC1tb2RhbCAucmVkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucmVhZHkge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yZWFkeS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItb25lLWdhbWVib2FyZCxcXG4uZ2FtZWJvYXJkcyAucGxheWVyLXR3by1nYW1lYm9hcmQsXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgd2lkdGg6IDM4dnc7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MsXFxuLmlucHV0cy1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgZmxleDogMTtcXG4gIGdhcDogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyxcXG4uaW5wdXRzLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxPQUFPO0VBQ1AsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLmlucHV0LW1vZGFsIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC42KTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAucmVkLFxcbi5pbnB1dC1tb2RhbCAucmVkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucmVhZHkge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yZWFkeS5hY3RpdmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItb25lLWdhbWVib2FyZCxcXG4uZ2FtZWJvYXJkcyAucGxheWVyLXR3by1nYW1lYm9hcmQsXFxuLmlucHV0cy1nYW1lYm9hcmQge1xcbiAgd2lkdGg6IDM4dnc7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MsXFxuLmlucHV0cy1nYW1lYm9hcmQgLnJvd3Mge1xcbiAgZmxleDogMTtcXG4gIGdhcDogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAuY29sdW1ucyxcXG4uaW5wdXRzLWdhbWVib2FyZCAuY29sdW1ucyB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBnYW1lTW9kdWxlT2JqZWN0IGZyb20gXCIuL21vZHVsZXMvR2FtZVwiO1xuaW1wb3J0IERPTU1vZHVsZU9iamVjdCBmcm9tIFwiLi9tb2R1bGVzL0RPTVwiO1xuXG5ET01Nb2R1bGVPYmplY3QuZXhlY3V0ZSgpO1xuZ2FtZU1vZHVsZU9iamVjdC5leGVjdXRlKCk7XG4iXSwibmFtZXMiOlsiRE9NRmFjdG9yeSIsInB1YnN1YiIsInJlY2VpdmVDb21wdXRlckF0dGFjayIsIngiLCJ5IiwicGxheWVyQm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyb3ciLCJjb2x1bW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJzZW5kUGxheWVyQXR0YWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJnZXRBdHRyaWJ1dGUiLCJwdWJsaXNoIiwiY3JlYXRlR2FtZWJvYXJkIiwibmFtZSIsImJvYXJkIiwiZ3JpZCIsImNsYXNzTmFtZSIsImkiLCJqIiwibGVuZ3RoIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZEdhbWVib2FyZHMiLCJjb21wdXRlckJvYXJkIiwiZ2FtZWJvYXJkcyIsInNob3dBbGVydCIsInZpY3RvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhbGVydCIsInJlbmRlcklucHV0TW9kYWwiLCJpbnB1dE1vZGFsRGl2IiwiaW5wdXRHcmlkIiwiaW5wdXRTaGlwcyIsImNvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicm90YXRlIiwiaG9yaXpvbnRhbCIsInNoaXBzIiwiYWRkZWQiLCJtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsIiwiTnVtYmVyIiwiY2VsbHMiLCJjdXJyZW50VGFyZ2V0Iiwic2hpcExlbmd0aCIsImNvbCIsInB1c2giLCJzb21lIiwiaXRlbSIsImZvckVhY2giLCJzZXRBdHRyaWJ1dGUiLCJtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCIsImZvY3VzUm93IiwibW91c2VsZWF2ZUNhbGxiYWNrIiwicmVtb3ZlIiwicmVtb3ZlSW5wdXRNb2RhbCIsImlucHV0TW9kYWwiLCJhY3RpdmF0ZVJlYWR5RGl2IiwicmVhZHlEaXYiLCJjbGlja0NhbGxiYWNrIiwic2hpcFRvQWRkIiwiZmluZCIsInNoaXAiLCJjZWxsIiwic2hpcFRvQWRkSW5kZXgiLCJpbmRleE9mIiwib3JpZW50YXRpb24iLCJyZXF1aXJlZCIsIkRPTU1vZHVsZU9iamVjdCIsImV4ZWN1dGUiLCJzdWJzY3JpYmUiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIm5ld0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsIlNoaXAiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJwbGF5ZXIiLCJjb21wdXRlciIsImF1dG9BZGQiLCJhZGRQbGF5ZXJTaGlwcyIsImZsZWV0IiwiYXQiLCJjb21wdXRlckF0dGFja1NoaXAiLCJhdHRhY2siLCJhdXRvIiwieDEiLCJ5MSIsImFyZUFsbFNoaXBzU3VuayIsInBsYXllckF0dGFja1NoaXAiLCJnYW1lTW9kdWxlT2JqZWN0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic2hpcHNBcnJheSIsImxhdGVzdEF0dGFja1N0YXR1cyIsImNoZWNrSWZTaGlwQ2FuQmVBZGRlZCIsInJlcXVpcmVkU3BhY2UiLCJzbGljZSIsImV2ZXJ5IiwiYWRkU2hpcEluQXJyYXkiLCJhZGRTaGlwT25Cb2FyZCIsImF0dGFja1NoaXAiLCJoaXRQb3NpdGlvbiIsInRhcmdldEFyZWFIb3Jpem9udGFsIiwic2hpcExlZnRTaWRlIiwiZmlsdGVyIiwidGFyZ2V0QXJlYVZlcnRpY2FsIiwic2hpcFVwcGVyU2lkZSIsImlzSGl0QXQiLCJoaXQiLCJyZWNlaXZlQXR0YWNrIiwiaXNTdW5rIiwiZW5lbXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJvcmllbnRhdGlvbnMiLCJldmVudHMiLCJldmVudE5hbWUiLCJkYXRhIiwiY2FsbGJhY2siLCJpc0FycmF5Iiwic2hpcEFycmF5IiwicG9zaXRpb24iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=