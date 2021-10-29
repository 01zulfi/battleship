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
  }, {
    name: "scout",
    length: 1,
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

    if (shipToAdd.length === 1) {
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

var addShips = function addShips(ships) {
  var _iterator = _createForOfIteratorHelper(ships),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ship = _step.value;
      player.fleet.at(ship.x, ship.y).add((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.name, ship.length), ship.orientation);
      computer.autoAdd((0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.name, ship.length));
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
    _Pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe("input-ships", addShips);
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
    latestAttackStatus = "success/hit";
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
          latestAttackStatus = "success/miss";
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
  var hitPosition = {
    x: undefined,
    y: undefined
  };
  var targetArea = [];

  var useTargetArea = function useTargetArea(target) {
    if (target.length === 0) {
      hitPosition.x = undefined;
      hitPosition.y = undefined;
      return;
    }

    hitPosition.x = target[0].x;
    hitPosition.y = target[0].y;
    targetArea.splice(0, 1);
  };

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
          useTargetArea(targetArea);

          var x = function () {
            if (hitPosition.x === undefined) {
              return Math.floor(Math.random() * 10);
            }

            return hitPosition.x;
          }();

          var y = function () {
            if (hitPosition.y === undefined) {
              return Math.floor(Math.random() * 10);
            }

            return hitPosition.y;
          }();

          enemy.fleet.at(x, y).receiveAttack(x, y);

          if (enemy.fleet.latestAttackStatus === "illegal") {
            return this.auto();
          }

          if (enemy.fleet.latestAttackStatus === "success/hit") {
            targetArea = [];

            if (y + 1 <= 9) {
              targetArea.push({
                x: x,
                y: y + 1
              });
            }

            if (y - 1 >= 0) {
              targetArea.push({
                x: x,
                y: y - 1
              });
            }

            if (x + 1 <= 9) {
              targetArea.push({
                x: x + 1,
                y: y
              });
            }

            if (x - 1 >= 0) {
              targetArea.push({
                x: x - 1,
                y: y
              });
            }
          }

          console.log({
            targetArea: targetArea
          });
          console.log(x, y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBViw0REFBQTtBQUNBMEIsNkRBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QdWJzdWIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTUZhY3RvcnkgZnJvbSBcIi4vRE9NRmFjdG9yeVwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxuY29uc3QgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrID0gKFt4LCB5XSkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1nYW1lYm9hcmRcIik7XG4gIGNvbnN0IHJvdyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd3M9XCIke3h9XCJdYCk7XG4gIGNvbnN0IGNvbHVtbiA9IHJvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2x1bW5zPVwiJHt5fVwiXWApO1xuICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbn07XG5cbmNvbnN0IHNlbmRQbGF5ZXJBdHRhY2sgPSAoZXZlbnQpID0+IHtcbiAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sdW1uc1wiKSkgcmV0dXJuO1xuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgY29uc3QgeCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKTtcbiAgY29uc3QgeSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIik7XG4gIHB1YnN1Yi5wdWJsaXNoKFwicGxheWVyLWF0dGFjay1zaGlwXCIsIFt4LCB5XSk7XG59O1xuXG5jb25zdCBjcmVhdGVHYW1lYm9hcmQgPSAobmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgZ3JpZCA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IG5hbWUgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IERPTUZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicm93c1wiLCBcImRhdGEtcm93c1wiOiBpIH0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY29sdW1uID0gRE9NRmFjdG9yeShcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb2x1bW5zXCIsXG4gICAgICAgIFwiZGF0YS1jb2x1bW5zXCI6IGosXG4gICAgICB9KTtcbiAgICAgIGlmIChib2FyZC5sZW5ndGggIT09IDAgJiYgdHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoY29sdW1uKTtcbiAgICB9XG4gICAgZ3JpZC5hcHBlbmQocm93KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VuZFBsYXllckF0dGFjayk7XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5jb25zdCBhcHBlbmRHYW1lYm9hcmRzID0gKFtwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZF0pID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkc1wiKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLW9uZS1nYW1lYm9hcmRcIiwgcGxheWVyQm9hcmQpKTtcbiAgZ2FtZWJvYXJkcy5hcHBlbmQoY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyLXR3by1nYW1lYm9hcmRcIiwgY29tcHV0ZXJCb2FyZCkpO1xufTtcblxuY29uc3Qgc2hvd0FsZXJ0ID0gKHZpY3RvcikgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d28tZ2FtZWJvYXJkXCIpXG4gICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kUGxheWVyQXR0YWNrKTtcbiAgYWxlcnQodmljdG9yKTtcbn07XG5cbmNvbnN0IHJlbmRlcklucHV0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0TW9kYWxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICBjb25zdCBpbnB1dEdyaWQgPSBjcmVhdGVHYW1lYm9hcmQoXCJpbnB1dHMtZ2FtZWJvYXJkXCIsIFtdKTtcbiAgaW5wdXRNb2RhbERpdi5hcHBlbmQoaW5wdXRHcmlkKTtcbn07XG5cbmNvbnN0IGlucHV0U2hpcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRzLWdhbWVib2FyZFwiKTtcbiAgY29uc3QgY29sdW1ucyA9IFsuLi5pbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zXCIpXTtcbiAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVcIik7XG4gIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgY29uc3Qgc2hpcHMgPSBbXG4gICAgeyBuYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1LCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwiZGVzdHJveWVyXCIsIGxlbmd0aDogNCwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogMywgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInBhdHJvbFwiLCBsZW5ndGg6IDIsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJzY291dFwiLCBsZW5ndGg6IDEsIGFkZGVkOiBmYWxzZSB9LFxuICBdO1xuXG4gIGNvbnN0IG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb2wgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1ucz1cIiR7Y29sdW1uICsgaX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGNlbGxzLnB1c2goY29sKTtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IG51bGwpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNlbGxzLnNvbWUoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudGF0aW9uXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICApO1xuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBjb25zdCByb3cgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpKTtcbiAgICBjb25zdCBncmlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY3VycmVudFRhcmdldC5zaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGZvY3VzUm93ID0gZ3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3dzPVwiJHtyb3cgKyBpfVwiXWApO1xuICAgICAgaWYgKCFmb2N1c1JvdykgYnJlYWs7XG4gICAgICBjZWxscy5wdXNoKGZvY3VzUm93LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbHVtbnM9XCIke2NvbHVtbn1cIl1gKSk7XG4gICAgfVxuICAgIGlmIChjZWxscy5sZW5ndGggPCBldmVudC5jdXJyZW50VGFyZ2V0LnNoaXBMZW5ndGgpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRhdGlvblwiLCBcInZlcnRpY2FsXCIpKTtcbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VsZWF2ZUNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnNcIilcbiAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSW5wdXRNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1tb2RhbFwiKTtcbiAgICBpbnB1dE1vZGFsLnJlbW92ZSgpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiaW5wdXQtc2hpcHNcIiwgc2hpcHMpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlUmVhZHlEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVhZHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWR5XCIpO1xuICAgIHJlYWR5RGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgcmVhZHlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUlucHV0TW9kYWwpO1xuICB9O1xuXG4gIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2x1bW5zXCIpKSByZXR1cm47XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWRcIikpIHJldHVybjtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHJldHVybjtcbiAgICBjb25zdCBzaGlwVG9BZGQgPSBzaGlwcy5maW5kKChzaGlwKSA9PiAhc2hpcC5hZGRlZCk7XG4gICAgaWYgKCFzaGlwVG9BZGQpIHJldHVybjtcbiAgICBpZiAoc2hpcFRvQWRkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICAgICAgKTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCksXG4gICAgICApO1xuICAgICAgYWN0aXZhdGVSZWFkeURpdigpO1xuICAgIH1cbiAgICBjb25zdCBzaGlwVG9BZGRJbmRleCA9IHNoaXBzLmluZGV4T2Yoc2hpcFRvQWRkKTtcbiAgICBzaGlwVG9BZGQuYWRkZWQgPSB0cnVlO1xuICAgIHNoaXBUb0FkZC54ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKSk7XG4gICAgc2hpcFRvQWRkLnkgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKSk7XG4gICAgc2hpcFRvQWRkLm9yaWVudGF0aW9uID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50YXRpb25cIik7XG4gICAgY29uc3QgcmVxdWlyZWQgPSBpbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5zLmhvdmVyXCIpO1xuICAgIHJlcXVpcmVkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInNoaXBcIikpO1xuICAgIHJlcXVpcmVkLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChzaGlwVG9BZGQubmFtZSkpO1xuICAgIGlmICghc2hpcHNbc2hpcFRvQWRkSW5kZXggKyAxXSkgcmV0dXJuO1xuICAgIGNvbHVtbnMuZm9yRWFjaChcbiAgICAgIChjZWxsKSA9PiAoY2VsbC5zaGlwTGVuZ3RoID0gc2hpcHNbc2hpcFRvQWRkSW5kZXggKyAxXS5sZW5ndGgpLFxuICAgICk7XG4gIH07XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PiAoY2VsbC5zaGlwTGVuZ3RoID0gNSkpO1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICApO1xuXG4gIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG1vdXNlbGVhdmVDYWxsYmFjayksXG4gICk7XG5cbiAgaW5wdXRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0NhbGxiYWNrKTtcblxuICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwpLFxuICAgICAgKTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tWZXJ0aWNhbCksXG4gICAgICApO1xuICAgICAgaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgRE9NTW9kdWxlT2JqZWN0ID0ge1xuICBleGVjdXRlKCkge1xuICAgIHJlbmRlcklucHV0TW9kYWwoKTtcbiAgICBpbnB1dFNoaXBzKCk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImZsZWV0cy1pbml0aWFsaXplZFwiLCBhcHBlbmRHYW1lYm9hcmRzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiY29tcHV0ZXItYXR0YWNrLXNoaXBcIiwgcmVjZWl2ZUNvbXB1dGVyQXR0YWNrKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiZ2FtZS1lbmRcIiwgc2hvd0FsZXJ0KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1vZHVsZU9iamVjdDtcbiIsImNvbnN0IERPTUZhY3RvcnkgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgZm9yIChjb25zdCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgIGlmICghbmV3RWxlbWVudFthdHRyaWJ1dGVdKSB7XG4gICAgICBpZiAoYXR0cmlidXRlLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJkYXRhXCIpKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS50b1N0cmluZygpLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudFthdHRyaWJ1dGVdID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTUZhY3Rvcnk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vUHVic3ViXCI7XG5cbmNvbnN0IHBsYXllciA9IFBsYXllcihcInBsYXllclwiLCBHYW1lYm9hcmQoKSk7XG5jb25zdCBjb21wdXRlciA9IFBsYXllcihcImNvbXB1dGVyXCIsIEdhbWVib2FyZCgpKTtcblxuY29uc3QgYWRkU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgcGxheWVyLmZsZWV0XG4gICAgICAuYXQoc2hpcC54LCBzaGlwLnkpXG4gICAgICAuYWRkKFNoaXAoc2hpcC5uYW1lLCBzaGlwLmxlbmd0aCksIHNoaXAub3JpZW50YXRpb24pO1xuICAgIGNvbXB1dGVyLmF1dG9BZGQoU2hpcChzaGlwLm5hbWUsIHNoaXAubGVuZ3RoKSk7XG4gIH1cbiAgcHVic3ViLnB1Ymxpc2goXCJmbGVldHMtaW5pdGlhbGl6ZWRcIiwgW1xuICAgIHBsYXllci5mbGVldC5ib2FyZCxcbiAgICBjb21wdXRlci5mbGVldC5ib2FyZCxcbiAgXSk7XG59O1xuXG5jb25zdCBjb21wdXRlckF0dGFja1NoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IFt4MSwgeTFdID0gY29tcHV0ZXIuYXR0YWNrKHBsYXllcikuYXV0bygpO1xuICBwdWJzdWIucHVibGlzaChcImNvbXB1dGVyLWF0dGFjay1zaGlwXCIsIFt4MSwgeTFdKTtcbiAgaWYgKHBsYXllci5mbGVldC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZ2FtZS1lbmRcIiwgXCJjb21wdXRlciB3b25cIik7XG4gIH1cbn07XG5cbmNvbnN0IHBsYXllckF0dGFja1NoaXAgPSAoW3gsIHldKSA9PiB7XG4gIHBsYXllci5hdHRhY2soY29tcHV0ZXIpLmF0KHgsIHkpO1xuICBpZiAoY29tcHV0ZXIuZmxlZXQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBwdWJzdWIucHVibGlzaChcImdhbWUtZW5kXCIsIFwicGxheWVyIHdvblwiKTtcbiAgfVxuICBjb21wdXRlckF0dGFja1NoaXAoKTtcbn07XG5cbmNvbnN0IGdhbWVNb2R1bGVPYmplY3QgPSB7XG4gIGV4ZWN1dGUoKSB7XG4gICAgcHVic3ViLnN1YnNjcmliZShcImlucHV0LXNoaXBzXCIsIGFkZFNoaXBzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwicGxheWVyLWF0dGFjay1zaGlwXCIsIHBsYXllckF0dGFja1NoaXApO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZU1vZHVsZU9iamVjdDtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBBcnJheSgxMClcbiAgICAuZmlsbChcIlwiKVxuICAgIC5tYXAoKGVsZW1lbnQpID0+IEFycmF5KDEwKS5maWxsKGVsZW1lbnQpKTtcblxuICBjb25zdCBzaGlwc0FycmF5ID0gW107XG5cbiAgbGV0IGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiXCI7XG5cbiAgY29uc3QgY2hlY2tJZlNoaXBDYW5CZUFkZGVkID0gKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3QgcmVxdWlyZWRTcGFjZSA9IFsuLi5ib2FyZF1beF0uc2xpY2UoeSwgeSArIHNoaXBMZW5ndGgpO1xuICAgICAgaWYgKHJlcXVpcmVkU3BhY2UubGVuZ3RoICE9PSBzaGlwTGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gcmVxdWlyZWRTcGFjZS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJcIik7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBjb25zdCByZXF1aXJlZFNwYWNlID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA5IC0geDsgaSArPSAxKSB7XG4gICAgICAgIHJlcXVpcmVkU3BhY2UucHVzaChib2FyZFt4ICsgaV1beV0pO1xuICAgICAgfVxuICAgICAgaWYgKHJlcXVpcmVkU3BhY2UubGVuZ3RoIDwgc2hpcExlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHJlcXVpcmVkU3BhY2UuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICBjb25zdCBhZGRTaGlwSW5BcnJheSA9IChzaGlwKSA9PiB7XG4gICAgc2hpcHNBcnJheS5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgYm9hcmRbeF0uZmlsbChzaGlwLCB5LCB5ICsgc2hpcC5sZW5ndGgpO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCBzaGlwLmxlbmd0aCArIHg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFtpXVt5XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcbiAgICBsZXQgaGl0UG9zaXRpb24gPSAwO1xuICAgIC8vIGdldCBsZWZ0IG9mIGdhbWVib2FyZCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHRhcmdldEFyZWFIb3Jpem9udGFsID0gYm9hcmRbeF0uc2xpY2UoMCwgeSk7XG4gICAgLy8gZmlsdGVyIHRvIGdldCBsZWZ0IG9mIHNoaXAgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBjb25zdCBzaGlwTGVmdFNpZGUgPSB0YXJnZXRBcmVhSG9yaXpvbnRhbC5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcbiAgICBjb25zdCB0YXJnZXRBcmVhVmVydGljYWwgPSBbXTtcbiAgICAvLyBnZXQgdXBwZXIgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4OyBpICs9IDEpIHtcbiAgICAgIHRhcmdldEFyZWFWZXJ0aWNhbC5wdXNoKGJvYXJkW2ldW3ldKTtcbiAgICB9XG4gICAgLy8gZmlsdGVyIHRvIGdldCB1cHBlciBvZiBzaGlwIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3Qgc2hpcFVwcGVyU2lkZSA9IHRhcmdldEFyZWFWZXJ0aWNhbC5maWx0ZXIoXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09PSBzaGlwLm5hbWUsXG4gICAgKTtcblxuICAgIGhpdFBvc2l0aW9uID0gKCgpID0+IHtcbiAgICAgIGlmIChzaGlwTGVmdFNpZGUubGVuZ3RoID09PSAwICYmIHNoaXBVcHBlclNpZGUubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgICAgIGlmIChzaGlwTGVmdFNpZGUubGVuZ3RoID09PSAwICYmIHNoaXBVcHBlclNpZGUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzaGlwVXBwZXJTaWRlLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGlwTGVmdFNpZGUubGVuZ3RoO1xuICAgIH0pKCk7XG5cbiAgICBpZiAoc2hpcC5pc0hpdEF0KGhpdFBvc2l0aW9uKSkge1xuICAgICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJpbGxlZ2FsXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hpcC5oaXQoaGl0UG9zaXRpb24pO1xuICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzcy9oaXRcIjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIHJldHVybiBbLi4uYm9hcmRdO1xuICAgIH0sXG4gICAgZ2V0IHNoaXBzQXJyYXkoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBzQXJyYXldO1xuICAgIH0sXG4gICAgZ2V0IGxhdGVzdEF0dGFja1N0YXR1cygpIHtcbiAgICAgIHJldHVybiBsYXRlc3RBdHRhY2tTdGF0dXM7XG4gICAgfSxcbiAgICBhdCh4LCB5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGQoc2hpcCwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgICBpZiAoY2hlY2tJZlNoaXBDYW5CZUFkZGVkKHgsIHksIG9yaWVudGF0aW9uLCBzaGlwLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGFkZFNoaXBJbkFycmF5KHNoaXApO1xuICAgICAgICAgICAgYWRkU2hpcE9uQm9hcmQoeCwgeSwgb3JpZW50YXRpb24sIHNoaXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjaygpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkW3hdW3ldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBhdHRhY2tTaGlwKHgsIHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT09IFwiWFwiKSB7XG4gICAgICAgICAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcImlsbGVnYWxcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9hcmRbeF1beV0gPSBcIlhcIjtcbiAgICAgICAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcInN1Y2Nlc3MvbWlzc1wiO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV0uZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSwgZmxlZXQpID0+IHtcbiAgY29uc3QgaGl0UG9zaXRpb24gPSB7IHg6IHVuZGVmaW5lZCwgeTogdW5kZWZpbmVkIH07XG4gIGxldCB0YXJnZXRBcmVhID0gW107XG5cbiAgY29uc3QgdXNlVGFyZ2V0QXJlYSA9ICh0YXJnZXQpID0+IHtcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgaGl0UG9zaXRpb24ueCA9IHVuZGVmaW5lZDtcbiAgICAgIGhpdFBvc2l0aW9uLnkgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpdFBvc2l0aW9uLnggPSB0YXJnZXRbMF0ueDtcbiAgICBoaXRQb3NpdGlvbi55ID0gdGFyZ2V0WzBdLnk7XG4gICAgdGFyZ2V0QXJlYS5zcGxpY2UoMCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IGZsZWV0KCkge1xuICAgICAgcmV0dXJuIGZsZWV0O1xuICAgIH0sXG4gICAgYXR0YWNrKGVuZW15KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdCh4LCB5KSB7XG4gICAgICAgICAgZW5lbXkuZmxlZXQuYXQoeCwgeSkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXV0bygpIHtcbiAgICAgICAgICB1c2VUYXJnZXRBcmVhKHRhcmdldEFyZWEpO1xuXG4gICAgICAgICAgY29uc3QgeCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGl0UG9zaXRpb24ueCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGl0UG9zaXRpb24ueDtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICAgIGNvbnN0IHkgPSAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhpdFBvc2l0aW9uLnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhpdFBvc2l0aW9uLnk7XG4gICAgICAgICAgfSkoKTtcblxuICAgICAgICAgIGVuZW15LmZsZWV0LmF0KHgsIHkpLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgICAgICAgICBpZiAoZW5lbXkuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzID09PSBcImlsbGVnYWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0bygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbmVteS5mbGVldC5sYXRlc3RBdHRhY2tTdGF0dXMgPT09IFwic3VjY2Vzcy9oaXRcIikge1xuICAgICAgICAgICAgdGFyZ2V0QXJlYSA9IFtdO1xuICAgICAgICAgICAgaWYgKHkgKyAxIDw9IDkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0QXJlYS5wdXNoKHsgeCwgeTogeSArIDEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeSAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICB0YXJnZXRBcmVhLnB1c2goeyB4LCB5OiB5IC0gMSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4ICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgIHRhcmdldEFyZWEucHVzaCh7IHg6IHggKyAxLCB5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0QXJlYS5wdXNoKHsgeDogeCAtIDEsIHkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZS5sb2coeyB0YXJnZXRBcmVhIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHgsIHkpO1xuICAgICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXV0b0FkZChzaGlwKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcblxuICAgICAgZmxlZXQuYXQoeCwgeSkuYWRkKHNoaXAsIG9yaWVudGF0aW9uKTtcblxuICAgICAgaWYgKCFmbGVldC5zaGlwc0FycmF5LmluY2x1ZGVzKHNoaXApKSB7XG4gICAgICAgIHRoaXMuYXV0b0FkZChzaGlwKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmIChwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZGF0YSkpO1xuICAgIH1cbiAgfSxcbiAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHVic3ViLmV2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgcHVic3ViLmV2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB1YnN1YjtcbiIsImNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gIGxldCBzaGlwQXJyYXkgPSBBcnJheShsZW5ndGgpLmZpbGwoXCJcIik7XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgc2hpcEFycmF5ID0gWy4uLnNoaXBBcnJheV0ubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09PSBwb3NpdGlvbiA/IFwiaGl0XCIgOiBlbGVtZW50O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGlzSGl0QXQgPSAocG9zaXRpb24pID0+IHtcbiAgICByZXR1cm4gWy4uLnNoaXBBcnJheV1bcG9zaXRpb25dID09PSBcImhpdFwiO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gWy4uLnNoaXBBcnJheV0uZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IFwiaGl0XCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0IHNoaXBBcnJheSgpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcEFycmF5XTtcbiAgICB9LFxuICAgIGhpdCxcbiAgICBpc0hpdEF0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5pbnB1dC1tb2RhbCB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNik7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnJlZCxcXG4uaW5wdXQtbW9kYWwgLnJlZC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJlYWR5IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZWFkeS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyAucGxheWVyLW9uZS1nYW1lYm9hcmQsXFxuLmdhbWVib2FyZHMgLnBsYXllci10d28tZ2FtZWJvYXJkLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIHdpZHRoOiAzOHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5yb3dzIHtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAuY29sdW1ucyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLmlucHV0cy1nYW1lYm9hcmQgLmNvbHVtbnMge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsT0FBTztFQUNQLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5pbnB1dC1tb2RhbCB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNik7XFxufVxcblxcbi5pbnB1dC1tb2RhbCAuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnJlZCxcXG4uaW5wdXQtbW9kYWwgLnJlZC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJlYWR5IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZWFkeS5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyAucGxheWVyLW9uZS1nYW1lYm9hcmQsXFxuLmdhbWVib2FyZHMgLnBsYXllci10d28tZ2FtZWJvYXJkLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIHtcXG4gIHdpZHRoOiAzOHZ3O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5yb3dzIHtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAuY29sdW1ucyxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLmlucHV0cy1nYW1lYm9hcmQgLmNvbHVtbnMge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuc2hpcC5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCxcXG4ucGxheWVyLXR3by1nYW1lYm9hcmQgLnJvd3MgLmNvbHVtbnMuaGl0IHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2FtZU1vZHVsZU9iamVjdCBmcm9tIFwiLi9tb2R1bGVzL0dhbWVcIjtcbmltcG9ydCBET01Nb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcblxuRE9NTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbmdhbWVNb2R1bGVPYmplY3QuZXhlY3V0ZSgpO1xuIl0sIm5hbWVzIjpbIkRPTUZhY3RvcnkiLCJwdWJzdWIiLCJyZWNlaXZlQ29tcHV0ZXJBdHRhY2siLCJ4IiwieSIsInBsYXllckJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm93IiwiY29sdW1uIiwiY2xhc3NMaXN0IiwiYWRkIiwic2VuZFBsYXllckF0dGFjayIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwicHVibGlzaCIsImNyZWF0ZUdhbWVib2FyZCIsIm5hbWUiLCJib2FyZCIsImdyaWQiLCJjbGFzc05hbWUiLCJpIiwiaiIsImxlbmd0aCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRHYW1lYm9hcmRzIiwiY29tcHV0ZXJCb2FyZCIsImdhbWVib2FyZHMiLCJzaG93QWxlcnQiLCJ2aWN0b3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWxlcnQiLCJyZW5kZXJJbnB1dE1vZGFsIiwiaW5wdXRNb2RhbERpdiIsImlucHV0R3JpZCIsImlucHV0U2hpcHMiLCJjb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsInJvdGF0ZSIsImhvcml6b250YWwiLCJzaGlwcyIsImFkZGVkIiwibW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCIsIk51bWJlciIsImNlbGxzIiwiY3VycmVudFRhcmdldCIsInNoaXBMZW5ndGgiLCJjb2wiLCJwdXNoIiwic29tZSIsIml0ZW0iLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwibW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwiLCJmb2N1c1JvdyIsIm1vdXNlbGVhdmVDYWxsYmFjayIsInJlbW92ZSIsInJlbW92ZUlucHV0TW9kYWwiLCJpbnB1dE1vZGFsIiwiYWN0aXZhdGVSZWFkeURpdiIsInJlYWR5RGl2IiwiY2xpY2tDYWxsYmFjayIsInNoaXBUb0FkZCIsImZpbmQiLCJzaGlwIiwiY2VsbCIsInNoaXBUb0FkZEluZGV4IiwiaW5kZXhPZiIsIm9yaWVudGF0aW9uIiwicmVxdWlyZWQiLCJET01Nb2R1bGVPYmplY3QiLCJleGVjdXRlIiwic3Vic2NyaWJlIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZSIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJTaGlwIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwicGxheWVyIiwiY29tcHV0ZXIiLCJhZGRTaGlwcyIsImZsZWV0IiwiYXQiLCJhdXRvQWRkIiwiY29tcHV0ZXJBdHRhY2tTaGlwIiwiYXR0YWNrIiwiYXV0byIsIngxIiwieTEiLCJhcmVBbGxTaGlwc1N1bmsiLCJwbGF5ZXJBdHRhY2tTaGlwIiwiZ2FtZU1vZHVsZU9iamVjdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInNoaXBzQXJyYXkiLCJsYXRlc3RBdHRhY2tTdGF0dXMiLCJjaGVja0lmU2hpcENhbkJlQWRkZWQiLCJyZXF1aXJlZFNwYWNlIiwic2xpY2UiLCJldmVyeSIsImFkZFNoaXBJbkFycmF5IiwiYWRkU2hpcE9uQm9hcmQiLCJhdHRhY2tTaGlwIiwiaGl0UG9zaXRpb24iLCJ0YXJnZXRBcmVhSG9yaXpvbnRhbCIsInNoaXBMZWZ0U2lkZSIsImZpbHRlciIsInRhcmdldEFyZWFWZXJ0aWNhbCIsInNoaXBVcHBlclNpZGUiLCJpc0hpdEF0IiwiaGl0IiwicmVjZWl2ZUF0dGFjayIsImlzU3VuayIsInVuZGVmaW5lZCIsInRhcmdldEFyZWEiLCJ1c2VUYXJnZXRBcmVhIiwic3BsaWNlIiwiZW5lbXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwib3JpZW50YXRpb25zIiwiZXZlbnRzIiwiZXZlbnROYW1lIiwiZGF0YSIsImNhbGxiYWNrIiwiaXNBcnJheSIsInNoaXBBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9