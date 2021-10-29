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
          var x = hitPosition.x || Math.floor(Math.random() * 10);
          var y = hitPosition.y || Math.floor(Math.random() * 10);
          enemy.fleet.at(x, y).receiveAttack(x, y);

          if (enemy.fleet.latestAttackStatus === "illegal") {
            return this.auto();
          }

          if (enemy.fleet.latestAttackStatus === "success/hit") {
            targetArea = [{
              x: x,
              y: y + 1
            }, {
              x: x,
              y: y - 1
            }, {
              x: x + 1,
              y: y
            }, {
              x: x - 1,
              y: y
            }];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUFWLDREQUFBO0FBQ0EwQiw2REFBQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRE9NRmFjdG9yeSBmcm9tIFwiLi9ET01GYWN0b3J5XCI7XG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL1B1YnN1YlwiO1xuXG5jb25zdCByZWNlaXZlQ29tcHV0ZXJBdHRhY2sgPSAoW3gsIHldKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItb25lLWdhbWVib2FyZFwiKTtcbiAgY29uc3Qgcm93ID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93cz1cIiR7eH1cIl1gKTtcbiAgY29uc3QgY29sdW1uID0gcm93LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbHVtbnM9XCIke3l9XCJdYCk7XG4gIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xufTtcblxuY29uc3Qgc2VuZFBsYXllckF0dGFjayA9IChldmVudCkgPT4ge1xuICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2x1bW5zXCIpKSByZXR1cm47XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICBjb25zdCB4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpO1xuICBjb25zdCB5ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uc1wiKTtcbiAgcHVic3ViLnB1Ymxpc2goXCJwbGF5ZXItYXR0YWNrLXNoaXBcIiwgW3gsIHldKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IChuYW1lLCBib2FyZCkgPT4ge1xuICBjb25zdCBncmlkID0gRE9NRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTmFtZTogbmFtZSB9KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gRE9NRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyb3dzXCIsIFwiZGF0YS1yb3dzXCI6IGkgfSk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBET01GYWN0b3J5KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNvbHVtbnNcIixcbiAgICAgICAgXCJkYXRhLWNvbHVtbnNcIjogaixcbiAgICAgIH0pO1xuICAgICAgaWYgKGJvYXJkLmxlbmd0aCAhPT0gMCAmJiB0eXBlb2YgYm9hcmRbaV1bal0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZChjb2x1bW4pO1xuICAgIH1cbiAgICBncmlkLmFwcGVuZChyb3cpO1xuICB9XG4gIGlmIChuYW1lID09PSBcInBsYXllci10d28tZ2FtZWJvYXJkXCIpIHtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kUGxheWVyQXR0YWNrKTtcbiAgfVxuICByZXR1cm4gZ3JpZDtcbn07XG5cbmNvbnN0IGFwcGVuZEdhbWVib2FyZHMgPSAoW3BsYXllckJvYXJkLCBjb21wdXRlckJvYXJkXSkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lYm9hcmRzXCIpO1xuICBnYW1lYm9hcmRzLmFwcGVuZChjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXItb25lLWdhbWVib2FyZFwiLCBwbGF5ZXJCb2FyZCkpO1xuICBnYW1lYm9hcmRzLmFwcGVuZChjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXItdHdvLWdhbWVib2FyZFwiLCBjb21wdXRlckJvYXJkKSk7XG59O1xuXG5jb25zdCBzaG93QWxlcnQgPSAodmljdG9yKSA9PiB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR3by1nYW1lYm9hcmRcIilcbiAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRQbGF5ZXJBdHRhY2spO1xuICBhbGVydCh2aWN0b3IpO1xufTtcblxuY29uc3QgcmVuZGVySW5wdXRNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRNb2RhbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtbW9kYWxcIik7XG4gIGNvbnN0IGlucHV0R3JpZCA9IGNyZWF0ZUdhbWVib2FyZChcImlucHV0cy1nYW1lYm9hcmRcIiwgW10pO1xuICBpbnB1dE1vZGFsRGl2LmFwcGVuZChpbnB1dEdyaWQpO1xufTtcblxuY29uc3QgaW5wdXRTaGlwcyA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dHMtZ2FtZWJvYXJkXCIpO1xuICBjb25zdCBjb2x1bW5zID0gWy4uLmlucHV0R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnNcIildO1xuICBjb25zdCByb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiAgbGV0IGhvcml6b250YWwgPSB0cnVlO1xuICBjb25zdCBzaGlwcyA9IFtcbiAgICB7IG5hbWU6IFwiY2FycmllclwiLCBsZW5ndGg6IDUsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiA0LCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwiY3J1aXNlclwiLCBsZW5ndGg6IDMsIGFkZGVkOiBmYWxzZSB9LFxuICAgIHsgbmFtZTogXCJzdWJtYXJpbmVcIiwgbGVuZ3RoOiAzLCBhZGRlZDogZmFsc2UgfSxcbiAgICB7IG5hbWU6IFwicGF0cm9sXCIsIGxlbmd0aDogMiwgYWRkZWQ6IGZhbHNlIH0sXG4gICAgeyBuYW1lOiBcInNjb3V0XCIsIGxlbmd0aDogMSwgYWRkZWQ6IGZhbHNlIH0sXG4gIF07XG5cbiAgY29uc3QgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY3VycmVudFRhcmdldC5zaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1jb2x1bW5zPVwiJHtjb2x1bW4gKyBpfVwiXWAsXG4gICAgICApO1xuICAgICAgY2VsbHMucHVzaChjb2wpO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbSA9PT0gbnVsbCkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2VsbHMuc29tZSgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50YXRpb25cIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICk7XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIikpO1xuICB9O1xuXG4gIGNvbnN0IG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY29sdW1uID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbnNcIikpO1xuICAgIGNvbnN0IHJvdyA9IE51bWJlcihldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd3NcIikpO1xuICAgIGNvbnN0IGdyaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jdXJyZW50VGFyZ2V0LnNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZm9jdXNSb3cgPSBncmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvd3M9XCIke3JvdyArIGl9XCJdYCk7XG4gICAgICBpZiAoIWZvY3VzUm93KSBicmVhaztcbiAgICAgIGNlbGxzLnB1c2goZm9jdXNSb3cucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sdW1ucz1cIiR7Y29sdW1ufVwiXWApKTtcbiAgICB9XG4gICAgaWYgKGNlbGxzLmxlbmd0aCA8IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2hpcExlbmd0aCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjZWxscy5zb21lKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudGF0aW9uXCIsIFwidmVydGljYWxcIikpO1xuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZWxlYXZlQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sdW1uc1wiKVxuICAgICAgLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVJbnB1dE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1vZGFsXCIpO1xuICAgIGlucHV0TW9kYWwucmVtb3ZlKCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJpbnB1dC1zaGlwc1wiLCBzaGlwcyk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVSZWFkeURpdiA9ICgpID0+IHtcbiAgICBjb25zdCByZWFkeURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZHlcIik7XG4gICAgcmVhZHlEaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICByZWFkeURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlSW5wdXRNb2RhbCk7XG4gIH07XG5cbiAgY29uc3QgY2xpY2tDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbHVtbnNcIikpIHJldHVybjtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlZFwiKSkgcmV0dXJuO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNoaXBUb0FkZCA9IHNoaXBzLmZpbmQoKHNoaXApID0+ICFzaGlwLmFkZGVkKTtcbiAgICBpZiAoIXNoaXBUb0FkZCkgcmV0dXJuO1xuICAgIGlmIChzaGlwVG9BZGQubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBhY3RpdmF0ZVJlYWR5RGl2KCk7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBUb0FkZEluZGV4ID0gc2hpcHMuaW5kZXhPZihzaGlwVG9BZGQpO1xuICAgIHNoaXBUb0FkZC5hZGRlZCA9IHRydWU7XG4gICAgc2hpcFRvQWRkLnggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpKTtcbiAgICBzaGlwVG9BZGQueSA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5zXCIpKTtcbiAgICBzaGlwVG9BZGQub3JpZW50YXRpb24gPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRhdGlvblwiKTtcbiAgICBjb25zdCByZXF1aXJlZCA9IGlucHV0R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtbnMuaG92ZXJcIik7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKSk7XG4gICAgcmVxdWlyZWQuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKHNoaXBUb0FkZC5uYW1lKSk7XG4gICAgaWYgKCFzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdKSByZXR1cm47XG4gICAgY29sdW1ucy5mb3JFYWNoKFxuICAgICAgKGNlbGwpID0+IChjZWxsLnNoaXBMZW5ndGggPSBzaGlwc1tzaGlwVG9BZGRJbmRleCArIDFdLmxlbmd0aCksXG4gICAgKTtcbiAgfTtcblxuICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+IChjZWxsLnNoaXBMZW5ndGggPSA1KSk7XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICk7XG5cbiAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VsZWF2ZUNhbGxiYWNrKSxcbiAgKTtcblxuICBpbnB1dEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQ2FsbGJhY2spO1xuXG4gIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrSG9yaXpvbnRhbCksXG4gICAgICApO1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjZWxsKSA9PlxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsKSxcbiAgICAgICk7XG4gICAgICBob3Jpem9udGFsID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBtb3VzZWVudGVyQ2FsbGJhY2tIb3Jpem9udGFsKSxcbiAgICAgICk7XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNlbGwpID0+XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgbW91c2VlbnRlckNhbGxiYWNrVmVydGljYWwpLFxuICAgICAgKTtcbiAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBET01Nb2R1bGVPYmplY3QgPSB7XG4gIGV4ZWN1dGUoKSB7XG4gICAgcmVuZGVySW5wdXRNb2RhbCgpO1xuICAgIGlucHV0U2hpcHMoKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiZmxlZXRzLWluaXRpYWxpemVkXCIsIGFwcGVuZEdhbWVib2FyZHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJjb21wdXRlci1hdHRhY2stc2hpcFwiLCByZWNlaXZlQ29tcHV0ZXJBdHRhY2spO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJnYW1lLWVuZFwiLCBzaG93QWxlcnQpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTW9kdWxlT2JqZWN0O1xuIiwiY29uc3QgRE9NRmFjdG9yeSA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFuZXdFbGVtZW50W2F0dHJpYnV0ZV0pIHtcbiAgICAgIGlmIChhdHRyaWJ1dGUudG9TdHJpbmcoKS5pbmNsdWRlcyhcImRhdGFcIikpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLnRvU3RyaW5nKCksIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50W2F0dHJpYnV0ZV0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NRmFjdG9yeTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9QdWJzdWJcIjtcblxuY29uc3QgcGxheWVyID0gUGxheWVyKFwicGxheWVyXCIsIEdhbWVib2FyZCgpKTtcbmNvbnN0IGNvbXB1dGVyID0gUGxheWVyKFwiY29tcHV0ZXJcIiwgR2FtZWJvYXJkKCkpO1xuXG5jb25zdCBhZGRTaGlwcyA9IChzaGlwcykgPT4ge1xuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBwbGF5ZXIuZmxlZXRcbiAgICAgIC5hdChzaGlwLngsIHNoaXAueSlcbiAgICAgIC5hZGQoU2hpcChzaGlwLm5hbWUsIHNoaXAubGVuZ3RoKSwgc2hpcC5vcmllbnRhdGlvbik7XG4gICAgY29tcHV0ZXIuYXV0b0FkZChTaGlwKHNoaXAubmFtZSwgc2hpcC5sZW5ndGgpKTtcbiAgfVxuICBwdWJzdWIucHVibGlzaChcImZsZWV0cy1pbml0aWFsaXplZFwiLCBbXG4gICAgcGxheWVyLmZsZWV0LmJvYXJkLFxuICAgIGNvbXB1dGVyLmZsZWV0LmJvYXJkLFxuICBdKTtcbn07XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgW3gxLCB5MV0gPSBjb21wdXRlci5hdHRhY2socGxheWVyKS5hdXRvKCk7XG4gIHB1YnN1Yi5wdWJsaXNoKFwiY29tcHV0ZXItYXR0YWNrLXNoaXBcIiwgW3gxLCB5MV0pO1xuICBpZiAocGxheWVyLmZsZWV0LmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJnYW1lLWVuZFwiLCBcImNvbXB1dGVyIHdvblwiKTtcbiAgfVxufTtcblxuY29uc3QgcGxheWVyQXR0YWNrU2hpcCA9IChbeCwgeV0pID0+IHtcbiAgcGxheWVyLmF0dGFjayhjb21wdXRlcikuYXQoeCwgeSk7XG4gIGlmIChjb21wdXRlci5mbGVldC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZ2FtZS1lbmRcIiwgXCJwbGF5ZXIgd29uXCIpO1xuICB9XG4gIGNvbXB1dGVyQXR0YWNrU2hpcCgpO1xufTtcblxuY29uc3QgZ2FtZU1vZHVsZU9iamVjdCA9IHtcbiAgZXhlY3V0ZSgpIHtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwiaW5wdXQtc2hpcHNcIiwgYWRkU2hpcHMpO1xuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJwbGF5ZXItYXR0YWNrLXNoaXBcIiwgcGxheWVyQXR0YWNrU2hpcCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTW9kdWxlT2JqZWN0O1xuIiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEFycmF5KDEwKVxuICAgIC5maWxsKFwiXCIpXG4gICAgLm1hcCgoZWxlbWVudCkgPT4gQXJyYXkoMTApLmZpbGwoZWxlbWVudCkpO1xuXG4gIGNvbnN0IHNoaXBzQXJyYXkgPSBbXTtcblxuICBsZXQgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJcIjtcblxuICBjb25zdCBjaGVja0lmU2hpcENhbkJlQWRkZWQgPSAoeCwgeSwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBjb25zdCByZXF1aXJlZFNwYWNlID0gWy4uLmJvYXJkXVt4XS5zbGljZSh5LCB5ICsgc2hpcExlbmd0aCk7XG4gICAgICBpZiAocmVxdWlyZWRTcGFjZS5sZW5ndGggIT09IHNoaXBMZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiByZXF1aXJlZFNwYWNlLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcIlwiKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkU3BhY2UgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDkgLSB4OyBpICs9IDEpIHtcbiAgICAgICAgcmVxdWlyZWRTcGFjZS5wdXNoKGJvYXJkW3ggKyBpXVt5XSk7XG4gICAgICB9XG4gICAgICBpZiAocmVxdWlyZWRTcGFjZS5sZW5ndGggPCBzaGlwTGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gcmVxdWlyZWRTcGFjZS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gXCJcIik7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXBJbkFycmF5ID0gKHNoaXApID0+IHtcbiAgICBzaGlwc0FycmF5LnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcE9uQm9hcmQgPSAoeCwgeSwgb3JpZW50YXRpb24sIHNoaXApID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBib2FyZFt4XS5maWxsKHNoaXAsIHksIHkgKyBzaGlwLmxlbmd0aCk7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHNoaXAubGVuZ3RoICsgeDsgaSArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU2hpcCA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkW3hdW3ldO1xuICAgIGxldCBoaXRQb3NpdGlvbiA9IDA7XG4gICAgLy8gZ2V0IGxlZnQgb2YgZ2FtZWJvYXJkIGZyb20gaGl0IHBvc2l0aW9uXG4gICAgY29uc3QgdGFyZ2V0QXJlYUhvcml6b250YWwgPSBib2FyZFt4XS5zbGljZSgwLCB5KTtcbiAgICAvLyBmaWx0ZXIgdG8gZ2V0IGxlZnQgb2Ygc2hpcCBmcm9tIGhpdCBwb3NpdGlvblxuICAgIGNvbnN0IHNoaXBMZWZ0U2lkZSA9IHRhcmdldEFyZWFIb3Jpem9udGFsLmZpbHRlcihcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPT09IHNoaXAubmFtZSxcbiAgICApO1xuICAgIGNvbnN0IHRhcmdldEFyZWFWZXJ0aWNhbCA9IFtdO1xuICAgIC8vIGdldCB1cHBlciBvZiBnYW1lYm9hcmQgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHg7IGkgKz0gMSkge1xuICAgICAgdGFyZ2V0QXJlYVZlcnRpY2FsLnB1c2goYm9hcmRbaV1beV0pO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIgdG8gZ2V0IHVwcGVyIG9mIHNoaXAgZnJvbSBoaXQgcG9zaXRpb25cbiAgICBjb25zdCBzaGlwVXBwZXJTaWRlID0gdGFyZ2V0QXJlYVZlcnRpY2FsLmZpbHRlcihcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPT09IHNoaXAubmFtZSxcbiAgICApO1xuXG4gICAgaGl0UG9zaXRpb24gPSAoKCkgPT4ge1xuICAgICAgaWYgKHNoaXBMZWZ0U2lkZS5sZW5ndGggPT09IDAgJiYgc2hpcFVwcGVyU2lkZS5sZW5ndGggPT09IDApIHJldHVybiAwO1xuICAgICAgaWYgKHNoaXBMZWZ0U2lkZS5sZW5ndGggPT09IDAgJiYgc2hpcFVwcGVyU2lkZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNoaXBVcHBlclNpZGUubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBMZWZ0U2lkZS5sZW5ndGg7XG4gICAgfSkoKTtcblxuICAgIGlmIChzaGlwLmlzSGl0QXQoaGl0UG9zaXRpb24pKSB7XG4gICAgICBsYXRlc3RBdHRhY2tTdGF0dXMgPSBcImlsbGVnYWxcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaGlwLmhpdChoaXRQb3NpdGlvbik7XG4gICAgbGF0ZXN0QXR0YWNrU3RhdHVzID0gXCJzdWNjZXNzL2hpdFwiO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIFsuLi5ib2FyZF07XG4gICAgfSxcbiAgICBnZXQgc2hpcHNBcnJheSgpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcHNBcnJheV07XG4gICAgfSxcbiAgICBnZXQgbGF0ZXN0QXR0YWNrU3RhdHVzKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdEF0dGFja1N0YXR1cztcbiAgICB9LFxuICAgIGF0KHgsIHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZChzaGlwLCBvcmllbnRhdGlvbikge1xuICAgICAgICAgIGlmIChjaGVja0lmU2hpcENhbkJlQWRkZWQoeCwgeSwgb3JpZW50YXRpb24sIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgICAgYWRkU2hpcEluQXJyYXkoc2hpcCk7XG4gICAgICAgICAgICBhZGRTaGlwT25Cb2FyZCh4LCB5LCBvcmllbnRhdGlvbiwgc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbeF1beV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGF0dGFja1NoaXAoeCwgeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gXCJYXCIpIHtcbiAgICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwiaWxsZWdhbFwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiWFwiO1xuICAgICAgICAgIGxhdGVzdEF0dGFja1N0YXR1cyA9IFwic3VjY2Vzcy9taXNzXCI7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwc0FycmF5XS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IChuYW1lLCBmbGVldCkgPT4ge1xuICBjb25zdCBoaXRQb3NpdGlvbiA9IHsgeDogdW5kZWZpbmVkLCB5OiB1bmRlZmluZWQgfTtcbiAgbGV0IHRhcmdldEFyZWEgPSBbXTtcbiAgY29uc3QgdXNlVGFyZ2V0QXJlYSA9ICh0YXJnZXQpID0+IHtcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgaGl0UG9zaXRpb24ueCA9IHVuZGVmaW5lZDtcbiAgICAgIGhpdFBvc2l0aW9uLnkgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpdFBvc2l0aW9uLnggPSB0YXJnZXRbMF0ueDtcbiAgICBoaXRQb3NpdGlvbi55ID0gdGFyZ2V0WzBdLnk7XG4gICAgdGFyZ2V0QXJlYS5zcGxpY2UoMCwgMSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBmbGVldCgpIHtcbiAgICAgIHJldHVybiBmbGVldDtcbiAgICB9LFxuICAgIGF0dGFjayhlbmVteSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXQoeCwgeSkge1xuICAgICAgICAgIGVuZW15LmZsZWV0LmF0KHgsIHkpLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGF1dG8oKSB7XG4gICAgICAgICAgdXNlVGFyZ2V0QXJlYSh0YXJnZXRBcmVhKTtcblxuICAgICAgICAgIGNvbnN0IHggPSBoaXRQb3NpdGlvbi54IHx8IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICBjb25zdCB5ID0gaGl0UG9zaXRpb24ueSB8fCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgICBlbmVteS5mbGVldC5hdCh4LCB5KS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgICAgICAgaWYgKGVuZW15LmZsZWV0LmxhdGVzdEF0dGFja1N0YXR1cyA9PT0gXCJpbGxlZ2FsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG8oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZW5lbXkuZmxlZXQubGF0ZXN0QXR0YWNrU3RhdHVzID09PSBcInN1Y2Nlc3MvaGl0XCIpIHtcbiAgICAgICAgICAgIHRhcmdldEFyZWEgPSBbXG4gICAgICAgICAgICAgIHsgeCwgeTogeSArIDEgfSxcbiAgICAgICAgICAgICAgeyB4LCB5OiB5IC0gMSB9LFxuICAgICAgICAgICAgICB7IHg6IHggKyAxLCB5IH0sXG4gICAgICAgICAgICAgIHsgeDogeCAtIDEsIHkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdGFyZ2V0QXJlYSB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh4LCB5KTtcbiAgICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGF1dG9BZGQoc2hpcCkge1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG5cbiAgICAgIGZsZWV0LmF0KHgsIHkpLmFkZChzaGlwLCBvcmllbnRhdGlvbik7XG5cbiAgICAgIGlmICghZmxlZXQuc2hpcHNBcnJheS5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgICB0aGlzLmF1dG9BZGQoc2hpcCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAocHVic3ViLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGRhdGEpKTtcbiAgICB9XG4gIH0sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHB1YnN1Yi5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBwdWJzdWIuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwdWJzdWI7XG4iLCJjb25zdCBTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICBsZXQgc2hpcEFycmF5ID0gQXJyYXkobGVuZ3RoKS5maWxsKFwiXCIpO1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHNoaXBBcnJheSA9IFsuLi5zaGlwQXJyYXldLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PT0gcG9zaXRpb24gPyBcImhpdFwiIDogZWxlbWVudDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc0hpdEF0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldW3Bvc2l0aW9uXSA9PT0gXCJoaXRcIjtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5zaGlwQXJyYXldLmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBcImhpdFwiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9LFxuICAgIGdldCBzaGlwQXJyYXkoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBBcnJheV07XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNIaXRBdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjYpO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5yZWQsXFxuLmlucHV0LW1vZGFsIC5yZWQuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yZWFkeSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCxcXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICB3aWR0aDogMzh2dztcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyxcXG4uaW5wdXRzLWdhbWVib2FyZCAucm93cyB7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLE9BQU87RUFDUCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjYpO1xcbn1cXG5cXG4uaW5wdXQtbW9kYWwgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmlucHV0LW1vZGFsIC5yZWQsXFxuLmlucHV0LW1vZGFsIC5yZWQuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yZWFkeSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVhZHkuYWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJlYWR5LmFjdGl2ZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmdhbWVib2FyZHMgLnBsYXllci1vbmUtZ2FtZWJvYXJkLFxcbi5nYW1lYm9hcmRzIC5wbGF5ZXItdHdvLWdhbWVib2FyZCxcXG4uaW5wdXRzLWdhbWVib2FyZCB7XFxuICB3aWR0aDogMzh2dztcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzLFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyxcXG4uaW5wdXRzLWdhbWVib2FyZCAucm93cyB7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucGxheWVyLW9uZS1nYW1lYm9hcmQgLmNvbHVtbnMsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5jb2x1bW5zLFxcbi5pbnB1dHMtZ2FtZWJvYXJkIC5jb2x1bW5zIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsYXllci1vbmUtZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLnNoaXAuaGl0LFxcbi5wbGF5ZXItdHdvLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5wbGF5ZXItb25lLWdhbWVib2FyZCAucm93cyAuY29sdW1ucy5oaXQsXFxuLnBsYXllci10d28tZ2FtZWJvYXJkIC5yb3dzIC5jb2x1bW5zLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdhbWVNb2R1bGVPYmplY3QgZnJvbSBcIi4vbW9kdWxlcy9HYW1lXCI7XG5pbXBvcnQgRE9NTW9kdWxlT2JqZWN0IGZyb20gXCIuL21vZHVsZXMvRE9NXCI7XG5cbkRPTU1vZHVsZU9iamVjdC5leGVjdXRlKCk7XG5nYW1lTW9kdWxlT2JqZWN0LmV4ZWN1dGUoKTtcbiJdLCJuYW1lcyI6WyJET01GYWN0b3J5IiwicHVic3ViIiwicmVjZWl2ZUNvbXB1dGVyQXR0YWNrIiwieCIsInkiLCJwbGF5ZXJCb2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdyIsImNvbHVtbiIsImNsYXNzTGlzdCIsImFkZCIsInNlbmRQbGF5ZXJBdHRhY2siLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImdldEF0dHJpYnV0ZSIsInB1Ymxpc2giLCJjcmVhdGVHYW1lYm9hcmQiLCJuYW1lIiwiYm9hcmQiLCJncmlkIiwiY2xhc3NOYW1lIiwiaSIsImoiLCJsZW5ndGgiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kR2FtZWJvYXJkcyIsImNvbXB1dGVyQm9hcmQiLCJnYW1lYm9hcmRzIiwic2hvd0FsZXJ0IiwidmljdG9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwicmVuZGVySW5wdXRNb2RhbCIsImlucHV0TW9kYWxEaXYiLCJpbnB1dEdyaWQiLCJpbnB1dFNoaXBzIiwiY29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyb3RhdGUiLCJob3Jpem9udGFsIiwic2hpcHMiLCJhZGRlZCIsIm1vdXNlZW50ZXJDYWxsYmFja0hvcml6b250YWwiLCJOdW1iZXIiLCJjZWxscyIsImN1cnJlbnRUYXJnZXQiLCJzaGlwTGVuZ3RoIiwiY29sIiwicHVzaCIsInNvbWUiLCJpdGVtIiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsIm1vdXNlZW50ZXJDYWxsYmFja1ZlcnRpY2FsIiwiZm9jdXNSb3ciLCJtb3VzZWxlYXZlQ2FsbGJhY2siLCJyZW1vdmUiLCJyZW1vdmVJbnB1dE1vZGFsIiwiaW5wdXRNb2RhbCIsImFjdGl2YXRlUmVhZHlEaXYiLCJyZWFkeURpdiIsImNsaWNrQ2FsbGJhY2siLCJzaGlwVG9BZGQiLCJmaW5kIiwic2hpcCIsImNlbGwiLCJzaGlwVG9BZGRJbmRleCIsImluZGV4T2YiLCJvcmllbnRhdGlvbiIsInJlcXVpcmVkIiwiRE9NTW9kdWxlT2JqZWN0IiwiZXhlY3V0ZSIsInN1YnNjcmliZSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibmV3RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiU2hpcCIsIkdhbWVib2FyZCIsIlBsYXllciIsInBsYXllciIsImNvbXB1dGVyIiwiYWRkU2hpcHMiLCJmbGVldCIsImF0IiwiYXV0b0FkZCIsImNvbXB1dGVyQXR0YWNrU2hpcCIsImF0dGFjayIsImF1dG8iLCJ4MSIsInkxIiwiYXJlQWxsU2hpcHNTdW5rIiwicGxheWVyQXR0YWNrU2hpcCIsImdhbWVNb2R1bGVPYmplY3QiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaGlwc0FycmF5IiwibGF0ZXN0QXR0YWNrU3RhdHVzIiwiY2hlY2tJZlNoaXBDYW5CZUFkZGVkIiwicmVxdWlyZWRTcGFjZSIsInNsaWNlIiwiZXZlcnkiLCJhZGRTaGlwSW5BcnJheSIsImFkZFNoaXBPbkJvYXJkIiwiYXR0YWNrU2hpcCIsImhpdFBvc2l0aW9uIiwidGFyZ2V0QXJlYUhvcml6b250YWwiLCJzaGlwTGVmdFNpZGUiLCJmaWx0ZXIiLCJ0YXJnZXRBcmVhVmVydGljYWwiLCJzaGlwVXBwZXJTaWRlIiwiaXNIaXRBdCIsImhpdCIsInJlY2VpdmVBdHRhY2siLCJpc1N1bmsiLCJ1bmRlZmluZWQiLCJ0YXJnZXRBcmVhIiwidXNlVGFyZ2V0QXJlYSIsInNwbGljZSIsImVuZW15IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIm9yaWVudGF0aW9ucyIsImV2ZW50cyIsImV2ZW50TmFtZSIsImRhdGEiLCJjYWxsYmFjayIsImlzQXJyYXkiLCJzaGlwQXJyYXkiLCJwb3NpdGlvbiIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==